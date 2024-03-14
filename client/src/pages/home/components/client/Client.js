import React, { useEffect, useRef, useLayoutEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clients from "../../../../assets/images/homewallpapers/clients.jpg";
import { SplitText } from "gsap/SplitText";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ClientCard from "./clientCard/ClientCard";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
function Client({ data }) {
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

        const splitclient = new SplitText("#splitclient", {
            type: "words",
        });

        gsap.from(splitclient.words, {
            opacity: 0,
            color: "#e80d0d",

            scale: 10,
            ease: "power1.out",
            stagger: {
                each: 0.23,
                from: "end",
            },
            scrollTrigger: {
                trigger: "#splitclient",
                start: "top bottom", // Trigger animation when top of the element reaches the center of the viewport
                end: "bottom center", // End animation when bottom of the element reaches the center of the viewport
                scrub: 3, // Smooth scrubbing effect on scroll
                toggleActions: "play none none none", // Toggle actions when element enters and leaves the viewport
            },
        });

        return () => {
            splitclient.revert();
        };
    }, []);

    return (
        <div
            className="relative mx-auto p-2 min-h-screen md:px-24 flex justify-center flex-col py-[100px]"
            id="clientspage"
        >
            <div className="py-10 mx-auto w-full lg:w-1/2 flex flex-col z-20 p-4">
                <h1 className="text-center" id="splitclient">
                    WHAT OUR CLIENTS SAY ABOUT US
                </h1>
                <Roll>
                    <h4 className="w-full text-left mx-auto justify-center flex mt-10">
                        "Our clients rave about our innovative solutions and
                        exceptional service, citing us as their go-to agency for
                        all things digital. Experience the difference with us
                        today!"
                    </h4>
                </Roll>
            </div>
            <Carousel
                showStatus={false}
                showThumbs={false}
                stopOnHover
                transitionTime={5}
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                className="mt-4 lg:mt-10 z-20 w-full xl:w-1/2 mx-auto"
            >
                {data.clients.map((item) => (
                    <div
                        key={item.id}
                        className="mx-auto flex justify-center p-8 lg:p-10"
                    >
                        <ClientCard item={item} />
                    </div>
                ))}
            </Carousel>
            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden z-0"
            >
                <img
                    src={clients}
                    ref={bgRef}
                    alt=""
                    className="absolute inset-0 overflow-hidden z-0"
                />
            </div>{" "}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div> */}
        </div>
    );
}

export default Client;
