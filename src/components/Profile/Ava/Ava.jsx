import ava from './Ava.module.css';

const Ava = () => {
    return (
        <div className={ava.ava}>
            <div className={ava.ava__container_img}>
                <img src="https://yt3.ggpht.com/a/AATXAJzAHhyPZnJbtmEHrBQtnofAowi0xNFx8Dm3Y-BMSg=s900-c-k-c0xffffffff-no-rj-mo" className={ava.ava__img}/>
            </div>

            <div className={ava.ava__info}>
                <h2 className={ava.name}>ALEX MERFI</h2>
                <div className={ava.ava__user_info}>
                    <div className={ava.age}>Age: <span>25</span></div>
                    <div className={ava.city}>From: <span>Japan</span></div>
                    <div className={ava.description}>I'm sdkfjsdlkj</div>
                </div>
            </div>
        </div>

    );
}

export default Ava;