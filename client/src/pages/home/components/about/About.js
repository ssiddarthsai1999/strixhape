import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import AboutCard from "./aboutCard/AboutCard";
import gsap from "gsap";

import "./about.css";
function About({ data }) {
    const cardRefs = useRef([]);
    const about = data.about;
    const [open, setOpen] = useState(false);
    const [openCardId, setOpenCardId] = useState(null);

    console.log("openCardId", openCardId);
    const handleCardOpen = (id) => {
        if (id !== openCardId) {
            // Check if the clicked card is already open
            setOpenCardId(id); // Set the ID of the card that is open
            requestAnimationFrame(() => {
                gsap.fromTo(
                    "#splitModalCard",
                    { opacity: 0, scale: 0.5, rotation: -45 },
                    {
                        opacity: 1, // Animate to fully visible
                        scale: 1, // Include any other animations you desire
                        duration: 1.2,
                        rotation: 0,
                        ease: "bounce.out",
                    }
                );
            });
        }
    };

    const handleCardClose = () => {
        gsap.to("#splitModalCard", {
            opacity: 0,
            scale: 0.5,
            rotation: 45,
            duration: 0.5,
            ease: "back.in",
            onComplete: () => {
                setOpenCardId(null);
            },
        });
    };

    useEffect(() => {
        gsap.from("#aboutCard1", {
            scrollTrigger: {
                trigger: "#aboutCard1",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 1,
            x: -1000,
            rotation: -90,
            ease: "power2.out",
        });
        gsap.from("#aboutCard3", {
            scrollTrigger: {
                trigger: "#aboutCard3",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 1,
            x: -1000,
            rotation: -90,
            ease: "power2.out",
        });
        gsap.from("#aboutCard5", {
            scrollTrigger: {
                trigger: "#aboutCard5",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 1,
            x: -1000,
            rotation: -90,
            ease: "power2.out",
        });

        gsap.from("#aboutCard2", {
            scrollTrigger: {
                trigger: "#aboutCard2",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 1,
            x: 1000,
            rotation: 90,
            ease: "power2.out",
        });
        gsap.from("#aboutCard4", {
            scrollTrigger: {
                trigger: "#aboutCard4",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 1,
            x: 1000,
            rotation: 90,
            ease: "power2.out",
        });
        gsap.from("#aboutCard6", {
            scrollTrigger: {
                trigger: "#aboutCard6",
                end: "bottom bottom",
                scrub: 1,
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play reverse play reverse",
            },
            duration: 1,
            x: 1000,
            rotation: 90,
            ease: "power2.out",
        });

        // Cleanup function
        return () => {};
    }, []);

    return (
        <div className="  relative mx-auto p-2 lg:min-h-screen xl:h-screen flex items-center justify-center md:px-24  ">
            <div className="flex flex-col xl:flex-row p-4">
                <div className="  w-full  md:w-1/2 flex flex-col ">
                    <h1 className="text-center md:text-left ">ABOUT US</h1>
                </div>
                <div className="  w-full lg:w-1/2 flex flex-col  justify-end align-bottom mt-[40px]">
                    <h4 className=" text-left ">
                        At DotStrix, we're passionate about harnessing the
                        power of technology to propel businesses forward. As a
                        dynamic team of developers and creatives, we specialize
                        in crafting innovative solutions tailored to meet your
                        digital needs. From crafting bespoke Discord bots to
                        streamlining server management, we pride ourselves on
                        delivering cutting-edge solutions that elevate your
                        Discord experience. 
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default About;
