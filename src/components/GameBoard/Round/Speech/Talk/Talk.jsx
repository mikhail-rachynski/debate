import {Field, reduxForm} from "redux-form";
import React from "react";
import style from "./Talk.module.css"

const Talk = (props) => {
    const onSubmit = (value) => {
        props.pushSpeech(props.gameId, props.roundId, value.text)
        props.changeEditMode()
    }
    return <div className={style.talk}><AddSpeechReduxForm roundId={props.roundId} onSubmit={onSubmit} /></div>
}

const SpeechForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Send speech..."} name={"text"} component={"input"}/>
            <button>Add speech</button>
        </form>
    )
}

const AddSpeechReduxForm = reduxForm({form: `talk`})(SpeechForm)

export default Talk