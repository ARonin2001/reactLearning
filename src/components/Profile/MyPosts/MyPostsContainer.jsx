import MyPosts from './MyPosts';

import { addPostActionCreator, updateTextAreaActionCreator } 
from '../../../redux/profileReducer';
import { connect } from 'react-redux';
   
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (newPostText) => {
//             dispatch(addPostActionCreator(newPostText));
//         }
//     }
// }

const MyPostContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts);

export default MyPostContainer;