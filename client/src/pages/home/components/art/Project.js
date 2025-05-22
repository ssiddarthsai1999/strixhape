import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Project({ data }) {
    const [hoveredId, setHoveredId] = useState(null);
    const [hoveredBg, setHoveredBg] = useState(null); // Default is black

    const handleHover = (item) => {
        if (item) {
            setHoveredId(item.id);
            setHoveredBg(item.image);
        } else {
            setHoveredId(null);
            setHoveredBg(null); // Reset to black
        }
    };

    return (
        <div
            className="lg:min-h-screen relative w-full pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex justify-center items-end"
            id="projects"
        >
            {/* Header section */}
            <div className="py-10 w-full lg:w-1/2 flex flex-col z-10 p-4">
                <h1 className="mb-10 md:mb-2 lg:text-left text-center z-10" id="splitprojects">
                    PROJECTS
                </h1>
                <div className="mb-10 w-full xl:w-1/2 text-left lg:text-left text-white px-4">
                    Explore our portfolio to see how we can bring your vision to life.
                </div>
            </div>

            {/* Main container with hover background */}
            <div
                className={`w-full z-10 min-h-[80vh] bg-center bg-cover transition-all duration-300 ease-in-out ${
                    !hoveredBg ? "bg-black" : ""
                }`}
                style={{
                    backgroundImage: hoveredBg ? `url(${hoveredBg})` : "none",
                }}
            >
                {data.art.map((item) => (
                    <div key={item.id} className="mb-4 group">
                        <Link
                            to={item.linkToWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex z-20 py-4 cursor-pointer align-middle justify-between items-center gap-10 border-b ${
                                hoveredId === item.id
                                    ? "border-[#e80d0d] duration-300 ease-in-out"
                                    : ""
                            } w-full lg:w-1/2`}
                            onMouseEnter={() => handleHover(item)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="flex gap-5">
                                <div>
                                    <p className="text-white">{item.year}</p>
                                </div>
                                <div>
                                    <h4 className="ml-2">{item.name}</h4>
                                    <h6 className="ml-2">{item.general}</h6>
                                </div>
                            </div>
                            <div className="mr-10">
                                <i
                                    className={`fa-solid fa-arrow-right duration-300 ease-in-linear ${
                                        hoveredId === item.id ? "text-[#e80d0d] -rotate-45" : ""
                                    }`}
                                ></i>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
