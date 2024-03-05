import React, { useState, useEffect } from "react";
import gsap from "gsap";
import logo from "../../../../assets/images/strixlogo.png";

function Opening({ handleNormal }) {
    const [show, setShow] = useState(true); // To control the visibility

    useEffect(() => {
        // Animation start delay
        const timer = setTimeout(() => {
            animatePageTransition();
        }, 0); // Delay before starting the animation

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        // Animation start delay
        const timer = setTimeout(() => {
            handleNormal();
        }, 0); // Delay before starting the animation

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Animation start delay
        const timer = setTimeout(() => {
            animateDivTransition();
        }, 3000); // Delay before starting the animation

        return () => clearTimeout(timer);
    }, []);
    const animateDivTransition = () => {
        gsap.to("#divs", {
            color: "#e80d0d",
            opacity: 0,
            scale: -2,
            duration: 2, // Duration of the animation
            repeat: -1, // Infinite repeat
            ease: "ease", // Corrected easing function
        });
    };
    const animatePageTransition = () => {
        gsap.to("#logo", {
            rotation: 720, // Rotate 360 degrees
            duration: 1, // Duration of the animation
            repeat: -1, // Infinite repeat
            ease: "power3.out", // Corrected easing function
        });
        gsap.to("#text", {
            color: "#e80d0d",
            opacity: 20,
            scale: 2,
            duration: 1, // Duration of the animation
            repeat: -1, // Infinite repeat
            ease: "ease", // Corrected easing function
        });
    };
    // Adjusted the `top` value and `height` to reduce gaps and ensure faster covering of the viewport

    return (
        <div className="overflow-hidden  max-h-screen min-h-screen md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center content bg-black">
            {show}
            <div
                id="divs"
                className="text-center  "
                style={{ position: "relative", zIndex: 2 }}
            >
                <h1 className="mb-10" id="text">
                    DOTSTRIX
                </h1>
                <img
                    id="logo"
                    src={logo}
                    className="w-[200px] flex justify-center mx-auto"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Opening;
