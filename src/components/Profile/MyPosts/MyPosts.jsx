import myPosts from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utilits/Validations/validation';
import { withValidationElement } from '../../Hoc/withValidationElement';

const Textarea = withValidationElement("textarea");
const maxLength200 = maxLength(200);

const MyPostForm = props => {
    return (
        <form id="form" className={myPosts.posts__form} onSubmit={props.handleSubmit}>
            <Field name="newPostText" 
               className={myPosts.posts__input} 
               placeholder="your news..." 
               component={Textarea}
               validate={[required, maxLength200]} />

            <button className="btn">Send</button>
        </form>
    )
}

const ReduxMyPostForm = reduxForm({form: 'postForm'})(MyPostForm);

const MyPost = React.memo((props) => {
    console.log("Render");
    let postsElements = props.posts.map(el => <Post message={el.message} like={el.likeCount} /> );

    let onAddPost = (data) => {
        props.addPostActionCreator(data.newPostText);
    }

    return(
        <div className={myPosts.posts}>
            <div className={myPosts.posts_write}>
                <h3 className={"title" + ' ' + myPosts.title}>My posts</h3>

                <ReduxMyPostForm onSubmit={onAddPost} />
            </div>
            <div className={myPosts.posts__items}>
                { 
                    postsElements
                }
            </div>
        </div>
    );
})
   
export default MyPost;