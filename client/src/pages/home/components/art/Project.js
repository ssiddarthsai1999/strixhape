import React, { useEffect, useRef, useLayoutEffect } from "react";
import team from "../../../../assets/images/homewallpapers/team.jpg";
import Marquee from "react-fast-marquee";
import { Bounce } from "react-awesome-reveal";
import ProjectCard from "./projectCard/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
function Project({ data }) {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrollY = window.scrollY;
                const translateY = scrollY * 0.3; // Adjust the speed of the parallax effect

                gsap.to(bgRef.current, {
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

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const splitprojects = new SplitText("#splitprojects", {
            type: "chars",
        });
        gsap.from(splitprojects.chars, {
            opacity: 0,

            x: -200,
            y: 100,
            rotationY: 20,
            scale: -10,
            ease: "bounce",
            stagger: {
                each: 0.13,
                from: "end",
            },
            scrollTrigger: {
                trigger: "#splitprojects",
                start: "top bottom", // Trigger animation when top of the element reaches the center of the viewport
                end: "bottom center", // End animation when bottom of the element reaches the center of the viewport
                scrub: 3, // Smooth scrubbing effect on scroll
                toggleActions: "play none none none", // Toggle actions when element enters and leaves the viewport
            },
        });
        return () => {
            splitprojects.revert();
        };
    }, []);

    return (
        <div
            className="lg:min-h-screen w-full pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex justify-center items-end  relative "
            id="art"
        >
            <div className="py-10 w-full lg:w-1/2 flex flex-col z-10 p-4">
                <h1
                    className="mb-10 md:mb-2 lg:text-left  text-center "
                    id="splitprojects"
                >
                    PROJECTS
                </h1>
                <JackInTheBox>
                    <h4 className="mb-10 w-full xl:w-1/2  text-left lg:text-left ">
                        Explore our portfolio to see how we can bring your
                        vision to life."
                    </h4>
                </JackInTheBox>
            </div>
            <div className="z-10 pb-24">
                <Marquee speed={100} loop={0} className="flex gap-24">
                    <div className="flex gap-10 md:gap-14 lg:gap-24 py-[50px] md:pt-[100px]">
                        {data.art.map((item) => (
                            <ProjectCard key={item.id} item={item} />
                        ))}
                    </div>
                </Marquee>
            </div>

            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden z-0"
                ref={bgRef}
            >
                <img src={team} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
}

export default Project;
