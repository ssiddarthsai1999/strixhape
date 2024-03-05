import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { scroll } from "framer-motion/dom";
import { motion } from "framer-motion";

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
    useEffect(() => {
        // Save the mode to localStorage whenever it changes
        localStorage.setItem("themeMode", mode);
    }, [mode]);

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
                                    <div className="w-full  absolute md:fixed top-0 z-40 pt-5 ">
                                        <LoadingBar
                                            color="#E80D0D"
                                            progress={topLoadingProgress}
                                        ></LoadingBar>
                                        <Navbar
                                            data={data}
                                            setNavbarVisible={setNavbarVisible}
                                            pageName={pageName}
                                            setPageName={setPageName}
                                            handleSubscribe={handleSubscribe}
                                        />
                                    </div>
                                )}

                                <Outlet />

                                <div className="flex-grow"></div>
                                {/* <div
                                    className="pt-[80px] md:pt-[150px] bottom-0"
                                    id="footer"
                                >
                                    <Footer />
                                </div> */}
                            </div>
                        }
                    >
                        {/*Auth......................*/}
                        <Route
                            element={
                                <Home
                                    data={data}
                                    setPageName={setPageName}
                                    pageName={pageName}
                                    navbarVisible={navbarVisible}
                                />
                            }
                            path="/"
                        />

                        {/* <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route
                            path="/verifyEmail/:token"
                            element={<VerifyEmail />}
                        /> */}

                        {/* <Route
                            path="/reset-password/:resetToken"
                            element={<ResetPassword />}
                        /> */}
                        {/*Posts......................*/}
                        {/* <Route
                            element={<AllPosts />}
                            path="/projects/allposts"
                        /> */}

                        {/*Analysis and tldr......................*/}
                        {/* <Route element={<Analysis />} path="/deck" />
                        <Route element={<Tldr />} path="/tldr" /> */}
                        {/*Profile......................*/}
                        {/* <Route
                            element={<AuthUserRoute element={<Profile />} />}
                            path="/profile"
                        /> */}
                    </Route>

                    {/*Admin route......................*/}
                    {/* <Route
                        element={
                            <div className="scroll-smooth antialiased flex  ">
                                {" "}
                                <div className="  md:sticky left-0 w-fit  ">
                                    <SideNavbar />
                                </div>
                                <div className="adminBg w-full mx-auto">
                                    {" "}
                                    <Outlet />
                                </div>
                            </div>
                        }
                    >
                        <Route
                            element={<AdminRoute element={<AllPostss />} />}
                            path="/admin/posts"
                        />
                        <Route
                            element={<AdminRoute element={<CreatePost />} />}
                            path="/admin/createpost"
                        />
                        <Route
                            element={<AdminRoute element={<EditPost />} />}
                            path="/admin/editpost/:id"
                        />
                        <Route
                            element={<AdminRoute element={<Subscribers />} />}
                            path="/admin/subscribers"
                        />
                    </Route> */}

                    {/*Error 404 not found......................*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>{" "}
            </Router>
        </div>
    );
}

export default App;
