import React from "react";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
function ClientCard({ item }) {
    return (
        <div className="w-full border  border-[#E80D0D] p-10 ">
            <img
                src={item.image}
                alt=""
                className="w-[200px] md:w-[100px]  h-[200px] md:h-[100px]  object-cover rounded-full"
            />
            <h4> {item.name}</h4>
            <div className="flex justify-between items-center align-middle p-3 w-1/2 mx-auto ">
                <div className=" mt-10">
                    <p>"{item.comment}"</p>
                </div>
            </div>
        </div>
    );
}

export default ClientCard;
