import React, { useEffect, useRef } from "react";
import hero from "../../../../assets/images/homewallpapers/hero.jpg";
import gsap from "gsap";

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

    return (
        <div
            id="scene"
            className="relative overflow-hidden text-center flex justify-end items-center lg:h-screen"
        >
            <div className="z-10 text-white w-full lg:w-1/2">
                <div className="py-10 p-4  ">
                    <h1 className="mb-10 lg:mb-2 text-center lg:text-left">
                        LEAD THE INNOVATION!
                    </h1>
                    <h4 className="mb-10 w-full 2xl:w-1/2 text-left text-white">
                        Elevate Your Online Presence with Expert Web Development
                        Solutions. Welcome to DotStrix, Where Innovation Meets
                        Design Excellence. Crafting Engaging Digital Experiences
                        Since [Year]. Let's Transform Your Vision into Reality
                        Today!"
                    </h4>{" "}
                    <button
                        onClick={() => console.log("hi")}
                        className="buttonVariation2 cursor-pointer justify-center lg:mx-0 mx-auto lg:justify-start flex"
                    >
                        contact
                    </button>
                </div>
            </div>
            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden"
                ref={sceneRef}
            >
                <img
                    ref={imgRef}
                    src={hero}
                    alt=""
                    className="h-screen object-cover w-full"
                />
            </div>{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
}

export default Hero;
