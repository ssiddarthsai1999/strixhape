import React, { useEffect, useRef, useState } from "react";
import TeamCard from "./teamCard/TeamCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function TeamTwo({ data }) {
    // Show the "drag" text when entering and hide it when leaving

    return (
        <div
            className="   w-full  pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex align-middle items-center  mx-auto max-h-[2000px]"
            id="team"
        >
            <Bounce>
                <h1 className="text-center lg:mb-2 mb-10">MEET THE TEAM</h1>
            </Bounce>

            <div className="  flex  py-[50px] md:pt-[100px]  flex-col md:flex-row  w-full lg:w-[95%] mx-auto justify-center">
                {data.team.map((item) => (
                    <TeamCard item={item} />
                ))}
            </div>
        </div>
    );
}

export default TeamTwo;
