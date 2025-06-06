import React, { useLayoutEffect } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; import Marquee from "react-fast-marquee";
import unfold from "../../../../assets/images/client/unfold.png";
import onec from "../../../../assets/images/client/onec.png";
import vertex from "../../../../assets/images/client/vertex.png";
import neth from "../../../../assets/images/client/neth.svg";
import paypal from "../../../../assets/images/client/paypal.svg";
import venmo from "../../../../assets/images/client/venmo.svg";
import jump from "../../../../assets/images/client/jump.svg";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
import "./about.css";
import ParticlesComponent from "../../../shared/navbar/ParticlesComponent";

function About({ data }) {
    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const splitabout = new SplitText("#splitabout", {
    //         type: "chars",
    //     });
    //     gsap.from(splitabout.chars, {
    //         opacity: 0,

    //         rotationX: -180,
    //         x: 500,
    //         rotationY: 180,
    //         ease: "power1.inOut",
    //         stagger: {
    //             each: 0.13,
    //             from: "start",
    //         },
    //         scrollTrigger: {
    //             trigger: "#splitabout",
    //             start: "top bottom", // Trigger animation when top of the element reaches the center of the viewport
    //             end: "bottom center", // End animation when bottom of the element reaches the center of the viewport
    //             scrub: 3, // Smooth scrubbing effect on scroll
    //             toggleActions: "play none none none", // Toggle actions when element enters and leaves the viewport
    //         },
    //     });
    //     return () => {
    //         splitabout.revert();
    //         ScrollTrigger.refresh();
    //     };
    // }, []);

    return (
        <div
            className="relative mx-auto  p-2  flex flex-col items-center justify-center xl:px-24"
            id="about"
        >

            <div className="flex flex-col xl:flex-col  items-center p-4">
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1
                        className="text-center md:text-center mb-14 z-20"
                        id="splitabout"
                    >
                        WHO WE ARE
                    </h1>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-end align-bottom  z-20">
                    <AttentionSeeker triggerOnce>
                        <h4 className="text-center z-50 px-4 font-light" id="splitabout2  ">
                          NeoWave Studio is a future-forward tech & creative solutions studio built by digital natives for digital pioneers. We bridge innovation and impact, blending AI, design, and tech to build what’s next. We don’t follow old trends, we’re the new wave.
                        </h4>
                    </AttentionSeeker>
                </div>
            </div>
        </div>
    );
}

export default About;
