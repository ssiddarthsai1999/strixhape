import React, {
    useEffect,
    useRef,
    useLayoutEffect,
    useState,
    useMemo,
} from "react";
import { FaTwitter } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import logo from "../../../../assets/images/neowavelogopng.png"
import FluidSimulation from "fluid-simulation-react";
import { FaCalendar } from "react-icons/fa";
import hero from "../../../../assets/images/homewallpapers/hero.jpg";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
function Hero() {
    const sceneRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sceneRef.current && imgRef.current) {
                const scrollY = window.scrollY;
                const translateY = scrollY * 0.2; // Adjust the speed of the parallax effect

                gsap.to(imgRef.current, {
                    y: translateY,
                    duration: 0.5, // Duration of the animation
                    ease: "power2.out", // Easing function
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(SplitText);
        const innovationpara = new SplitText("#innovationpara", {
            type: "words",
        });

        gsap.from(innovationpara.words, {
            duration: 3,
            opacity: 0,

            ease: "power1.inOut",
            stagger: {
                each: 0.13,
                from: "start",
            },
        });

        return () => {
            innovationpara.revert();
        };
    }, []);

    const scrollToElement = (id) => {
        const element = document.getElementById(id);

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

    return (
        <div
            id="scene"
            className="relative overflow-hidden text-center flex justify-center items-center lg:h-screen lg:py-0 py-[100px]"
        >
<div className="z-50 flex flex-col gap-10 absolute sm:left-10 left-5">
 <a href="https://x.com/neowavestudio" target="_blank" rel="noopener noreferrer"> <FaTwitter className="w-5 h-5 lg:w-10 lg:h-10 cursor-pointer duration-200 ease-in hover:scale-125"  /></a>
   <a href="https://calendly.com/smat-neowave/30min" target="_blank" rel="noopener noreferrer">
     <FaCalendar className="w-5 h-5 lg:w-10 lg:h-10 cursor-pointer duration-200 ease-in hover:scale-125" />
   </a>
</div>

              <img
  src={logo}
  className="w-[200px] md:w-[400px] lg:w-[700px] xl:w-[800px] 2xl:w-[1000px] h-auto object-contain z-50"
  alt="logo"
/>

         



            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>{" "}
          



        </div>
    );
}

export default Hero;
