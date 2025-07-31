import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: false,
};

export const buttonEditSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        clickEdit: (state) => {
            state.clicked = true;
        },
        resetEdit: (state) => {
            state.clicked = false;
        },
    },
});

export const { clickEdit, resetEdit } = buttonEditSlice.actions;
export default buttonEditSlice;
