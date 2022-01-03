import React from 'react';
import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, toggleIsFollowingProgress, getUsersThunkCreator } 
from "../../redux/findUsersReducer";
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { getAllUsers, getPageSize, getCurrentPage, getFollowingInProgress, getIsFetching, getTotalUsersCount } from '../../redux/reselectors/reselectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = page => {
        this.props.getUsersThunkCreator(page, this.props.pageSize);

    }

    render() {
        return <> 
            {this.props.isFetching ?  <Preloader /> : null }
                <Users onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}

                />
            </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unFollow: (userID) => {
//             dispatch(unFollowAC(userID));
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: count => {
//             dispatch(setTotalUsersCountAC(count));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         toggleIsFetching: isFetching => {
//             dispatch(setIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersThunkCreator
})(UsersContainer); 