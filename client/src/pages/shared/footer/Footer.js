import axios from "axios";

import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState();
    const [data, setData] = useState("");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className=" p-2 z-40">
            <div
                className="max-w-6xl mx-auto px-4 py-10 md:py-20 z-40 text-white"
                id="contactpage"
            >
                <div className="xl:grid xl:grid-cols-4 md:grid md:grid-cols-2">
                    {/* Company Information */}
                    {/* <div className="mb-6 md:mb-0">
                        <h5 className="uppercase font-bold mb-2.5">Company</h5>
                        <p className="mb-4">123 Business Ave.</p>
                        <p className="mb-4">Business City, 12345</p>
                        <p className="mb-4">Email: contact@business.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div> */}

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="uppercase font-bold mb-2.5">
                            Quick Links
                        </h5>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Clients
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="mb-6 md:mb-0 z-40 ">
                        <h5 className="uppercase font-bold my-2.5 text-center md:text-left mb-10">
                            Feel free to contact us
                        </h5>
                        <a
                            href="mailto:contact@dotstrix.in"
                            target="_blank"
                            rel="noopener noreferrer"
                    
                        >
                            <button class="cursor-pointer justify-center lg:mx-0 mx-auto lg:justify-start flex font-semibold overflow-hidden relative z-100 border border-white group px-8 py-2">
                                <span class="relative z-10 text-white group-hover:text-black text-xl duration-500">
                                    Contact
                                </span>
                                <span class="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                <span class="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                            </button>
                        </a>
                    </div>

                    {/* Newsletter */}
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center p-4 mt-10 z-40 text-white">
                <h5 className="z-40">
                    {" "}
                    © {new Date().getFullYear()} DotStrix. All Rights Reserved.
                </h5>
            </div>
        </div>
    );
}
