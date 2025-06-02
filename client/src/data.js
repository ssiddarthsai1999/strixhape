// Import images here. Replace these lines with actual imports from your project.

import smatImage from "./assets/images/team/smat.jpg";
import flexImage from "./assets/images/team/flex.jpg";
import jujuImage from "./assets/images/team/juju.jpg";
import frostImage from "./assets/images/team/frost.jpg";
import nymosImage from "./assets/images/client/nymos.jpg";
import xcaliburImage from "./assets/images/client/xcalibur.jpg";
import byxcaliburImage from "./assets/images/project/byxcalibur.png";
import netherakImage from "./assets/images/project/netherak.png";
import lexImage from "./assets/images/project/lex.png";
import mobImage from "./assets/images/project/mob.png";
import podImage from "./assets/images/project/pod.png";
const data = {
    art: [
        {
            id: 1,
            year: "2023",
            general: "Crypto Media Outlet",
            name: "ByXcalibur ",
            image: byxcaliburImage,
            linkToWeb: "https://www.byxcalibur.xyz",
        },
        {
            id: 2,
            year: "2023",
            general: "Game",
            name: "Netherak Demons",
            image: netherakImage,
            linkToWeb: "https://netherakdemons.com/",
        },
        {
            id: 3,
            year: "2024",
            general: "SocialFi Platform",
            name: "The Mob",
            image: mobImage,
            linkToWeb: "https://www.themobonbtc.com",
        },
        {
            id: 4,
            year: "2025",
            general: "SocialFi Platform",
            name: "Part Of Dreams",
            image: podImage,
            linkToWeb: "https://dreamerquests.partofdream.io",
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
               "Working with NeoWave Studio was an absolute pleasure. They transformed our vision into reality with their expertise in web development. Our blog website now stands out with its sleek design and seamless functionality. I highly recommend them!",
            image: xcaliburImage,
        },
        {
            name: "Nymos",
            comment:
                "Partnering with NeoWave Studio for our animated website with Web3 integration was a game-changer. Their creativity and technical prowess brought our vision to life in ways we couldn't have imagined. Truly impressed!",
            image: nymosImage,
        },
    ],
    faqs: [
        {
            id: 1,
            question: "What services does NeoWave offer?",
            answer: "NeoWave offers end-to-end web and app development, including UI/UX design, full-stack builds, and custom Python-based Discord bots. We also enhance business performance with tailored AI tools and automation solutions.",
        },

        {
            id: 2,
            question: "Do you only work with web3 companies?",
            answer: "Our tech team has experience in both web2 & web3 development, offering a wide range of services tailored to all types of businesses within any market.",
        },
        {
            id: 3,
            question: "How can I utilize AI tools for my business?",
            answer: "We build intelligent AI systems tailored to your business, from workshop to deployment.",
        },
        {
            id: 4,
            question:
                "How does NeoWave differ from other tech solution agencies?",
            answer: "NeoWave works with businesses of all types and sizes, focusing on enhancing tech performance before offering solutions.",
        },
        {
            id: 5,
            question:
                "Do you provide product services?",
            answer: "Our team brings broad experience in product design and development, offering tech and product consulting alongside full 360° services.",
        },

                {
            id: 6,
            question: "How can I work with NeoWave?",
            answer: "You can get in touch via our website or booking an introductory call directly with our team. We will first make sure to gather all of your technological concerns before coming back with a ready-to-execute proposal.",
        },
    ],
};

export default data;
