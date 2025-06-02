import axios from "axios";
import logo from "../.././../assets/images/neowavelogopng.png"
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
export default function Footer() {
    const [email, setEmail] = useState();
    const [data, setData] = useState("");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
       <div className="p-2 z-40">
  <div
    className="lg:max-w-[60%] xl:max-w-[50%]  max-w-full mx-auto px-4 py-10 md:py-20 z-40 text-white"
    id="contactpage"
  >
    {/* Flex container for red and blue sections */}
    <div className="flex flex-col-reverse md:flex-row justify-between gap-10 ">
      {/* Quick Links */}


      {/* Social Media / Contact */}
      <div className=" w-full md:w-1/2  justify-start flex flex-col items-center   md:items-center ">
            <div className="">       <img src={logo} className="w-[200px] md:w-[300px] mb-5 h-auto object-contain" alt="logo" />
</div>
    
 

<div className="flex justify-center items-center gap-4 ">
  <a href="https://x.com/neowavestudio" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-[30px] cursor-pointer duration-200 ease-in hover:scale-125" />
  </a>

  <a href="https://calendly.com/smat-neowave/30min" target="_blank" rel="noopener noreferrer">
    <FaCalendar className="text-[30px] cursor-pointer duration-200 ease-in hover:scale-125" />
  </a>
</div>
  <div className="text-center p-4 mt-[20px] font-light text-[12px] z-40 text-white">
    <p className="z-40">© {new Date().getFullYear()} NeoWave. All Rights Reserved.</p>
  </div>




      </div>      
      
      <div className="  w-full justify-center md:justify-start items-center md:items-center flex flex-col md:w-1/2">
    
        <ul className="space-y-2">
      <li className="font-black mb-3"> Navigation</li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#actualclients" className="hover:underline">Clients</a></li>
          <li><a href="#clientspage" className="hover:underline">Testimonials</a></li>
              <li><a href="#faq" className="hover:underline">Faq
</a></li>
        </ul>
      </div>
        <div className="  w-full justify-center md:justify-start items-center md:items-center flex flex-col md:w-1/2">
    
        <ul className="space-y-2">
      <li className="font-black mb-3"> Information</li>
          <li><a href="#about" className="hover:underline">Terms of Service</a></li>
          <li><a href="#services" className="hover:underline">Privacy Policy</a></li>

        </ul>
      </div>
    </div>
  </div>

  {/* Copyright */}

</div>

    );
}
