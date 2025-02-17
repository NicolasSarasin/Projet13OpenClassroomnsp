//import { useStore } from "react-redux";
import { Formulari } from "./Formulari";
import {createSlice} from "@reduxjs/toolkit";
const form = createSlice({
    form:"",
    initialisation:{},reducers: {
        UpdateForm:(currentState,action)=>{
            const formulari=[...currentState,action.payload];
            return formulari;
        }
    },
})
export default form;