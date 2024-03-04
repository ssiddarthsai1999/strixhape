// src/Redux/Slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: "dark", // default theme
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.mode =
                action.payload || (state.mode === "dark" ? "light" : "dark");
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
