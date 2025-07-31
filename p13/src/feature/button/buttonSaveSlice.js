import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: false,
};

export const buttonSaveSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        clickSave: (state) => {
            state.clicked = true;
        },
        resetSave: (state) => {
            state.clicked = false;
        },
    },
}); 

export const { clickSave, resetSave } = buttonSaveSlice.actions;
export default buttonSaveSlice;