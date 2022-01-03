import {profileAPI} from '../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXTAREA_TEXT = 'UPDATE-NEW-TEXTAREA-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILEg';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: "I'm Arnold Shwarzneger", likeCount: 5},
        {id: 2, message: "What do I do here?", likeCount: 3},
        {id: 3, message: "You're my the best friend", likeCount: 10},
        {id: 4, message: "Beautiful", likeCount: 7},
        {id: 5, message: "The strange things", likeCount: 1},
        {id: 6, message: "Props", likeCount: 0}
    ],
    profile: null,
    status: "Status"
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likeCount: 0
            };
            
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);

            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = newPostText => ( {type: ADD_POST, newPostText} );

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUserStatus = userId => {
    return dispatch => {
        profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
    }
}

export const updateUserStatus = status => {
    return dispatch => {
        profileAPI.updateUserStatus(status)
        .then(response => {
            if(response.data.resultCode === 0)
                dispatch(setStatus(status));
        })
    }
}

export default profileReducer;