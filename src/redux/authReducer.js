import { headerAPI, usersAPI } from "../API/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth = false) => ({type: SET_USER_DATA, data: {
    userId, email, login, isAuth
}});

export const getAuthUserData = () => {
    return (dispatch) => {
        return headerAPI.getAuthUsers()
        .then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            } 
        });
    }
}

export const getLoginUser = (email, password, rememberMe) => {    
    return dispatch => {
        usersAPI.getLoginUser(email, password, rememberMe)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let messageError = data.messages.length > 0 ? data.messages[0] : "Some error";
                let action = stopSubmit("loginForm", {_error: messageError});
                dispatch(action);
            }
        });
    }
}

export const logout = dispatch => {
    usersAPI.getLogout()
    .then(data => {
        if(data.resultCode === 0)
            dispatch(setAuthUserData(null, null, null, false));
    })
}

export default authReducer;