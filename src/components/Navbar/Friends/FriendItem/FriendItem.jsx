import { NavLink } from 'react-router-dom';
import itemClass from './FriendItem.module.css';

const Friends = (props) => {
    return (
        <NavLink to="#" className={itemClass.item}>
            <div className={itemClass.img}>
                <img src="https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/Gt-Ji9kjFG-jh_jfut7-fjuthD4h_jhTuiH-jh_5tgD-jgu-Смайлики-Дискорд6.png" />
            </div>
            <span className={itemClass.name}>{props.name}</span>
        </NavLink>
    );
}

export default Friends;