import {combineReducers,configureStore} from "@reduxjs/toolkit";
import button from "../feature/button/button.js";
import form from "../feature/form/form.js";
let state={
    buttons:{},
    formular:{},
}
export const store = configureStore({
    preloadedState : state,
    reducer: combineReducers({
        buttons: button.reducer,
        formular: form.reducer,
    }),
});