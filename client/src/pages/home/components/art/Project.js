import React from "react";
import team from "../../../../assets/images/homewallpapers/team.jpg";
import Marquee from "react-fast-marquee";
import { Bounce } from "react-awesome-reveal";
import ProjectCard from "./projectCard/ProjectCard";

function Project({ data }) {
    console.log("data", data.art);
    return (
        <div
            className="min-h-screen w-full pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex justify-center items-end  relative "
            id="art"
        >
            <div className="py-10  w-1/2 flex flex-col z-10">
                <h1 className="mb-10 md:mb-2 text-left   ">PROJECTS</h1>
                <h4 className="mb-10 w-1/2  text-left ">
                    Explore our portfolio to see how we can bring your vision to
                    life."
                </h4>{" "}
            </div>
            <div className="z-10 pb-24">
                <Marquee speed={100} loop={0} className="flex gap-24">
                    <div className="flex gap-10 md:gap-14 lg:gap-24 py-[50px] md:pt-[100px]">
                        {data.art.map((item) => (
                            <ProjectCard item={item} />
                        ))}
                    </div>
                </Marquee>
            </div>{" "}
            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden z-0"
            >
                <img
                    src={team}
                    alt=""
                    className=" object-cover w-full h-full"
                />
            </div>{" "}
        </div>
    );
}

export default Project;
