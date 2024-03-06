import React, { useLayoutEffect } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
import "./about.css";

function About({ data }) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const splitabout = new SplitText("#splitabout", {
            type: "chars",
        });
        gsap.from(splitabout.chars, {
            opacity: 0,

            rotationX: -180,
            x: 500,
            rotationY: 180,
            ease: "power1.inOut",
            stagger: {
                each: 0.13,
                from: "start",
            },
            scrollTrigger: {
                trigger: "#splitabout",
                start: "top bottom", // Trigger animation when top of the element reaches the center of the viewport
                end: "bottom center", // End animation when bottom of the element reaches the center of the viewport
                scrub: 3, // Smooth scrubbing effect on scroll
                toggleActions: "play none none none", // Toggle actions when element enters and leaves the viewport
            },
        });
        return () => {
            splitabout.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    return (
        <div className="relative mx-auto p-2 lg:min-h-screen xl:h-screen flex items-center justify-center md:px-24" id="about">
            <div className="flex flex-col xl:flex-row p-4">
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1 className="text-center md:text-left" id="splitabout">
                        ABOUT US
                    </h1>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-end align-bottom mt-[40px]">
                    <AttentionSeeker>
                        <h4 className="text-left" id="splitabout2">
                            At DotStrix, we're passionate about harnessing the
                            power of technology to propel businesses forward. As
                            a dynamic team of developers and creatives, we
                            specialize in crafting innovative solutions tailored
                            to meet your digital needs. From crafting bespoke
                            Discord bots to streamlining server management, we
                            pride ourselves on delivering cutting-edge solutions
                            that elevate your Discord experience.
                        </h4>
                    </AttentionSeeker>
                </div>
            </div>
        </div>
    );
}

export default About;
