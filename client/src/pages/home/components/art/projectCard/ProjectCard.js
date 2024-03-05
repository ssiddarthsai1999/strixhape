import React from "react";

function ProjectCard({ item }) {
    return (
        <div className="border border-[#E80D0D] p">
            <img
                src={item.image}
                className=" w-[300px]  md:w-[500px] object-cover h-[400px] md:h-[500px] "
                alt="artpic"
            />
            <p className="p-4">{item.name}</p>
        </div>
    );
}

export default ProjectCard;
