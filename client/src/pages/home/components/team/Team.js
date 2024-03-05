import React from "react";
import TeamCard from "./teamCard/TeamCard";
import ScrollContainer from "react-indiana-drag-scroll";
import team from "../../../../assets/images/homewallpapers/team.jpg";
function Team({ data }) {
    // Show the "drag" text when entering and hide it when leaving

    return (
        <div
            className="  lg:min-h-screen lg:h-screen   w-full  justify-center flex-col flex align-middle items-center  mx-auto "
            id="team"
        >
            <div className="z-10">
                {" "}
                <h1 className="text-center lg:mb-2 mb-10 ">MEET THE TEAM</h1>
            </div>
            <ScrollContainer className="w-full z-10">
                <div className="  flex gap-10 md:gap-14 lg:gap-24 py-[50px] md:pt-[100px]  ">
                    {data.team.map((item) => (
                        <TeamCard item={item} />
                    ))}
                </div>
            </ScrollContainer>{" "}
        </div>
    );
}

export default Team;
