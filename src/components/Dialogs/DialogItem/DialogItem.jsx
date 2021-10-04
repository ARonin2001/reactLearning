import dialogsStyle from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(    
        <NavLink to={path} className={dialogsStyle.dialogs_item + ' ' + dialogsStyle.active}>
            <div className={dialogsStyle.dialogs_item_img}>
                <img src="https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/Gt-Ji9kjFG-jh_jfut7-fjuthD4h_jhTuiH-jh_5tgD-jgu-Смайлики-Дискорд6.png"/>
            </div>

            <span className={dialogsStyle.name}>{props.name}</span>
        </NavLink>
    )
}

export default DialogItem;