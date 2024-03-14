import React, { useLayoutEffect, useEffect } from "react";
import TeamCard from "./teamCard/TeamCard";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import team from "../../../../assets/images/homewallpapers/team.jpg";
function Team({ data }) {
    // Show the "drag" text when entering and hide it when leaving

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(SplitText);

        const splitteam = new SplitText("#splitteam", {
            type: "chars",
        });

        gsap.from(splitteam.chars, {
            opacity: 0,
            rotation: 360,
            scale: -10,
            ease: "power1.out",
            stagger: {
                each: 0.23,
                from: "random",
            },
            scrollTrigger: {
                trigger: "#splitteam",
                start: "top bottom",
                end: "bottom center",
                scrub: 3,
                toggleActions: "play none none none",
            },
        });

        // Ensure everything is loaded before refreshing ScrollTrigger
        // This is a basic example; your actual implementation may vary
        // depending on how and when your content loads.
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 2000); // Adjust delay based on expected load time

        return () => {
            splitteam.revert();
        };
    }, []);

    return (
        <div
            className="  lg:min-h-screen lg:h-screen   w-full  justify-center flex-col flex align-middle items-center  mx-auto "
            id="team"
        >
            <div className=" z-40">
                {" "}
                <h1 className="text-center lg:mb-2 mb-10  z-40 " id="splitteam">
                    MEET THE TEAM
                </h1>
            </div>
            <ScrollContainer className="w-full ">
                <div className="  flex gap-10 md:gap-14 lg:gap-24 py-[50px] md:pt-[100px] z-40 ">
                    {data.team.map((item) => (
                        <TeamCard item={item} />
                    ))}
                </div>
            </ScrollContainer>{" "}
        </div>
    );
}

export default Team;
