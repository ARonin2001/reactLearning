const Profile = () => {
    return (
        <div className="content">
            <div className="content__banner"></div>
            <div className="content__container">
                <div className="ava">
                    <div className="ava__container-img">
                        <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className="ava__img"/>
                    </div>

                    <div className="ava__info">
                        <h2 className="ava__name">ALEX MERFI</h2>
                        <div className="ava__user-info">
                            <div className="ava__age">Age: <span>25</span></div>
                            <div className="ava__city-from">From: <span>Japan</span></div>
                            <div className="ava__description">I'm sdkfjsdlkj</div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts_write">
                        <h3 className="title">My posts</h3>
                        <form id="form" className="posts__form" method="post">
                            <input type="text" className="posts__input" placeholder="your news..."/>
                            <button type="submit" className="btn">Send</button>
                        </form>
                    </div>
                    <div className="posts__items">
                        <div className="posts__item">
                            <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className="posts__item-img"/>
                            <div className="posts__description">React</div>
                        </div>
                        <div className="posts__item">
                            <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className="posts__item-img"/>
                            <div className="posts__description">plus</div>
                        </div>
                        <div className="posts__item">
                            <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className="posts__item-img"/>
                            <div className="posts__description">Redux</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Profile;