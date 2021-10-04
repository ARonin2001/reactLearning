import dialogsStyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { updateMessageAreaActionCreator, addMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.myMessages.map( el => <Message name={el.name} 
        text={el.message} />);

    let messageElement = React.createRef();

    let updateTextArea = () => {
        let message = messageElement.current.value;
        let action = updateMessageAreaActionCreator(message);
        props.dispatch(action);
    }

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(updateMessageAreaActionCreator(''));
    }

    return(
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogs_items}>
                {
                    dialogsElements
                }
            </div>
            <div className={dialogsStyle.messages}>
                <h3 className={dialogsStyle.title}>Messages</h3>
                <hr />

                <div className={dialogsStyle.message}>
                    {
                        messagesElements
                    }
                </div>
                <hr />
                <div className={dialogsStyle.form_container}>
                    <form id={dialogsStyle.message_form} className={dialogsStyle.message_form}>
                        <textarea name="text" ref={messageElement} className={dialogsStyle.user_text} placeholder="Введите сообщение" onChange={updateTextArea} value={props.state.newMessage}></textarea>
                        <button type="button" className="btn" onClick={ sendMessage }>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default Dialogs;