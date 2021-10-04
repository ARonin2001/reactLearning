import Ava from './Ava/Ava';
import MyPost from './MyPosts/MyPosts';
import profile from './Profile.module.css';
import Post from './MyPosts/Post/Post';

const Profile = (props) => {


    return (
        <div className={profile.main}>
            <div className={profile.banner}></div>
            <div className={profile.container}>
                <Ava />

                {/* POSTS */}
                <MyPost 
                posts={props.state.posts}
                newPostText={props.state.newPostText} 
                dispatch={props.dispatch} />
            </div>
        </div>
            
    );
}

export default Profile;