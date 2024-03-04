import React from "react";

function ArtCard({ item }) {
    return (
        <div className="">
            <img
                src={item.image}
                className=" w-[300px]  md:w-[400px] object-cover h-[400px] md:h-[600px] "
                alt="artpic"
            />
        </div>
    );
}

export default ArtCard;
