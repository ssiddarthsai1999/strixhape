import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import hero from "../../../../assets/images/homewallpapers/hero.jpg";
import gsap from "gsap";
import { Zoom } from "react-awesome-reveal";
import { SplitText } from "gsap/SplitText";
function Hero() {
    const sceneRef = useRef(null);
    const imgRef = useRef(null); // Reference for the image you want to rotate

    useEffect(() => {
        // Initialize parallax
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current);
            return () => parallaxInstance.destroy();
        }
    }, []);

    useEffect(() => {
        // Rotate image based on mouse movement
        const handleMouseMove = (event) => {
            const { pageX, pageY } = event;
            const rotateX = (pageY / window.innerHeight - 0.5) * 10; // Adjust rotation sensitivity here
            const rotateY = (pageX / window.innerWidth - 0.5) * 10; // Adjust rotation sensitivity here

            if (imgRef.current) {
                imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // useEffect(() => {
    //     gsap.registerPlugin(SplitText);

    //     const splitHeroH1 = new SplitText("#splitHeroh1", {
    //         type: "chars",
    //     });
    //     const splitHeroH4 = new SplitText("#splitHeroh4", {
    //         type: "words",
    //     });

    //     gsap.from(splitHeroH1.chars, {
    //         duration: 1,
    //         opacity: 0,
    //         rotation: 360,
    //         scale: 0.1,
    //         delay: 1.5,
    //         transformOrigin: "center center", // Ensures scaling and rotation are centered

    //         ease: "back.out(1.7)", // Use a 'back' ease for a nice overshoot effect
    //         stagger: {
    //             each: 0.03,
    //             from: "start",
    //         },
    //     });

    //     gsap.from(splitHeroH4.words, {
    //         duration: 3,
    //         opacity: 0,
    //         delay: 1.5,
    //         ease: "power1.inOut",
    //         stagger: {
    //             each: 0.13, // Adjust time between each word appearing
    //             from: "start", // Animation will start from the left
    //         },
    //     });

    //     return () => {
    //         splitHeroH1.revert();
    //         splitHeroH4.revert();
    //     };
    // }, []);

    return (
        <div
            id="scene"
            className="relative overflow-hidden text-center flex justify-end items-center h-screen"
        >
            <div className="z-10 text-white    w-1/2">
                <div className="py-10 ">
                    <h1 className="mb-10 md:mb-2 text-left  ">
                        LEAD THE INNOVATION!
                    </h1>
                    <h4 className="mb-10 w-1/2  text-left text-white">
                        We roar with success, delivering the nymos through
                        versatile design, branding, and the latest tech
                        development.
                    </h4>{" "}
                    <button
                        onClick={() => console.log("hi")}
                        className="buttonVariation1 cursor-pointer justify-start flex"
                    >
                        Button
                    </button>
                </div>
            </div>
            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden"
                ref={sceneRef}
            >
                <img
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
