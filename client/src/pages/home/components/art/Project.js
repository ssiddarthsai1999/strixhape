import React, { useEffect, useState, useRef } from "react";
import team from "../../../../assets/images/homewallpapers/team.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";
function Project({ data }) {
    const [hoveredId, setHoveredId] = useState(null);
    const parallaxInstances = useRef({});
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
    const handleHover = (item) => {
        // Check if item is not null before trying to access its id
        if (item) {
            setHoveredId(item.id);

            // Delay parallax initialization to ensure the image is visible and rendered
            setTimeout(() => {
                // Only initialize Parallax if it hasn't been initialized for this item yet
                if (!parallaxInstances.current[item.id]) {
                    const element = document.querySelector(
                        `#parallax-container-${item.id}`
                    );
                    if (element) {
                        // Initialize and store the Parallax instance for future reference
                        parallaxInstances.current[item.id] = new Parallax(
                            element
                        );
                    }
                }
            }, 100); // Small timeout to ensure the DOM has updated
        } else {
            // If item is null (on mouse leave), reset hoveredId and potentially clean up
            setHoveredId(null);

            // Optional: Cleanup or disable the parallax effect for the previously hovered item
            // This would depend on how you want the interaction to behave; if you want to
            // destroy the instance or simply disable it temporarily.
        }
    };

    useEffect(() => {
        // Cleanup parallax instances on component unmount
        return () => {
            Object.values(parallaxInstances.current).forEach((instance) =>
                instance.destroy()
            );
        };
    }, []);

    return (
        <div
            className=" lg:min-h-screen relative  w-full pt-[100px] lg:pt-[2px] p-4 lg:p-6 flex-col flex justify-center items-end "
            id="projects"
        >
            <div className="py-10 w-full lg:w-1/2 flex flex-col z-40 p-4 ">
                <h1
                    className="mb-10 md:mb-2 lg:text-left text-center z-50"
                    id="splitprojects"
                >
                    PROJECTS
                </h1>
                <div className="mb-10 w-full xl:w-1/2 text-left lg:text-left text-white">
                    Explore our portfolio to see how we can bring your vision to
                    life.
                </div>
            </div>

            <div className="w-full z-50  min-h-screen">
                {data.art.map((item) => (
                    <div key={item.id} className="mb-4 group">
                        <Link
                            to={item.linkToWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex z-20 py-4  cursor-pointer align-middle justify-between items-center gap-10 border-b ${
                                hoveredId === item.id &&
                                "border-[#e80d0d] duration-300 ease-in-out"
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
                            <div className=" mr-10">
                                <i
                                    className={`fa-solid fa-arrow-right duration-300 ease-in-linear ${
                                        hoveredId === item.id &&
                                        "text-[#e80d0d] -rotate-45"
                                    }`}
                                ></i>
                            </div>
                        </Link>
                        <div
                            id={`parallax-container-${item.id}`}
                            className={`absolute top-0 left-0 -z-10 w-full transition-opacity duration-700 ease-in-out ${
                                hoveredId === item.id
                                    ? "opacity-100"
                                    : "opacity-0  "
                            }`}
                            style={{
                                pointerEvents:
                                    hoveredId === item.id ? "auto" : "none",
                            }}
                        >
                            <img
                                data-depth="0.3"
                                src={item.image}
                                className=" w-full lg:w-[80%] h-screen object-top object-cover -z-0 "
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden z-0"
                ref={bgRef}
            >
                <img src={team} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
}

export default Project;
