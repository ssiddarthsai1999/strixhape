// Import images here. Replace these lines with actual imports from your project.
import astroworldImage from "./assets/images/art/astroworld.jpg";
import yeatImage from "./assets/images/art/yeat.jpg";
import savageImage from "./assets/images/art/21.jpg";
import travImage from "./assets/images/art/trav.jfif";
import drakeImage from "./assets/images/art/drake.jpg";
import eminemImage from "./assets/images/art/eminem.jpg";
import smatImage from "./assets/images/team/smat.jpg";
import flexImage from "./assets/images/team/flex.jpg";
import jujuImage from "./assets/images/team/juju.jpg";
import frostImage from "./assets/images/team/frost.jpg";
import nymosImage from "./assets/images/client/nymos.jpg";
import xcaliburImage from "./assets/images/client/xcalibur.jpg";
import byxcaliburImage from "./assets/images/project/byxcalibur.png";
import lexImage from "./assets/images/project/lex.png";
import mobImage from "./assets/images/project/mob.png";
const data = {
    art: [
        {
            id: 1,
            year: "2023",
            general: "Crypto/Blog",
            name: "byxcalibur",
            image: byxcaliburImage,
            linkToWeb: "https://www.byxcalibur.xyz",
        },
        {
            id: 2,
            year: "2023",
            general: "Startup",
            name: "LexDash",
            image: lexImage,
            linkToWeb: "https://www.lexdash.app/compliance",
        },
        {
            id: 3,
            year: "2024",
            general: "Web3",
            name: "The Mob",
            image: mobImage,
            linkToWeb: "https://www.themobonbtc.com",
        },
    ],

    navLinks: [
        { id: 1, name: "Home", linkTo: "scene" },
        { id: 2, name: "About", linkTo: "about" },
        { id: 3, name: "Services", linkTo: "services" },
        { id: 4, name: "Projects", linkTo: "projects" },
        { id: 5, name: "Team", linkTo: "team" },
        { id: 6, name: "Clients", linkTo: "clientspage" },
        { id: 7, name: "Contact", linkTo: "contactpage" },
    ],
    team: [
        {
            name: "Smat ",
            role: "Marketing/Developer",
            twitter: "https://twitter.com/dt_smat",
            image: smatImage,
        },
        {
            name: "Flex ",
            role: "Developer",
            twitter: "https://twitter.com/SSiddarthsai",
            image: flexImage,
        }, // Assuming same image as Nymos
        {
            name: "Juju  ",
            role: "Asset Developer",
            twitter: "https://twitter.com/btwiamjuju",

            image: jujuImage,
        },
        {
            name: "Frost",
            role: "UI/UX Designer",

            twitter: "https://twitter.com/FrOsTces3",
            image: frostImage,
        },
    ],
    clients: [
        {
            name: "XCalibur",
            comment:
                "Working with DotStrix was an absolute pleasure. They transformed our vision into reality with their expertise in web development. Our blog website now stands out with its sleek design and seamless functionality. Highly recommend!",
            image: xcaliburImage,
        },
        {
            name: "Nymos",
            comment:
                "Partnering with DotStrix for our animated website with Web3 integration was a game-changer. Their creativity and technical prowess brought our vision to life in ways we couldn't have imagined. Truly impressed!",
            image: nymosImage,
        },
    ],
    faqs: [
        {
            id: 1,
            question: "What services does Strix offer?",
            answer: "Strix specializes in a comprehensive range of web development services, including UI/UX design, full-stack web development with a focus on the MERN (MongoDB, Express.js, React, Node.js) stack, and custom Discord bot development using Python. We are dedicated to delivering tailored solutions that meet your unique business needs and enhance your digital presence.",
        },

        {
            id: 2,
            question: "How much does it cost to develop a website?",
            answer: "The cost of website development varies based on several factors, including the complexity of the design, the number of features required, custom functionalities, and the scope of the project. We provide a detailed quote after understanding your specific needs during the initial consultation.",
        },
        {
            id: 3,
            question: "How long does it take to build a website?",
            answer: "The timeline for building a website can vary significantly based on the complexity of the project, specific client requirements, and the scale of the website. Generally, a basic website can take anywhere from 1 to 4 weeks, while more complex projects might take several months. We provide a more accurate timeline after the initial consultation and requirement analysis.",
        },
        {
            id: 4,
            question:
                "Can Strix help with website hosting and domain registration?",
            answer: "Yes, we offer comprehensive services that include assistance with website hosting and domain registration. We can recommend reliable hosting providers, help set up your hosting account, and assist with domain registration to ensure a smooth and hassle-free launch of your website..",
        },
        {
            id: 5,
            question:
                "Can Strix integrate third-party services or APIs into our website?",
            answer: "Absolutely, Strix has extensive experience in integrating a wide range of third-party services and APIs, including payment gateways, CRM systems, social media platforms, and custom APIs. We ensure seamless integration to enhance your website's functionality and user experience.",
        },
        {
            id: 6,
            question: " Will my website be mobile-friendly and SEO-optimized?",
            answer: "Absolutely, we ensure that all websites we develop are responsive and mobile-friendly, providing a seamless user experience across all devices. Additionally, we implement SEO best practices during the development process to ensure your website is optimized for search engines, improving visibility and traffic.",
        },
    ],
};

export default data;
