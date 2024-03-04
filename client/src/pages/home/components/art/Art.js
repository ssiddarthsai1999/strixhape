import React from "react";
import ArtCard from "./artCard/ArtCard";
import Marquee from "react-fast-marquee";
import { Bounce } from "react-awesome-reveal";

function Art({ data }) {
    console.log("data",data.art)
    return (
        <div
            className="min-h-screen w-full pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex align-middle items-center mx-auto max-h-[2000px]"
            id="art"
        >
            <Bounce>
                <h1 className="text-center lg:mb-2 mb-10">ART SHOWCASE</h1>
            </Bounce>
            <div>
                <Marquee
                    speed={100}
                    loop={0}
                    className="flex gap-24"
   
                >
                    <div className="flex gap-10 md:gap-14 lg:gap-24 py-[50px] md:pt-[100px]">
                        {data.art.map((item) => (
                            <ArtCard item={item} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default Art;
