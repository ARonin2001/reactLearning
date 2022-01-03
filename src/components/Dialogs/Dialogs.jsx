import dialogsStyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {withValidationElement} from '../Hoc/withValidationElement';
import {required, maxLength} from '../utilits/Validations/validation';

const Textarea = withValidationElement("textarea");
const maxLength200 = maxLength(10);

const DialogsForm = props => {

    return (
        <form onSubmit={props.handleSubmit} id={dialogsStyle.message_form} className={dialogsStyle.message_form}>

            <Field className={dialogsStyle.user_text}
                name="dialogText" 
                component={Textarea}
                validate={[required, maxLength200]} 
                placeholder="Введите сообщение" />

            <button className="btn">ОТПРАВИТЬ</button>
        </form>
    )
}

const ReduxDialogsForm = reduxForm({
    form: 'dialogsForm'
})(DialogsForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.messages.map( el => <Message name={el.name} 
        text={el.message} />);

    let onSendMessage = data => {
        props.sendMessage(data.dialogText);
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
                    <ReduxDialogsForm onSubmit={onSendMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;