import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: false,
};

export const buttonCancelSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        clickCancel: (state) => {
            state.clicked = true;
        },
        resetCancel: (state) => {
            state.clicked = false;
        },
    },
});

export const { clickCancel, resetCancel } = buttonCancelSlice.actions;
export default buttonCancelSlice