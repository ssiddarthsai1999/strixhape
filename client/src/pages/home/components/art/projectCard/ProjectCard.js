import React from "react";

function ProjectCard({ item }) {
    return (
        <div className="border border-[#E80D0D] z-20   cardBg">
            <img
                src={item.image}
                className=" md:w-[300px] w-[150px] lg:w-[450px] object-cover  md:h-[400] h-[200px] lg:h-[500px] "
                alt="artpic"
            />
            <p className="p-4">{item.name}</p>
        </div>
    );
}

export default ProjectCard;
