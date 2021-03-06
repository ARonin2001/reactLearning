import { usersAPI } from "../API/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING';
const TOGGLE_ISFETCHING_FOLLOWING_PROGRESS = 'TOGGLE-ISFETCHING-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    
                    return u;
                            
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID)
                        return {...u, followed: false};

                    return u;
                })
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_USERS:
            return {...state, users: action.users};
        default:
        case TOGGLE_ISFETCHING:
            return {...state, isFetching: action.toggleIsFetching};
        case TOGGLE_ISFETCHING_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.toggleIsFetching 
                ? [...state.followingInProgress, action.userId ]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        return state;
    }
}

export default findUsersReducer;

export const followAC = userID => ({type: FOLLOW, userID});
export const unFollowAC = userID => ({type: UN_FOLLOW, userID});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = toggleIsFetching => ({type: TOGGLE_ISFETCHING, toggleIsFetching});
export const toggleIsFollowingProgress = (toggleIsFetching, userId) => ({type: TOGGLE_ISFETCHING_FOLLOWING_PROGRESS, toggleIsFetching, userId});

export const getUsersThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
                                                
        usersAPI.getUnFollow(userId).then(resultCode => {
            if(resultCode === 0)
                dispatch(unFollowAC(userId));

            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
                                            
        usersAPI.getFollow(userId).then(resultCode => {
            if(resultCode === 0)
                dispatch(followAC(userId));

            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
}