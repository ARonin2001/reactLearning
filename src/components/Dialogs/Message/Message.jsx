import dialogsStyle from '../Dialogs.module.css';
import FriendMessage from './FriendMessage/FriendMessage';
import MyMessages from './MyMessage/MyMessage';

const Message = (props) => {

    return(
        <div>
            {/* <div className={dialogsStyle.message_left}>
                            <div className={dialogsStyle.message_ava}>
                                <div className={dialogsStyle.message_img}>
                                    <img src="https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/Gt-Ji9kjFG-jh_jfut7-fjuthD4h_jhTuiH-jh_5tgD-jgu-Смайлики-Дискорд6.png"/>
                                </div>
                                <span className={dialogsStyle.name}>{props.name}</span>
                            </div>

                            <div className={dialogsStyle.text}>
                                {props.text}
                            </div>
                        </div> */}

            <FriendMessage name={props.name} text={props.text} />

            {/* <div className={dialogsStyle.message_right}>
                <div className={dialogsStyle.text}>
                    {props.text}
                </div>

                <div className={dialogsStyle.message_ava}>
                    <div className={dialogsStyle.message_img}>
                        <img src="https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/Gt-Ji9kjFG-jh_jfut7-fjuthD4h_jhTuiH-jh_5tgD-jgu-Смайлики-Дискорд6.png"/>
                    </div>
                    <span className={dialogsStyle.name}>{props.name}</span>
                </div>

            </div>             */}
            <MyMessages name={props.name} text={props.text} />
        </div>
            
    )
}

export default Message;