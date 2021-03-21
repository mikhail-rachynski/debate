import React from 'react'
import {Field, reduxForm} from "redux-form";
import {newGame} from "../../redux/game-reducer";
import {connect} from "react-redux";
import style from "../Auth/auth.module.css";

const NewGameForm = (props) => {
    return <div className={style.form}><h1>Create new game</h1>
        <form onSubmit={props.handleSubmit}>
            <div className={style.input}>
                <Field placeholder={"Topic"} name={"topic"} component={"input"} />
            </div>
            <div className={style.input}>
                <button>Create</button>
            </div>
        </form>
    </div>
}

const NewGameReduxForm = reduxForm ({
    form: 'newGame'
})(NewGameForm)

const NewGame = (props) => {
    const onSubmit = (formData) => {
        props.newGame(formData)
    }
    return <div>
        <NewGameReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {newGame})(NewGame)