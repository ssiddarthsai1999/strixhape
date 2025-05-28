import React from "react";

import { useSelector } from "react-redux";
import FaqCard from "./FaqCard";

const Faq = ({ data }) => {

    return (
        <div className="z-20  p-8" id="faq">
            <h1   className="mb-24 z-40">
                FREQUENTLY ASKED QUESTIONS
            </h1>
            {data.faqs.map((item) => (
                <FaqCard item={item} />
            ))}{" "}
        </div>
    );
};

export default Faq;
