import Ava from './Ava/Ava';
import profile from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className={profile.main}>
            <div className={profile.banner}></div>
            <div className={profile.container}>
                <Ava profile={props.profile} 
                    status={props.status} 
                    updateUserStatus={props.updateUserStatus}/>
                {/* POSTS */}
                <MyPostContainer store={props.store} />
            </div>
        </div>
            
    );
}

export default Profile;