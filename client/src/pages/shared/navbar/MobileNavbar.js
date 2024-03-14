import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarPic from "../../../../src/assets/images/navbar.jpg";
import Marquee from "react-fast-marquee";
import ParticlesComponent from "./ParticlesComponent";
import gsap from "gsap";
function MobileNavbar({
    setPageName,
    data,
    pageName,
    scrollToComponent,
    setScrollToComponent,
    handleScrollToComponent,
}) {
    const [targetElementId, setTargetElementId] = useState(null);
    const handleNavToHome = (id) => {
        gsap.to("#mobileNavbar", {
            y: "-100%",
            opacity: 0,
            yoyo: true,
            duration: 1.5,
            ease: "power1.out",
            onComplete: () => {
                setPageName("normal");
                setScrollToComponent(id);
            },
        });
    };

    const closeMenu = () => {
        setPageName("normal");
    };
    useEffect(() => {
        // If targetElementId is set, update the URL with the target element ID
        if (targetElementId) {
            window.history.replaceState(
                null,
                null,
                `?targetElement=${targetElementId}`
            );
        }
    }, [targetElementId]);

    return (
        <div
            className="h-screen min-h-screen max-h-screen  overflow-hidden relative "
            id="mobileNavbar"
        >
            <div className="flex md:flex-row justify-between gap-10 p-2 md:p-10 z-20 ">
                <div className="z-20">
                    <h4>DotStrix @{new Date().getFullYear()}</h4>
                </div>
                <div className="flex items-center justify-center flex-row align-middle gap-2 z-20 text-white cursor-pointer">
                    <p>Close Menu</p>
                    <i
                        className="fa-solid fa-xmark fa-xl cursor-pointer hover:scale-125  hover:text-[#e80d0d] duration-200 ease-in"
                        onClick={handleNavToHome}
                    ></i>
                </div>
            </div>
            <div className="flex md:flex-row  flex-col justify-around items-center align-middle z-20">
                <div className="p-10 md:p-24 flex flex-col gap-10 z-20">
                    {data.navLinks.map((item, id) => (
                        <div>
                            <h4
                                className="cursor-pointer relative hover:scale-110 duration-200 ease-in hover:text-[#e80d0d] border border-transparent px-2 hover:border-b-[#e80d0d]"
                                onClick={() => handleNavToHome(item.linkTo)}
                            >
                                {item.name}{" "}
                                <span className="text-black text-[10px] ml-5 absolute top-1 ">
                                    0{id}/
                                </span>
                            </h4>
                        </div>
                    ))}
                </div>
                <div className="mb-6 md:mb-0 z-20">
                    <h5 className="uppercase font-bold my-2.5 mb-10">
                        Feel free to contact us on
                    </h5>
                    <div className="flex space-x-4 justify-center z-20">
                        <a
                            href="https://twitter.com/dt_smat"
                            aria-label="Twitter"
                        >
                            <i className="fa-brands text-white fa-twitter  fa-2xl hover:text-[#e80d0d] duration-200 ease-in hover:-rotate-6"></i>
                        </a>
                        <a
                            href="https://twitter.com/dt_smat"
                            aria-label="Discord"
                        >
                            <i className="fa-brands text-white fa-discord fa-2xl hover:text-[#e80d0d] duration-200 ease-in hover:rotate-6"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="w-[90%]  mt-10 border border-black mx-auto" />
            <div className="mt-10 z-20">
                <Marquee speed={200} loop={0}>
                    <h1>DOTSTRIX WEB AGENCY</h1>
                </Marquee>
            </div>
            <div
                data-depth="0.1"
                className="absolute inset-0 overflow-hidden z-0"
            >
                <img
                    src={navbarPic}
                    alt=""
                    className="h-screen object-cover w-full blur-2xl z-0"
                />{" "}
                <div className="z-20">
                    {" "}
                    <ParticlesComponent />
                </div>
            </div>{" "}
        </div>
    );
}

export default MobileNavbar;
