import MyPosts from './MyPosts';

import { addPostActionCreator, updateTextAreaActionCreator } 
from '../../../redux/profileReducer';
import { connect } from 'react-redux';
   
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextArea: (text) => {
            let action = updateTextAreaActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(updateTextAreaActionCreator('')); 
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;