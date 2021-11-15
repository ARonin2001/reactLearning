import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._rerender(this._state);
    }
    
}   

export default store;