import React, {
    useEffect,
    useRef,
    useLayoutEffect,
    useState,
    useMemo,
} from "react";
import gsap from "gsap";
import services from "../../../../assets/images/homewallpapers/services.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
function ServicesTwo({ data }) {
 
const serviceData= [ {
    id:1,
    title:"AI Product Development",
    description:"We design and build AI tools that automate workflows, enhance customer service, and uncover insights. Our solutions include machine learning models, intelligent agents, and data-driven systems tailored to boost efficiency and scale with less manual effort."
},

{
    id:2,
    title:"Website UI/UX Design",
    description:"We create responsive, user-focused websites that blend visual storytelling with usability."
},
{
    id:3,
    title:"App & Game Development",
    description:"We build full-stack mobile and web apps, from MVPs to responsive platforms. Our end-to-end approach covers frontend, backend, APIs, and deployment for seamless digital experiences."
},
{
    id:4,
    title:"Bot Development",
    description:"We build automated bots for platforms like Discord and Telegram, focused on enhancing engagement and sniping or trading features."
},
{
    id:5,
    title:"Smart Contract Engineering",
    description:"We develop secure, gas-efficient smart contracts for NFTs, DeFi, and token launches. Our code is optimized and audit-ready."
},
{
    id:6,
    title:"Tech Consulting",
    description:"NeoWave supports businesses to make smarter technological decisions by providing guidance for the right tools and strategies to help execute your vision."
},

]

const aiProductServices = [
  {
    category: "Business & Strategy",
    services: [
"AI Strategy Consulting, End-to-End Workflow Automation, Data Privacy & Compliance"
    ]
  },
  {
    category: "Design & Development",
    services: [
"Custom AI Products, UI/UX, Interactive Dashboards & Visuals, Gamified Digital Experiences, Website & App Design"
    ]
  },
  {
    category: "Engineering & Integration",
    services: [
"AI Model Development (ML/NLP/CV), Bot Development (Discord & Telegram), Smart Contract Engineering API & Platform Integration"
    ]
  }
];


    return (
        <div id="services"
            className="relative mx-auto p-2 min-h-screen md:px-24  flex justify-center flex-col py-[100px] "
        
        >
            <div className="p-4 py-10 mx-auto w-full xl:w-1/2 flex flex-col z-20">
                <h1 className="text-center ">
                 OUR SERVICES
 

                </h1>
        
            </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-[100px]">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="bg-[#080808] border hover:border-red-400 border-[#1d1d1d] p-6 rounded-2xl shadow-xl hover:shadow-red-500/20 transition-shadow duration-300 group"
          >
            <h3 className="text-xl font-semibold mb-3 text-red-400 group-hover:text-red-300 transition">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
         <h1 className="mt-[200px] text-center">AI PRODUCT SERVICES</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-[100px]">
             
        {aiProductServices.map((service) => (
          <div
            key={service.id}
            className="bg-[#080808] border hover:border-orange-400 border-[#1d1d1d] p-6 rounded-2xl shadow-xl hover:shadow-orange-500/20 transition-shadow duration-300 group"
          >
            <h3 className="text-xl font-semibold mb-3 text-orange-400 group-hover:text-orange-300 transition">
              {service.category}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.services}
            </p>
          </div>
        ))}
      </div>

            {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div> */}
        </div>
    );
}

export default ServicesTwo;
