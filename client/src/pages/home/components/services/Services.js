import React, {
    useEffect,
    useRef,
    useLayoutEffect,
    useState,
    useMemo,
} from "react";
import gsap from "gsap";
import services from "../../../../assets/images/homewallpapers/services.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
function Services({ data }) {
    const bgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const handleScroll = () => {
            if (bgRef.current) {
                const scrollY = window.scrollY;
                const translateY = scrollY * -0.1; // Adjust the speed of the parallax effect

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

        const splitservices = new SplitText("#splitservices", {
            type: "chars",
        });
        gsap.from(splitservices.chars, {
            opacity: 0,

            rotationX: -70,
            x: -500,
            y: -100,
            rotationY: 20,
            scale: -10,
            ease: "power1.inOut",
            stagger: {
                each: 0.13,
                from: "start",
            },
            scrollTrigger: {
                trigger: "#splitservices",
                start: "top bottom", // Trigger animation when top of the element reaches the center of the viewport
                end: "bottom center", // End animation when bottom of the element reaches the center of the viewport
                scrub: 3, // Smooth scrubbing effect on scroll
                toggleActions: "play none none none", // Toggle actions when element enters and leaves the viewport
            },
        });
        return () => {
            splitservices.revert();
        };
    }, []);

    return (
        <div
            className="relative mx-auto p-2 min-h-screen md:px-24  flex justify-center flex-col py-[100px] "
            id="services"
        >
            <div className="p-4 py-10 mx-auto w-full xl:w-1/2 flex flex-col z-20">
                <h1 className="text-center " id="splitservices">
                   AI WORKFLOW 

                </h1>
                <Zoom triggerOnce>
                    <h4 className=" w-full lg:w-1/2 text-left mt-5   lg:text-left mx-auto justify-center flex px-4">
                       Our AI Workflow is a proven 4-step process—from discovery to deployment—designed to turn ideas into scalable AI solutions.
                    </h4>
                </Zoom>
            </div>
            <div class="mx-auto  flex justify-center mt-[100px]  z-20">
                <div class=" w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px]  rounded-tl-full relative  border border-white  flex items-center justify-center">
                    <div className="text-center md:mt-10 md:ml-10 mt-3 ml-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                            Discover
                        </h4>
                        <i className="mt-2 fa-solid fa-globe "></i>
                    </div>
                </div>

                <div class="w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px] rounded-tr-full relative border border-white flex items-center justify-center">
                    <div class="text-center md:mt-10 md:mr-10 mt-3 mr-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                          Design & Prototype
                        </h4>
                        <i className=" mt-2 fa-brands fa-discord"></i>
                    </div>
                </div>
            </div>
            <div class="mx-auto  flex justify-center  z-20">
                <div class="w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px] rounded-bl-full relative  border border-white  flex items-center justify-center">
                    <div class="text-center md:mb-10 md:ml-10 mb-3 ml-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                      Deploy & Integrate
                        </h4>
                        <i className=" mt-2 fa-solid fa-server"></i>
                    </div>
                </div>

                <div class="w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px]   rounded-br-full relative border border-white  flex items-center justify-center">
                    <div class="text-center md:mb-10 md:mr-10 mb-3 mr-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                      Maintain & Evolve
                        </h4>
                        <i class="fa-brands fa-apple mt-2 text-[22px]"></i>
                    </div>
                </div>
            </div>
            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden z-0"
            >
                <img
                    src={services}
                    alt=""
                    // ref={bgRef}
                    className="object-cover w-full h-full"
                />
            </div>{" "}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div> */}
        </div>
    );
}

export default Services;
