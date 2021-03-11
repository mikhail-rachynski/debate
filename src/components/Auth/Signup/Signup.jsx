import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {signUp} from "../../../redux/auth-reducer";
import {withAutoRedirect} from "../../../hoc/withAutoRedirect";
import {compose} from "redux";
import style from "../auth.module.css";

const SignUpForm = (props) => {
    return (
        <div className={style.form}><h1>Registration</h1>
            <form onSubmit={props.handleSubmit}>
                <div className={style.input}>
                    <Field placeholder={"Name"} name={"name"} component={"input"}/>
                </div>
                <div className={style.input}>
                    <Field placeholder={"Email"} name={"email"} component={"input"}/>
                </div>
                <div className={style.input}>
                    <Field placeholder={"Password"} type={"password"} name={"password"} component={"input"}/>
                </div>
                {/*<div>*/}
                {/*    <Field placeholder={"Password confirmation"} type={"password"} name={"password_confirmation"} component={"input"}/>*/}
                {/*</div>*/}
                <div className={style.input}>
                    <button>SignUp</button>
                </div>

            </form>
        </div>
    )
}

const SignUpReduxForm = reduxForm ({
    form: 'SignUp'
})(SignUpForm)

const SignUp = (props) => {
    const onSubmit =(formData) => {
        props.signUp(formData)
    }
    return <div className={style.formBody}>
        <SignUpReduxForm onSubmit={onSubmit}/>
    </div>
}


export default compose(connect(null, {signUp}), withAutoRedirect)(SignUp)