import myPosts from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPost = (props) => {
    let postsElements = props.posts.map(el => <Post message={el.message} like={el.likeCount} /> );

    let newPostElement = React.createRef(); // создаём ссылку

    let OnUpdateTextArea = () => {      
        let text = newPostElement.current.value;
        props.updateTextArea(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return(
        <div className={myPosts.posts}>
            <div className={myPosts.posts_write}>
                <h3 className={"title" + ' ' + myPosts.title}>My posts</h3>

                <form id="form" className={myPosts.posts__form}>
                    <textarea name="text" ref={newPostElement} className={myPosts.posts__input} placeholder="your news..." onChange={ OnUpdateTextArea } 
                    value={props.newPostText}/>
                    <button type="button" className="btn" onClick={ onAddPost }>Send</button>
                </form>
            </div>
            <div className={myPosts.posts__items}>
                { 
                    postsElements
                }
            </div>
        </div>
    );
}
   
export default MyPost;