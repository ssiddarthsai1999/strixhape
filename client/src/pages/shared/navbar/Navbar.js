import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";

import gsap from "gsap";

function Navbar({ data, pageName, setPageName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.theme);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();
    const navLinks = data.navLinks;
    console.log("nav", navLinks);

    //for setting navbar to a different design when scrolled
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 250);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        gsap.set(menuRef.current, { y: "-100%" });
        console.log(menuRef.current);
    }, []);

    const handleMenuOpen = () => {
        setPageName("mobileNavbar");
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleDarkOrLight = () => {
        dispatch(toggleTheme());
    };
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        console.log("clicked", id);
        if (element) {
            gsap.to(window, {
                scrollTo: {
                    y: element.offsetTop,
                    offsetY: 100, // adjust this value as needed
                },
                ease: "power2.inOut",
            });
        }
    };

    return (
        <div
            className={` items-center flex justify-between align-middle w-[90%] max-w-[1800px]  mx-auto rounded-[40px] p-4  `}
        >
            <div>
                <p>DotStrix</p>
            </div>
            <div className="flex gap-10">
                {" "}
                <i className="fa-solid fa-music fa-lg cursor-pointer"></i>
                <i className="fa-solid fa-bars-staggered fa-lg cursor-pointer"></i>
            </div>
        </div>
    );
}

export default Navbar;
