import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {authMe, login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import style from "./../auth.module.css"
import {Formik} from "formik";

const Login = (props) => {
    let history = useHistory()
    useEffect(() => {
        if(props.isAuth) {
            history.push("/")
        }
    }, [props.isAuth])

    return <div className={style.formBody}>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.login({email: values.email, password: values.password})
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className={style.form}><h1>Login</h1>
                    <div className={style.input}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>

                    <div>{errors.email && touched.email && errors.email}</div>
                    <div className={style.input}>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>

                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, authMe})(Login)