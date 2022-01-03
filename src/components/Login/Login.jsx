import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {getLoginUser} from '../../redux/authReducer';
import {withValidationElement} from '../Hoc/withValidationElement';
import {required} from '../utilits/Validations/validation';

const Input = withValidationElement("input");

const LoginForm = props => {
    return (
        <div className={"form__container"}>
            <form onSubmit={props.handleSubmit} >
                <div className={"input__container"}>
                    <Field name={"login"} component={Input} 
                        validate={[required]} />
                </div>
                <div className={"input__container"}>
                    <Field name={"password"} component={Input} type="password"
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        name="rememberMe"
                        id="rememberMe"
                        component="input"
                        type="checkbox"
                    />
                    <label htmlFor="rememberMe">remember me</label>

                </div>
                {
                    props.error && <div>
                    {   props.error}
                    </div>
                    
                }
                

                <button>Login</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

const Login = props => {
    const onSubmit = formData => {
        let {password, login, rememberMe} = {...formData};
        props.getLoginUser(login, password, rememberMe);
    }    

    if(props.isAuth)
        return <Redirect to={"/profile"} />

    return (
        <div className={"login__container"}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    getLoginUser
})(Login);