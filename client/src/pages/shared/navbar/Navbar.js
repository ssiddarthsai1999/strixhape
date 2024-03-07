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
import logo from "../../../assets/images/strixlogo.png";
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
                <img src={logo} className="w-14" alt="" />
            </div>
            <div
                className="flex gap-10 align-middle items-center"
                ref={audioRef}
            >
                {/* Render the music player if isMusicPlayed is true */}
                {!isMusicPlayed ? (
                    <Tooltip title="Play music">
                        <div onClick={playMusic} className="cursor-pointer">
                            <i
                                className="fa-solid fa-volume-xmark  cursor-pointer text-white fa-lg hover:scale-125  hover:text-[#e80d0d] duration-200 ease-in hover:-rotate-12"
                                onClick={playMusic}
                            ></i>
                        </div>
                    </Tooltip>
                ) : (
                    <Tooltip title="Stop music">
                        <div onClick={playMusic} className="cursor-pointer">
                            <i className="fa-solid fa-volume-off  text-white fa-lg hover:scale-125  hover:text-[#e80d0d] duration-200 ease-in  hover:-rotate-6"></i>
                        </div>
                    </Tooltip>
                )}
                <Tooltip title="Open menu">
                    <div
                        onClick={() => setPageName("mobileNavbar")}
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-bars-staggered fa-lg cursor-pointer  hover:scale-125  hover:text-[#e80d0d] duration-200 ease-in hover:rotate-12"></i>
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}

export default Navbar;
