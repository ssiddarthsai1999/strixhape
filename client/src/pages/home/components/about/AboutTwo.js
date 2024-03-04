import React, {  useRef, useState } from "react";
import {  Slide } from "react-awesome-reveal";

import gsap from "gsap";

import "./about.css";
import AboutCardTwo from "./aboutCard/AboutCardTwo";
function AboutTwo({ data }) {
    const cardRefs = useRef([]);
    const about = data.about;
    const [open, setOpen] = useState(false);
    const [openCardId, setOpenCardId] = useState(null);

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

    return (
        <div className="relative mx-auto p-2  " id="factions">
            <div className="py-10 mx-auto w-full md:w-1/2 flex flex-col">
                <Slide direction="top">
                    <h1 className=" mb-2 md:mb-6 text-center mt-10  md:mt-[100px]">
                        FACTIONS
                    </h1>
                </Slide>
            </div>

            <div className=" flex flex-col mx-auto justify-center gap-10 w-full">
                {data.factions.map((item) => (
                    <AboutCardTwo
                        item={item}
                        handleCardOpen={handleCardOpen}
                        handleCardClose={handleCardClose}
                        openCardId={openCardId}
                    />
                ))}
            </div>
        </div>
    );
}

export default AboutTwo;
