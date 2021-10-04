import dialogsStyle from '../../Dialogs.module.css';

let MyMessages = (props) => {
    return(
        <div className={dialogsStyle.message_right}>
            <div className={dialogsStyle.text}>
                {props.text}
            </div>

            <div className={dialogsStyle.message_ava}>
                <div className={dialogsStyle.message_img}>
                    <img src="https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/Gt-Ji9kjFG-jh_jfut7-fjuthD4h_jhTuiH-jh_5tgD-jgu-Смайлики-Дискорд6.png"/>
                </div>
                <span className={dialogsStyle.name}>{props.name}</span>
            </div>

        </div>
    );
}

export default MyMessages;