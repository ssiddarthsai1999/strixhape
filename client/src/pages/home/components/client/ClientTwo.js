import React from 'react'
import unfold from "../../../../assets/images/client/unfold.png";
import onec from "../../../../assets/images/client/onec.png";
import vertex from "../../../../assets/images/client/vertex.png";
import neth from "../../../../assets/images/client/neth.svg";
import paypal from "../../../../assets/images/client/paypal.svg";
import Marquee from "react-fast-marquee";
import venmo from "../../../../assets/images/client/venmo.svg";
import jump from "../../../../assets/images/client/jump.svg";
import {
    Fade,
    AttentionSeeker,
    JackInTheBox,
    Zoom,
    Roll,
} from "react-awesome-reveal";
function ClientTwo() {
  return (
                        <Fade triggerOnce duration={3000} className="mb-10 lg:mb-[100px] ">
    <Marquee
    speed={80}
    direction="right"
    gradient={false}
    autoFill
    className="w-full py-4 bg-black bg-opacity-60 z-30"
>
    <img src={unfold} alt="Unfold" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain" />
    <img src={onec} alt="One C" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain " />
    <img src={vertex} alt="Vertex" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain " />
      <img src={neth} alt="Vertex" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain " />
          <img src={paypal} alt="Vertex" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain " />
      <img src={venmo} alt="Vertex" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain " />
       <img src={jump} alt="Vertex" className="mx-10 h-10 md:h-14 lg:h-24 ml-24 object-contain " />
</Marquee>
</Fade >
  )
}

export default ClientTwo
