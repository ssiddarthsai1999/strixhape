import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
function MobileNavbar({ setPageName, data, pageName }) {
    const handleNavToHome = () => {
        gsap.to("#mobileNavbar", {
            y: "-100%",
            opacity: 0,
            yoyo: true,
            duration: 1.5,
            ease: "power1.out",
            onComplete: () => {
                setPageName("normal");
            },
        });
    };

    const closeMenu = () => {
        setPageName("normal");
    };
    const navLinks = data.navLinks;
    return (
        <div
            id="mobileNavbar"
            className="min-h-screen flex items-center justify-center bg-red-900"
        >
            <div className="absolute top-20 right-20">
                <i
                    onClick={handleNavToHome}
                    className="fa-xl fa-solid fa-xmark cursor-pointer"
                ></i>
            </div>
            <div className="flex flex-col items-center justify-center">
                <ul>
                    {navLinks.map((item, index) => (
                        <Link to={item.linkTo} className="">
                            <li className="text-lg w-fit text-[#444444] duration-300 ease-in border-transparent hover:border-[#444444] px-3 py-2 rounded-[40px] hover:bg-[#c5fcfc] hover:text-black">
                                {item.name}
                            </li>
                        </Link>
                    ))}{" "}
                </ul>
            </div>
        </div>
    );
}

export default MobileNavbar;
