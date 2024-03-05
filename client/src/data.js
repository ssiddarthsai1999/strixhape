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
const data = {

    art: [
        { id: 1, name: "Client A", image: astroworldImage },
        { id: 2, name: "Client B", image: yeatImage },
        { id: 3, name: "Client C", image: savageImage },
        { id: 4, name: "Client D", image: travImage },
        { id: 5, name: "Client E", image: drakeImage },
        { id: 6, name: "Client F", image: eminemImage },
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
};

export default data;
