import Preloader from '../../common/preloader/preloader';
import ava from './Ava.module.css';

const Ava = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={ava.ava}>
            <div className={ava.ava__container_img}>
                <img src={props.profile.photos.small} className={ava.ava__img}/>
            </div>

            <div className={ava.ava__info}>
                <h2 className={ava.name}>{props.profile.fullName}</h2>
                <div className={ava.ava__user_info}>
                    <div className={ava.age}>Age: <span>25</span></div>
                    <div className={ava.city}>From: <span>Japan</span></div>
                    <div className={ava.description}>{props.profile.aboutMe}</div>
                    <ul className={ava.contacts}>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.github}</a>
                        </li>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.vk}</a>
                        </li>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.facebook}</a>
                        </li>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.twitter}</a>
                        </li>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.mainLink}</a>
                        </li>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.website}</a>
                        </li>
                        <li>
                            <a href="#" className={ava.contacts__link}>{props.profile.contacts.youtube}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Ava;