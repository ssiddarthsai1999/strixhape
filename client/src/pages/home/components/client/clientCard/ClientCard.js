import React from "react";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
function ClientCard({ item }) {
    return (
        <div className="w-full border  border-[#E80D0D] p-2 lg:p-10 cardBg ">
            <img
                src={item.image}
                alt=""
                className="w-[100px] h-[100px] md:w-[200px]  md:h-[200px]  object-cover rounded-full"
            />
            <h4 className="mt-2"> {item.name}</h4>
            <div className="flex justify-between items-center align-middle p-3 w-full 2xl:w-1/2 mx-auto ">
                <div className=" mt-10">
                    <p className="text-left lg:text-center">"{item.comment}"</p>
                </div>
            </div>
        </div>
    );
}

export default ClientCard;
