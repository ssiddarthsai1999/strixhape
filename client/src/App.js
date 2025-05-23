import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { scroll } from "framer-motion/dom";
import { motion } from "framer-motion";
import FluidSimulation from "fluid-simulation-react";
import "./typography.css";
import NotFound from "./pages/shared/notfound/NotFound";
import LoadingBar from "react-top-loading-bar";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter as Router,
    Outlet,
    Link,
    useNavigate,
} from "react-router-dom";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Home from "./pages/home/Home";
import Navbar from "./pages/shared/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/slices/themeSlice";
import Footer from "./pages/shared/footer/Footer";
import data from "./data";
import Scene from "./pages/shared/3d/Scene";
import Faq from "./pages/shared/faq/Faq";

function App() {
    const [topLoadingProgress, setTopLoadingProgress] = useState(0);
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const { mode } = useSelector((state) => state.theme);
    const profile = JSON.parse(localStorage.getItem("profile"));
    const [pageName, setPageName] = useState(
        "opening",
        "story",
        "mobileNavbar",
        "normal" || "opening"
    );
    const [navbarVisible, setNavbarVisible] = useState(false);

    const handleSubscribe = async () => {
        Navigate("/#footer");
    };
    useEffect(() => {
        // When app loads, check if a theme mode is saved in localStorage
        const savedMode = localStorage.getItem("themeMode");
        if (savedMode) {
            // If found, dispatch an action to set the mode
            dispatch(toggleTheme(savedMode));
        }
    }, [dispatch]);
    // useEffect(() => {
    //     // Save the mode to localStorage whenever it changes
    //     localStorage.setItem("themeMode", mode);
    // }, [mode]);

    gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin,
        ScrollSmoother,
        SplitText,
        useGSAP
    );

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the current scroll progress
            const totalScroll =
                document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollProgress = (currentScroll / totalScroll) * 100;

            // Update the loading bar's progress
            setTopLoadingProgress(scrollProgress);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className={`${mode === "dark" ? "dark-mode" : "light-mode"} `}>
            <ToastContainer />
            <Router>
                {" "}
                <Routes>
                    {/*Standard......................*/}
                    <Route
                        element={
                            <div className="scroll-smooth antialiased flex flex-col min-h-screen  ">
                                {pageName === "normal" && (
                                    <div className="w-full  fixed top-0  pt-5 z-40">
                                        <div className="z-40">
                                            <LoadingBar
                                                color="white"
                                                progress={topLoadingProgress}
                                            ></LoadingBar>
                                        </div>
                                        <div className="z-40">
                                            {" "}
                                            <Navbar
                                                data={data}
                                                setNavbarVisible={
                                                    setNavbarVisible
                                                }
                                                pageName={pageName}
                                                setPageName={setPageName}
                                                handleSubscribe={
                                                    handleSubscribe
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                                <Outlet /> <div className="flex-grow"></div>
                                {pageName === "normal" && (
                                    <div className=" bottom-0" id="footer">
                                        <Faq data={data} />
                                        <Footer />
                                    </div>
                                )}
                            </div>
                        }
                    >
                        {/*Auth......................*/}
                        <Route
                            element={
                                <div className="">
                                    <Home
                                        data={data}
                                        setPageName={setPageName}
                                        pageName={pageName}
                                        navbarVisible={navbarVisible}
                                    />
                                </div>
                            }
                            path="/"
                        />


                    </Route>

               
                    <Route path="*" element={<NotFound />} />
                </Routes>{" "}
            </Router>
        </div>
    );
}

export default App;
