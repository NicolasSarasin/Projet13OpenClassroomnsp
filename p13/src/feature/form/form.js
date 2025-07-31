//import { useStore } from "react-redux";
//import { Formulari } from "./Formulari";
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    field1:'',
    field2:'',
}
const form = createSlice({
    name:"form",
    initialState,
    reducers: {
      updateField: (state, action) => {
        const { field, value } = action.payload;
        state[field] = value;
      },
      resetForm: () => initialState,
    },
})
export const { updateField, resetForm } = form.actions;
export default form;