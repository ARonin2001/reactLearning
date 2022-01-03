const ADD_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Genry"},
        {id: 3, name: "Harry"},
        {id: 4, name: "Eminem"},
        {id: 5, name: "Jon"},
    ],
    messages: [
        {name: "Dmitry", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {name: "Dmitry", message: "Yes, I do"},
        {name: "Dmitry", message: "Haha"},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                name: "Dmitry",
                message: action.newMessage
            };
            
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);

            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = newMessage => (
    {
        type: ADD_MESSAGE,
        newMessage
    }
)

export default dialogsReducer;