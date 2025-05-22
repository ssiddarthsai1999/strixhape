import axios from "axios";

import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState();
    const [data, setData] = useState("");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
       <div className="p-2 z-40">
  <div
    className="lg:max-w-[90%] max-w-full mx-auto px-4 py-10 md:py-20 z-40 text-white"
    id="contactpage"
  >
    {/* Flex container for red and blue sections */}
    <div className="flex flex-col md:flex-row justify-between gap-10">
      {/* Quick Links */}
      <div className=" p-4 w-full md:w-1/2">
        <h5 className="uppercase font-bold mb-2.5">Quick Links</h5>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Projects</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
          <li><a href="#" className="hover:underline">Clients</a></li>
        </ul>
      </div>

      {/* Social Media / Contact */}
      <div className=" p-4 w-full md:w-1/2 justify-start flex flex-col  items-end">
        <h5 className="uppercase font-bold text-center md:text-left mb-10">
          Get in touch with us
        </h5>
        <a
          href="https://lxhj5fucwoi.typeform.com/to/ridNqtvZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cursor-pointer justify-center lg:mx-0 mx-auto lg:justify-start flex font-semibold overflow-hidden relative border border-white group px-8 py-2">
            <span className="relative z-10 text-white group-hover:text-black text-xl duration-500">
              Contact
            </span>
            <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </a>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center p-4 mt-10 z-40 text-white">
    <h5 className="z-40">© {new Date().getFullYear()} NeoWave. All Rights Reserved.</h5>
  </div>
</div>

    );
}
