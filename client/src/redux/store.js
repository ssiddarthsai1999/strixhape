import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux/slices/themeSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
});
