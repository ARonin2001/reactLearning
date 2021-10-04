import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            <div className={post.left}>
                <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" />
                <div className={post.description}>{props.message}</div>
            </div>
            <div className={post.right}>
                <span className={post.like}>{props.like}</span>
            </div>
        </div>
    );
}

export default Post;