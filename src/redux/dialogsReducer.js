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
    myMessages: [
        {name: "Dmitry", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {name: "Dmitry", message: "Yes, I do"},
        {name: "Dmitry", message: "Haha"},
        
    ],
    firendMessages: [
        {name: "Genry", message: "What's up dog. How do you doing?" },
        {name: "Harry", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
        {name: "Eminem", message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        {name: "Jon", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis incidunt laborum facilis nihil laudantium. Itaque odit similique exercitationem quasi." },
    ],
    newMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        }
        case ADD_MESSAGE: {
            let newMessage = {
                name: "Dmitry",
                message: state.newMessage
            };
            
            let stateCopy = {...state};
            stateCopy.myMessages = [...state.myMessages];
            stateCopy.myMessages.push(newMessage);

            return stateCopy;
        }
        default:
            return state;
    }
}

export const updateMessageAreaActionCreator = (message) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message
    }
)

export const addMessageActionCreator = () => (
    {
        type: ADD_MESSAGE
    }
)

export default dialogsReducer;