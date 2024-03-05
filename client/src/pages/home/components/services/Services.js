import React, { useEffect, useRef, useLayoutEffect } from "react";
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
                const translateY = scrollY * 0.1; // Adjust the speed of the parallax effect

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

    useEffect(() => {
        const splitH1 = new SplitText("#splith1", { type: "chars" });
        const splitH3 = new SplitText("#splith3", { type: "words" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#splith1",
                start: "top bottom", // When the top of the trigger hits the center of the viewport
                end: "bottom center", // Adjust as needed
                scrub: 1, // Smooth scrubbing effect on scroll
                // Toggle actions when scrolling forward and backward
                toggleActions: "play reverse play reverse",
            },
        });

        // Add your animation to the timeline
        tl.fromTo(
            splitH1.chars,
            {
                duration: 1,
                x: -100,
                color: "#C5FCFC",
                ease: "power2.inOut",
                stagger: 0.1,
            },
            {
                duration: 1,
                x: 0,
                color: "#ccc", // Use a callback function to set color
                ease: "power2.inOut",
                stagger: 0.1,
            }
        );

        gsap.from(splitH3.words, {
            scrollTrigger: {
                trigger: "#splith3",
                start: "top bottom", // Adjust as needed. "top bottom" means the animation starts when the top of #splith3 hits the bottom of the viewport.
                toggleActions: "play none none none", // Adjust if you want the animation to reverse on scroll up.
            },
            duration: 0.5,
            opacity: 0,
            ease: "power2.out",
            stagger: {
                each: 0.05,
                from: "start",
            },
        });

        // Cleanup function
        return () => {
            tl.kill();

            splitH1.revert();
            splitH3.revert();
        };
    }, []);

 useLayoutEffect(() => {
     gsap.registerPlugin(ScrollTrigger);

     const splitservices = new SplitText("#splitservices", {
         type: "chars",
     });
     gsap.from(splitservices.chars, {
         opacity: 0,
         skew: 30,
         rotationX: -70,
         x: -500,
         y:-100,
         rotationY: 20,
         scale:-10,
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
        <div className="relative mx-auto p-2 min-h-screen md:px-24  flex justify-center flex-col py-[100px] ">
            <div className="p-4 py-10 mx-auto w-full xl:w-1/2 flex flex-col z-10">
                <h1 className="text-center " id="splitservices">
                    SERVICES
                </h1>
                <Zoom>
                    <h4 className=" w-full lg:w-1/2 text-left mt-5   lg:text-left mx-auto justify-center flex">
                        "Unlock your digital potential with our tailored Discord
                        bot solutions and seamless web development services.
                        Discover how we can elevate your online presence today!"
                    </h4>
                </Zoom>
            </div>
            <div class="mx-auto  flex justify-center mt-[100px]  z-10">
                <div class=" w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px]  rounded-tl-full relative  border border-[#E80D0D]  flex items-center justify-center">
                    <div className="text-center md:mt-10 md:ml-10 mt-3 ml-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                            Website development
                        </h4>
                        <i class="fa-solid fa-globe fa-lg"></i>
                    </div>
                </div>

                <div class="w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px] rounded-tr-full relative border border-[#E80D0D] flex items-center justify-center">
                    <div class="text-center md:mt-10 md:mr-10 mt-3 mr-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                            Website development
                        </h4>
                        <i class="fa-solid fa-globe fa-lg"></i>
                    </div>
                </div>
            </div>
            <div class="mx-auto  flex justify-center  z-10">
                <div class="w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px] rounded-bl-full relative  border border-[#E80D0D]  flex items-center justify-center">
                    <div class="text-center md:mb-10 md:ml-10 mb-3 ml-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                            Website development
                        </h4>
                        <i class="fa-solid fa-globe fa-lg"></i>
                    </div>
                </div>

                <div class="w-[120px] h-[120px] md:h-[200px] md:w-[200px]  lg:h-[300px] lg:w-[300px]   rounded-br-full relative border border-[#E80D0D]  flex items-center justify-center">
                    <div class="text-center md:mb-10 md:mr-10 mb-3 mr-3">
                        <h4 className="text-[10px] md:text-[16px] lg:text-[20px]">
                            Website development
                        </h4>
                        <i class="fa-solid fa-globe fa-lg"></i>
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
                    ref={bgRef}
                    className="object-cover w-full h-full"
                />
            </div>{" "}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div> */}
        </div>
    );
}

export default Services;
