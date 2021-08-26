import MyPost from './MyPosts/MyPosts';
import profile from './Profile.module.css';

const Profile = () => {
    return (
        <div className={profile.content}>
            <div className={profile.banner}></div>
            <div className={profile.container}>
                <div className={profile.ava}>
                    <div className={profile.ava__container_img}>
                        <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className={profile.ava__img}/>
                    </div>

                    <div className={profile.ava__info}>
                        <h2 className={profile.name}>ALEX MERFI</h2>
                        <div className={profile.ava__user_info}>
                            <div className={profile.age}>Age: <span>25</span></div>
                            <div className={profile.city}>From: <span>Japan</span></div>
                            <div className={profile.description}>I'm sdkfjsdlkj</div>
                        </div>
                    </div>
                </div>
                {/* POSTS */}
                <MyPost />
            </div>
      </div>
    );
}

export default Profile;