import React, { useEffect, useState } from "react";

import loadingImage from "../../../../assets/images/pfp.gif";

function ProgressStart({ setPageName }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 3 seconds for the count-up animation
        const intervalDuration = 30;
        const increment = (100 * intervalDuration) / duration;

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + increment;
                if (nextProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return nextProgress;
            });
        }, intervalDuration);

        // Set timeout to change page name after 3 seconds
        const timeout = setTimeout(() => {
            setPageName("opening");
        }, duration);

        // Clean up the interval and timeout on component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [setPageName]);
    return (
        <div className="min-h-screen bg-[#171616]  md:max-w-[100%] mx-auto max-w-full align-middle flex items-center justify-center ">
            <div />
            <div
                className="content text-center max-w-[400px] min-w-[200px] w-[250px] mx-auto"
                style={{ position: "relative", zIndex: 2 }}
            >
                <div className="mx-auto flex">
                    <img src={loadingImage} alt="" className="w-[100%]" />
                </div>
            </div>
        </div>
    );
}

export default ProgressStart;
