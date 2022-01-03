import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

let withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isAuth)
            return <Redirect to={'/login'} />

        return <Component {...props} />
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;