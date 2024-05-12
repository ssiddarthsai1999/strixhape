import React, {
    useEffect,
    useRef,
    useLayoutEffect,
    useState,
    useMemo,
} from "react";
import FluidSimulation from "fluid-simulation-react";
import hero from "../../../../assets/images/homewallpapers/hero.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
function Hero() {
    const sceneRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sceneRef.current && imgRef.current) {
                const scrollY = window.scrollY;
                const translateY = scrollY * 0.2; // Adjust the speed of the parallax effect

                gsap.to(imgRef.current, {
                    y: translateY,
                    duration: 0.5, // Duration of the animation
                    ease: "power2.out", // Easing function
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(SplitText);
        const innovationpara = new SplitText("#innovationpara", {
            type: "words",
        });

        gsap.from(innovationpara.words, {
            duration: 3,
            opacity: 0,

            ease: "power1.inOut",
            stagger: {
                each: 0.13,
                from: "start",
            },
        });

        return () => {
            innovationpara.revert();
        };
    }, []);

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

    return (
        <div
            id="scene"
            className="relative overflow-hidden text-center flex justify-end items-center lg:h-screen"
        >
            <div className="z-20 text-white w-full lg:w-1/2">
                <div className="py-10 p-4  ">
                    <h1 className="mb-10 lg:mb-2 text-center lg:text-left  ">
                        LEAD THE INNOVATION!
                    </h1>
                    <h4
                        className="mb-10 w-full 2xl:w-1/2 text-left text-white "
                        id="innovationpara"
                    >
                        Elevate Your Online Presence with Expert Web Development
                        Solutions. Welcome to DotStrix, Where Innovation Meets
                        Design Excellence. Crafting Engaging Digital Experiences
                        Since 2022. Let's Transform Your Vision into Reality
                        Today!"
                    </h4>{" "}
                    <button
                        class="cursor-pointer justify-center lg:mx-0 mx-auto lg:justify-start flex font-semibold overflow-hidden relative z-100 border border-white group px-8 py-2"
                        onClick={() => scrollToElement("contactpage")}
                    >
                        <span class="relative z-10 text-white group-hover:text-black text-xl duration-500">
                            Contact
                        </span>
                        <span class="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span class="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                    {/* <button className="buttonVariation2 cursor-pointer "></button> */}
                </div>
            </div>
            <div
                data-depth="0.1"
                className={`absolute inset-0 overflow-hidden`}
                ref={sceneRef}
            >
                <img
                    ref={imgRef}
                    src={hero}
                    alt=""
                    className={`h-screen object-cover w-full `}
                />
            </div>{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>{" "}
        </div>
    );
}

export default Hero;
