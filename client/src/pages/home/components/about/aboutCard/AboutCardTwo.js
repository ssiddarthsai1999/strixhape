import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import "../about.css";
import Reveal from "react-awesome-reveal";
import goku from "../../../../../assets/images/goku.png";

function AboutCardTwo({ item, handleCardOpen, handleCardClose, openCardId }) {
    const colors = [
        "#1d1d1d",
        "#1d1d1d",
        "#1d1d1d",
        "#1d1d1d",
        "#1d1d1d",
        "#1d1d1d",
    ];
    const [hover, setHover] = useState(false);
    // Calculate the color index using the item's ID or index in the list
    const colorIndex = item.id % colors.length;
    const sectionColor = colors[colorIndex];

    return (
        <div
            className={`w-full flex mx-auto justify-evenly flex-col align-middle ease-in duration-200 py-2 ${
                item.id % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-5 md:gap-24 items-center`}
            key={item.id}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                backgroundColor: hover ? sectionColor : "transparent", // Change background color on hover
            }}
        >
            <div>
                <Reveal>
                    <img
                        src={goku}
                        className="rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] object-cover"
                        alt=""
                    />
                </Reveal>
            </div>
            <div>
                <Reveal>
                    <h2 className="mb-2">{item.stat}</h2>
                </Reveal>
                <Reveal>
                    <button
                        onClick={() => handleCardOpen(item.id)}
                        className="buttonVariation2"
                    >
                        Read More
                    </button>
                </Reveal>
            </div>

            <Modal
                disableBackdropClick
                open={openCardId === item.id}
                onClose={() => handleCardClose(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="cursor-default"
            >
                <Box
                    id="splitModalCard"
                    className="overflow-auto w-[80%] h-[80%] md:w-[30%] rounded-[40px] md:h-[40%] absolute top-[50%] left-[50%] border border-[#BF5331] p-8 bg-black shadow-md text-lg"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <i
                        className="absolute top-5 right-10 fa-solid fa-xmark text-[#BF5331] cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCardClose(null);
                        }}
                    ></i>

                    <h4
                        id="modal-modal-title"
                        className="text-[#BF5331]"
                        component="h2"
                    >
                        {item.stat}
                    </h4>
                    <p
                        id="modal-modal-description"
                        className="mt-5 paragraph-spacing paragraph-indent"
                    >
                        {item.long}
                    </p>
                </Box>
            </Modal>
        </div>
    );
}

export default AboutCardTwo;
