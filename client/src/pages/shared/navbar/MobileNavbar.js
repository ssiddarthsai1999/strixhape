import React from "react";
import { Link } from "react-router-dom";
function MobileNavbar({ setPageName, data }) {
    const closeMenu = () => {
        setPageName("normal");
    };
    const navLinks = data.navLinks;
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="absolute top-20 right-20">
                <i
                    onClick={() => setPageName("normal")}
                    className="fa-xl fa-solid fa-xmark"
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
