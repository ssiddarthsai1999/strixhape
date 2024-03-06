import React from "react";
import { Modal, Box } from "@mui/material";
import "../about.css";

function AboutCard({ item, handleCardOpen, handleCardClose, openCardId }) {

    return (
        <div
            className={`  `}
            key={item.id}
            onClick={() => handleCardOpen(item.id)}
        >
            <div className="flex flex-col justify-between    w-full h-full">
                <div className="w-full  h-1/2 ">
                    <h1 className=" w-1/3">{item.stat}</h1>
                </div>
                <div className="w-full  h-1/2 flex text-right items-center justify-end ">
                    <h4 className="text-right w-[80%]  ">{item.short}</h4>
                </div>
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
                    className=" overflow-auto w-[80%] h-[80%] md:w-[50%] rounded-[40px] md:h-[50%] absolute top-[50%] left-[50%] border border-[#c5fcfc] p-8 bg-black shadow-md text-lg "
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <i
                        className="absolute top-5 right-10 fa-solid fa-xmark text-[#c5fcfc]  cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent click from bubbling up to the card container
                            handleCardClose(null);
                        }}
                    ></i>

                    <h4
                        id="modal-modal-title"
                        className="text-[#c5fcfc]"
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

export default AboutCard;
