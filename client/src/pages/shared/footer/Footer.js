import axios from "axios";

import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState();
    const [data, setData] = useState("");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="  ">
            <div
                className="max-w-6xl mx-auto px-4 py-10 md:py-20"
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
                    <div className="mb-6 md:mb-0">
                        <h5 className="uppercase font-bold my-2.5">
                            Feel free to contact us on
                        </h5>
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com/dt_smat"
                                aria-label="Twitter"
                            >
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

                    {/* Newsletter */}
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center p-4 mt-10">
                © {new Date().getFullYear()} DotStrix. All Rights Reserved.
            </div>
        </footer>
    );
}
