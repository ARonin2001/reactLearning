import myPosts from './MyPosts.module.css';
import appClass from '../../../App.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return(
        <div className={myPosts.posts}>
            <div className={myPosts.posts_write}>
                <h3 className={appClass.title}>My posts</h3>

                <form id="form" className={myPosts.posts__form} method="post">
                    <input type="text" className={myPosts.posts__input} placeholder="your news..." />
                    <button type="submit" className={appClass.btn}>Send</button>
                </form>
            </div>
            <div className={myPosts.posts__items}>
                {/* <div className={myPosts.posts__item}>
                    <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className={myPosts.posts__img} />
                    <div className="posts__description">React</div>
                </div> */}
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                
            </div>
        </div>
    );
}

export default MyPost;