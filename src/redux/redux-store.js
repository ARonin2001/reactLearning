import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: findUsersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;