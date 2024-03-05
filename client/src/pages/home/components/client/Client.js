import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import gsap from "gsap";
import clients from "../../../../assets/images/homewallpapers/clients.jpg";
import hero from "../../../../assets/images/homewallpapers/hero.jpg";
import { SplitText } from "gsap/SplitText";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ClientCard from "./clientCard/ClientCard";
function Client({ data }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        requestAnimationFrame(() => {
            gsap.fromTo(
                "#splitModal",
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
    };

    const handleClose = () => {
        // Start the closing animation with GSAP.
        gsap.to("#splitModal", {
            opacity: 0,
            scale: 0.5,
            rotation: 45,
            duration: 0.5,
            ease: "back.in",
            onComplete: () => {
                setOpen(false);
            },
        });
    };

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

    return (
        <div className="relative mx-auto p-2 min-h-screen md:px-24 flex justify-center flex-col py-[100px] ">
            <div className="py-10 mx-auto w-full md:w-1/2 flex flex-col z-10">
                <h2 className="text-center">WHAT OUR CLIENTS SAY ABOUT US</h2>
                <p className="w-full text-left mx-auto justify-center flex mt-10">
                    "Our clients rave about our innovative solutions and
                    exceptional service, citing us as their go-to agency for all
                    things digital. Experience the difference with us today!"
                </p>
            </div>
            <Carousel
                showStatus={false}
                showThumbs={false}
                stopOnHover
                transitionTime={4}
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                className="mt-10 z-10  w-1/2 mx-auto"
            >
                {data.clients.map((item) => (
                    <div
                        key={item.id}
                        className="mx-auto flex justify-center  p-24"
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
                    alt=""
                    className="object-cover w-full h-full"
                />
            </div>{" "}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>
    );
}

export default Client;
