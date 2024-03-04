import React, { useState } from "react";

function Overlay() {
    const [show, setShow] = useState(false);

    // Function to toggle the visibility of bars
    const toggleBars = () => {
        setShow(!show);
        console.log("Toggle clicked");
    };

    const bars = Array.from({ length: 10 }, (_, index) => {
        const lightColor = "#8ba3b9"; // Adjusted to match your original color
        const darkColor = "#597387"; // A darker shade for demonstration, adjust as needed
        const delay = index * 0.05;

        return (
            <div
                key={index}
                className={`bar ${show ? "show" : ""}`}
                style={{
                    left: `${index * 10}vw`,
                    background: `linear-gradient(to right, ${lightColor}, ${darkColor})`,
                    transitionDelay: `${delay}s`,
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: "10vw",
                    transform: show
                        ? "scale(1, 1) translate3d(0,0,0)"
                        : "scale(0, 1) translate3d(0,0,0)",
                    transformOrigin: "100% 100%",
                    transition: "transform 0.5s ease-in-out",
                }}
            />
        );
    });

    return (
        <div className="overlay">
            {bars}
            <button
                onClick={toggleBars}

            >
                Toggle Bars
            </button>
        </div>
    );
}

export default Overlay;
