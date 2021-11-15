import Dialogs from './Dialogs';

import { updateMessageAreaActionCreator,  addMessageActionCreator } 
from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newMessage: state.dialogsPage.newMessage,
        dialogs: state.dialogsPage.dialogs,
        myMessages: state.dialogsPage.myMessages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextArea: message => {
            let action = updateMessageAreaActionCreator(message);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
            dispatch(updateMessageAreaActionCreator(''));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;