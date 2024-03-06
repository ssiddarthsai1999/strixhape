import React, { useState, useEffect, useRef } from "react";

import Opening from "./components/opening/Opening";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import MobileNavbar from "../shared/navbar/MobileNavbar";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Project from "./components/art/Project";
import Client from "./components/client/Client";
import Footer from "../shared/footer/Footer";
import ParticlesComponent from "../shared/navbar/ParticlesComponent";
import FluidSimulation from "fluid-simulation-react";
function Home({ data, pageName, setPageName, setNavbarVisible }) {
    const [isLoading, setIsLoading] = useState(true);
    const [scrollToComponent, setScrollToComponent] = useState("scene");

    const handleLetsGo = () => {
        setPageName("opening");
    };
    const handleNormal = () => {
        setPageName("normal");
    };
    const handleScrollToComponent = (id) => {
        setScrollToComponent(id);
    };

    useEffect(() => {
        // Animation for entering the "mobileNavbar" page
        if (pageName === "mobileNavbar") {
            gsap.from("#mobileNavbar", {
                y: "-100%",
                opacity: 0,
                yoyo: true,
                duration: 1.5,
                ease: "power3.out",
            });
        } else if (pageName === "normal") {
            setIsLoading(true); // Set loading state to true when transitioning to the "normal" page
            gsap.from("#normal-page", {
                y: "-100%",
                opacity: 0,
                rotate: 180,
                visibility: "visible", // Make content visible right as animation starts
                yoyo: true,
                duration: 2,
                ease: "power2.out",
            });
        }
    }, [pageName]);

    useEffect(() => {
        const scrollToElement = () => {
            const element = document.getElementById(scrollToComponent);
            console.log("scroll", scrollToComponent);
            if (element) {
                gsap.to(window, {
                    scrollTo: {
                        y: element.offsetTop,
                        offsetY: 100, // adjust this value as needed
                    },
                    ease: "power2.inOut",
                });
            }
        };

        scrollToElement();
    }, [scrollToComponent]);

    return (
        <div className="   max-w-full  w-full mx-auto  relative">
            {pageName === "mobileNavbar" && (
                <div className="" id="mobileNavbar">
                    <MobileNavbar
                        pageName={pageName}
                        data={data}
                        setPageName={setPageName}
                        setNavbarVisible={setNavbarVisible}
                        handleScrollToComponent={handleScrollToComponent}
                        setScrollToComponent={setScrollToComponent}
                        scrollToComponent={scrollToComponent}
                    />
                </div>
            )}
            {pageName === "opening" && (
                <div className="">
                    <Opening
                        handleNormal={handleNormal}
                        setPageName={setPageName}
                    />
                </div>
            )}

            {pageName === "normal" && (
                <div className={`relative overflow-hidden `} id="normal-page">
                    <div className="">
                        <Hero />
                    </div>{" "}
                    <div className=" ">
                        <About data={data} />
                    </div>{" "}
                    <div className=" ">
                        <Services data={data} />
                    </div>{" "}
                    <div className=" lg:pt-[100px]">
                        <Project data={data} />
                    </div>{" "}
                    <div className="">
                        <Team data={data} />
                    </div>{" "}
                    <div className="">
                        <Client data={data} />
                    </div>{" "}
                    <div className="">
                        <Footer data={data} />
                    </div>{" "}
                </div>
            )}
        </div>
    );
}

export default Home;
