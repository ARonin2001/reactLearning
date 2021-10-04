// Action Type
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXTAREA_TEXT = 'UPDATE-NEW-TEXTAREA-TEXT';
const ADD_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "I'm Arnold Shwarzneger", likeCount: 5},
                {id: 2, message: "What do I do here?", likeCount: 3},
                {id: 3, message: "You're my the best friend", likeCount: 10},
                {id: 4, message: "Beautiful", likeCount: 7},
                {id: 5, message: "The strange things", likeCount: 1},
                {id: 6, message: "Props", likeCount: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    
        },
        navbar: {
            friends: [
                {name: "Dmitry"},
                {name: "Genry"},
                {name: "Harry"},
                {name: "Eminem"},
                {name: "Jon"},
                {name: "Alex"},
            ]
        },
    },
    _rerender() {
        console.log("rerender");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerender = observer;
    },
    
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            
            this._state.profilePage.posts.push(newPost);
            this._rerender(this._state);
        } else if(action.type === UPDATE_NEW_TEXTAREA_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rerender(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._rerender(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                name: "Dmitry",
                message: this._state.dialogsPage.newMessage
            };
            this._state.dialogsPage.myMessages.push(newMessage);
            this._rerender(this._state);
        }
    }
    
}

// Action Creator
export const addPostActionCreator = () => ( {type: ADD_POST} );

export const updateTextAreaActionCreator = (text) => 
    ({
        type: UPDATE_NEW_TEXTAREA_TEXT, 
        newText: text
    });

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
    

export default store;