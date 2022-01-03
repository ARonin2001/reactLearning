import Dialogs from './Dialogs';
import { updateMessageAreaActionCreator,  addMessageActionCreator } 
from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);