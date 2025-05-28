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
import logo from "../../../assets/images/neowavelogopng.png";
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 768);
    }
  }, []);
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
            className={`items-center flex justify-between align-middle  w-[100%] mx-auto rounded-[40px] px-14 p-4 `}
        >
            <div className="flex items-center justify-between  w-full mx-auto">
            {isDesktop && <img src={logo} className="w-24" alt="Logo" />}
                                 <button
                            class="cursor-pointer justify-center lg:mx-0 mx-auto lg:justify-start flex font-semibold overflow-hidden relative z-100 border border-white group px-8 py-2"
          
                        >
                   <a href="https://calendly.com/smat-neowave/30min" target="_blank" rel="noopener noreferrer">
  <span class="relative z-10 text-white group-hover:text-black text-xl duration-500">
    Book a call
  </span>
</a>

                            <span class="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span class="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>
            </div>

            
        </div>
    );
}

export default Navbar;
