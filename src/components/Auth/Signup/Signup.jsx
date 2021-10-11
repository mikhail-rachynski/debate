import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {signUp} from "../../../redux/auth-reducer";
import style from "../auth.module.css";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";

const SignUp = (props) => {
    let history = useHistory()
    useEffect(() => {
        if(props.isAuth) {
            history.push("/")
        }
    }, [props.isAuth])

    return <div className={style.formBody}>
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
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
                    props.signUp({name: values.name, email: values.email, password: values.password})
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
                  isSubmitting
              }) => (
                <form onSubmit={handleSubmit} className={style.form}>
                    <h1>Registration</h1>
                    <div className={style.input}>
                        <input
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </div>
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

export default connect(null, {signUp})(SignUp)