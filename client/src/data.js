// Import images here. Replace these lines with actual imports from your project.
import astroworldImage from "./assets/images/art/astroworld.jpg";
import yeatImage from "./assets/images/art/yeat.jpg";
import savageImage from "./assets/images/art/21.jpg";
import travImage from "./assets/images/art/trav.jfif";
import drakeImage from "./assets/images/art/drake.jpg";
import eminemImage from "./assets/images/art/eminem.jpg";
import nymosImage from "./assets/images/team/nymos.jpg";
import markImage from "./assets/images/team/mark.jpg";
import web3auditImage from "./assets/images/team/web3audit.jpg";
import c3Image from "./assets/images/team/c3.jpg";

const data = {
    testimonials: [
        { name: "alice", comment: "nice work" },
        { name: "john", comment: "nice work" },
    ],
    art: [
        { id: 1, name: "Client A", image: astroworldImage },
        { id: 2, name: "Client B", image: yeatImage },
        { id: 3, name: "Client C", image: savageImage },
        { id: 4, name: "Client D", image: travImage },
        { id: 5, name: "Client E", image: drakeImage },
        { id: 6, name: "Client F", image: eminemImage },
    ],

    navLinks: [
        { id: 1, name: "Lore", linkTo: "lore" },
        { id: 2, name: "Factions", linkTo: "factions" },
        { id: 3, name: "Roadmap", linkTo: "roadmap" },
        { id: 4, name: "Art", linkTo: "art" },
        { id: 5, name: "Team", linkTo: "team" },
    ],
    team: [
        {
            name: "Nymos ",
            role: "Founder",
            twitter: "https://twitter.com/Nymos_eth",
            image: nymosImage,
        },
        { name: "FoolsGold ", role: "Co-Founder", image: nymosImage }, // Assuming same image as Nymos
        {
            name: "Mark  ",
            role: "Co-Tokenomics Advisor",
            twitter: "https://twitter.com/mhl_eth",
            website: "https://mhl-solutions.com",
            image: markImage,
        },
        {
            name: "WebThree Consulting & Auditing ",
            role: "Devs",
            website: "https://www.webthreeconsulting.com",
            twitter: "https://twitter.com/Web3Auditing",
            image: web3auditImage,
        },
        {
            name: "Conduct3",
            role: "Marketing",
            twitter: "https://twitter.com/Conduct03",
            website: "https://mhl-solutions.com",
            image: c3Image,
        },
    ],
    clients: [
        { name: "google", comment: "nice work" },
        { name: "youtube", comment: "nice work" },
    ],
};

export default data;
