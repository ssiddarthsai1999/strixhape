import React from "react";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
function TeamCard({ item }) {
    return (
        <div key={item.id} className="z-40 cardBg min-w-[200px] md:min-w-[350px]  border-white sm:min-w-[250px] lg:min-w-[400px] xl:min-w-[600px] sm:w-[600px] lg:w-[1200px] h-[300px] md:h-[400px] border   flex-col flex ">
            <img
                src={item.image}
                alt=""
                className="w-full  h-[200px] md:h-[300px] lg:w-full object-cover"
            />

            <div className="flex justify-between items-center align-middle p-3  ">
                <Slide direction="left">
                    <div className="">
                        {" "}
                        <h4> {item.name}</h4>
                        <h4>{item.role}</h4>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div className="">
                        <a
                            href={item.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-twitter fa-fade fa-xl cursor-pointer text-white z-20"></i>
                        </a>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default TeamCard;
