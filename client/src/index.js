import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import HeavenScroll from "react-heaven-scroll";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />

    </Provider>
);
