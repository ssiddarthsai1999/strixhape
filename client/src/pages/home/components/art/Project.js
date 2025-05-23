import React, { useState } from "react";
import { Link } from "react-router-dom";

function Project({ data }) {
    const [hoveredId, setHoveredId] = useState(null);
    const [hoveredBg, setHoveredBg] = useState(null);

    const handleHover = (item) => {
        if (item) {
            setHoveredId(item.id);
            setHoveredBg(item.image);
        } else {
            setHoveredId(null);
            setHoveredBg(null);
        }
    };

    return (
        <div
            className=" w-full pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex flex-col items-center  mb-[100px]"
            id="projects"
        >
            {/* Header section */}
            <div className="py-10 w-full justify-center items-center flex flex-col z-10 p-4">
                <h1 className="mb-10 md:mb-2 lg:text-left text-center z-10" id="splitprojects">
                    PROJECTS
                </h1>
                <div className="mb-10 w-full xl:w-1/2 text-left lg:text-center text-white px-4">
                    Explore our portfolio to see how we can bring your vision to life.
                </div>
            </div>

            {/* Main content and hovered image section */}
            <div className="flex w-full pb-[100px] gap-6 ">
                {/* Left: Project List */}
                <div className="flex-1 flex flex-col items-end">
                    {data.art.map((item) => (
                        <div key={item.id} className="mb-4 group w-full lg:w-3/4">
                            <Link
                                to={item.linkToWeb}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex z-20 py-4 cursor-pointer justify-between items-center gap-10 border-b ${
                                    hoveredId === item.id
                                        ? "border-[#e80d0d] duration-300 ease-in-out"
                                        : ""
                                }`}
                                onMouseEnter={() => handleHover(item)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="flex gap-5">
                               
                                    <div>
                                        <h4 className="ml-2">{item.name}</h4>
                                        <h6 className="ml-2">{item.general}</h6>
                                    </div>
                                </div>
                                <div className="mr-10">
                                    <i
                                        className={`fa-solid fa-arrow-right duration-300 ease-in-linear ${
                                            hoveredId === item.id
                                                ? "text-[#e80d0d] -rotate-45"
                                                : ""
                                        }`}
                                    ></i>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Right: Hovered Image */}
                <div className="hidden lg:flex lg:flex-1 items-start justify-center">
                    {hoveredBg && (
                        <img
                            src={hoveredBg}
                            alt="Preview"
                            className="max-w-[90%] w-full bg-cover max-h-[500px] rounded-xl shadow-lg transition-all duration-300"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
