import React from "react";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Slide } from "react-awesome-reveal";
function FaqCard({ item }) {
    return (
        <Accordion
            key={item.id}
            className={`border-b bg-transparent border-white p-3 shadow-lg z-40 `}
        >
            <AccordionSummary
                className=""
                expandIcon={
                    <i className={`fa-solid fa-angle-down text-white`}></i>
                }
                aria-controls={`panel${item.id}a-content`}
                id={`panel${item.id}a-header`}
            >
                <Slide triggerOnce direction="top">
                    {" "}
                    <h5 className="text-white w-[90%] lg:w-full">{item.question}</h5>
                </Slide>
            </AccordionSummary>
            <AccordionDetails className="">
                <Slide direction="down">
                    {" "}
                    <p className="text-white/70 ">{item.answer}</p>
                </Slide>
            </AccordionDetails>
        </Accordion>
    );
}

export default FaqCard;
