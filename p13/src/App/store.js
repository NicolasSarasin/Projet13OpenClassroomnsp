import {combineReducers,configureStore} from "@reduxjs/toolkit";
import button from "../feature/button/button.js";
import form from "../feature/form/form.js";
let state={
    buttonSave:{},
    buttonCancel:{},
    buttonSignIn:{},
    formulari:{},
}
export const store = configureStore({
    preloadedState : state,
    reducer: combineReducers({
        buttonSave: button.reducer,
        buttonCancel: button.reducer,
        buttonSignIn: button.reducer,
        formulari: form.reducer,
    }),
});