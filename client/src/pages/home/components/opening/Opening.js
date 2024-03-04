import React, { useState, useEffect } from "react";
import gsap from "gsap";
import logo from "../../../../assets/images/logopfp.gif";

function Opening({ handleNormal }) {
    const [show, setShow] = useState(true); // To control the visibility

    useEffect(() => {
        // Animation start delay
        const timer = setTimeout(() => {
            animatePageTransition();
        }, 0); // Delay before starting the animation

        return () => clearTimeout(timer);
    }, []);

    const animatePageTransition = () => {
        // Animate each diamond-shaped bar to move from top to bottom and vanish
        gsap.to(".diamond", {
            y: "100vh", // Move slightly more than 100vh to ensure it's below the screen
            ease: "power2.inOut",
            duration: 0.3, // Make the fall faster
            stagger: 0.05, // Reduce the time between each bar's animation start
            onComplete: () => {
                handleNormal();
                setShow(false); // Hide diamonds after animation
            },
        });
    };

    // Adjusted the `top` value and `height` to reduce gaps and ensure faster covering of the viewport
    const diamonds = Array.from({ length: 20 }, (_, index) => (
        <div
            key={index}
            className={`diamond ${show ? "show" : ""}`}
            style={{
                position: "absolute",
                top: `-${index * 5}vh`, // Reduced gap between bars
                left: 0,
                width: "100vw", // Full viewport width
                height: "10vh", // Adjusted height for less gap
                backgroundColor: "transparent",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%", // Full width of the parent
                    height: "100%", // Full height of the parent
                    backgroundColor: "#121315", // Color of the diamond bar
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Diamond shape
                }}
            ></div>
        </div>
    ));

    return (
        <div className="layer min-h-screen md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center content bg-black">
            {show && diamonds} {/* Only render diamonds if `show` is true */}
            <div
                className="text-center"
                style={{ position: "relative", zIndex: 2 }}
            >
                <h1 className="text-white" id="splith1">
                    The Mob
                </h1>
                <img
                    src={logo}
                    className="w-[200px] flex justify-center mx-auto"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Opening;
