import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import buttonSave from "../feature/button/buttonSaveSlice";
import buttonCancel from "../feature/button/buttonCancelSlice";
import buttonEdit from "../feature/button/buttonEditSlice";
import form from "../feature/form/form.js";

const store = configureStore({
    reducer: combineReducers({
        buttonSave: buttonSave.reducer,
        buttonCancel: buttonCancel.reducer,
        buttonEdit: buttonEdit.reducer,
        formulari: form.reducer,
        // ⚠️ StorageToken n'est pas un reducer, donc à déplacer ailleurs
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            (store) => (next) => (action) => {
                console.log("Action", action);
                return next(action);
            },
        ]),
});

export default store;