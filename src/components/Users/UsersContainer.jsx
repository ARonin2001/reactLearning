import React from 'react';
import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress } 
from "../../redux/findUsersReducer";
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../API/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }
    
    onPageChanged = pageNumber => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false)

            this.props.setUsers(data.items)
        });
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
                    toggleIsFetching={this.props.toggleIsFetching}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}

                />
            </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersContainer); 