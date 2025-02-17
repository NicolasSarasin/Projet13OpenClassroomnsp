//import { useStore } from "react-redux";
import { Buttons } from "./Buttons";
import {createSlice} from "@reduxjs/toolkit";
const button = createSlice({
    button:"",
    initialisation:{},
    reducers: {
        buttonSave:(currentState,action)=>{
            const saveButton=[...currentState,action.payload];
            return saveButton;
        },
        buttonCancel:(currentState,action)=>{
            const cancelButton=[...currentState,action.payload];
            return cancelButton;},
        buttonSignIn:(currentState,action)=>{
            const signInButton=[...currentState,action.payload];
            return signInButton;
        },
    },
})
export default button;