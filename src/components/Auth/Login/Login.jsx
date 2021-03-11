import React from 'react'
import {Field, reduxForm} from "redux-form";
import {authMe, login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAutoRedirect} from "../../../hoc/withAutoRedirect";
import style from "./../auth.module.css"

const LoginForm = (props) => {
    return (
        <div className={style.form}><h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div className={style.input}>
                    <Field placeholder={"Login"} name={"email"} component={"input"}/>
                </div>
                <div className={style.input}>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div className={style.input}>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
                </div>
                <div className={style.input}>
                    <button>Login</button>
                </div>

            </form>

        </div>

    )
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit =(formData) => {
        props.login(formData)
    }
    return <div className={style.formBody}>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default compose(connect(null, {login, authMe}), withAutoRedirect)(Login)