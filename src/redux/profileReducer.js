const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXTAREA_TEXT = 'UPDATE-NEW-TEXTAREA-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILEg'

let initialState = {
    posts: [
        {id: 1, message: "I'm Arnold Shwarzneger", likeCount: 5},
        {id: 2, message: "What do I do here?", likeCount: 3},
        {id: 3, message: "You're my the best friend", likeCount: 10},
        {id: 4, message: "Beautiful", likeCount: 7},
        {id: 5, message: "The strange things", likeCount: 1},
        {id: 6, message: "Props", likeCount: 0}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            };
            
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);

            return stateCopy;
        }
        case UPDATE_NEW_TEXTAREA_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ( {type: ADD_POST} );

export const updateTextAreaActionCreator = (text) => 
    ({
        type: UPDATE_NEW_TEXTAREA_TEXT, 
        newText: text
    });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;