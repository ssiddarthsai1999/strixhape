import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
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
                setScrollToComponent(id)
   
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
            className="h-screen min-h-screen max-h-screen bg-red-900 overflow-hidden"
            id="mobileNavbar"
        >
            <div className="flex md:flex-row justify-between gap-10 p-2 md:p-10 ">
                <div>
                    <h4>DotStrix @{new Date().getFullYear()}</h4>
                </div>
                <div className="flex items-center justify-center flex-row align-middle gap-2">
                    <p>Close Menu</p>
                    <i
                        className="fa-solid fa-xmark fa-xl cursor-pointer hover:scale-125 duration-200 ease-in"
                        onClick={handleNavToHome}
                    ></i>
                </div>
            </div>
            <div className="flex md:flex-row  flex-col justify-around items-center align-middle">
                <div className="p-10 md:p-24 flex flex-col gap-10">
                    {data.navLinks.map((item, id) => (
                        <div>
                            <h4
                                className="cursor-pointer relative"
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
                <div className="mb-6 md:mb-0">
                    <h5 className="uppercase font-bold my-2.5 mb-10">
                        Feel free to contact us on
                    </h5>
                    <div className="flex space-x-4 justify-center">
                        <a href="#" aria-label="Twitter">
                            <i className="fa-brands fa-twitter  fa-2xl"></i>
                        </a>
                        <a
                            href="https://twitter.com/dt_smat"
                            aria-label="Discord"
                        >
                            <i className="fa-brands fa-discord fa-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="w-[90%]  mt-10 border border-black mx-auto" />
            <div className="mt-10">
                <Marquee speed={200} loop={0}>
                    <h1>DOTSTRIX WEB AGENCY</h1>
                </Marquee>
            </div>
        </div>
    );
}

export default MobileNavbar;
