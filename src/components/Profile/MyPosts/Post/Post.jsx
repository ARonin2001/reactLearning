import post from './Post.module.css';

const Post = () => {
    return(
        <div className={post.item}>
            <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" />
            <div className={post.description}>React</div>
        </div>
    );
}

export default Post;