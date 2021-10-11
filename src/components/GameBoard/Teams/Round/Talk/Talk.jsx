import React from "react";
import style from "./Talk.module.css"
import {Form, Formik, Field, ErrorMessage} from "formik";

const Talk = (props) => {
    return <div>
        {props.reply &&
        <div className={style.reply}>
            <div className={style.replyTo}>Reply to:</div>
            <div className={style.replyToText}>{props.reply.slice(0, 128)}...</div>
        </div>
        }
        <Formik
            initialValues={{ text: ''}}
            validate={values => {
                const errors = {};
                const maxLength = 10000
                if (values.text.length > maxLength) {
                    errors.text = `Max length ${maxLength} symbols`
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {
                    props.pushSpeech(props.roundId, values.text, props.speechId)
                    props.changeEditMode()
                    setSubmitting(false);
                }, 400);
            }}
            onReset={() =>{
                props.changeEditMode()
            }}
        >
            {({ isSubmitting }) => (
                <Form className={style.talk}>
                    <div>
                        <Field type="textarea" name="text" component="textarea" className={style.textArea}/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        <button type="reset">Cancel</button>
                    </div>
                    <ErrorMessage name="text" component="div" className={style.error}/>
                </Form>

            )}
        </Formik>
    </div>
}

export default Talk