import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import { Tooltip } from "@mui/material";
import equalizer from "../../../assets/icons/no-music.png";
import gsap from "gsap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import aot from "../../../assets/songs/aot.mp3";

function Navbar({ data, pageName, setPageName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
    const dispatch = useDispatch();
    const [isMusicPlayed, setIsMusicPlayed] = useState(false);
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.theme);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();
    const navLinks = data.navLinks;

    // For setting navbar to a different design when scrolled
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

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(aot);
        audioRef.current.volume = 0.1;
    }, []);

    const playMusic = () => {
        setIsMusicPlayed(!isMusicPlayed);
        const audio = audioRef.current;
        if (isMusicPlayed) {
            audio.pause(); // Pause the audio if it's already playing
        } else {
            audio.play(); // Play the audio if it's not playing
        }
    };

    return (
        <div
            className={`items-center flex justify-between align-middle w-[90%] max-w-[1800px] mx-auto rounded-[40px] p-4`}
        >
            <div>
                <p>DotStrix</p>
            </div>
            <div
                className="flex gap-10 align-middle items-center"
                ref={audioRef}
            >
                {/* Render the music player if isMusicPlayed is true */}
                {isMusicPlayed ? (
                    <Tooltip title="Stop music">
                        <i
                            className="fa-solid fa-volume-xmark  cursor-pointer text-white fa-lg"
                            onClick={playMusic}
                        ></i>
                    </Tooltip>
                ) : (
                    <Tooltip title="Play music">
                        <i
                            className="fa-solid fa-volume-off cursor-pointer text-white fa-lg"
                            onClick={playMusic}
                        ></i>
                    </Tooltip>
                )}
                <Tooltip title="Open menu">
                    <i className="fa-solid fa-bars-staggered fa-lg cursor-pointer "></i>
                </Tooltip>
            </div>
        </div>
    );
}

export default Navbar;