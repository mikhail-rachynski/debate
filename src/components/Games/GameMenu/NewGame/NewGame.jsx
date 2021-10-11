import React, {useState} from 'react'
import {createNewKind, newGame} from "../../../../redux/games-reducer";
import {connect} from "react-redux";
import style from "./NewGame.module.css";
import {compose} from "redux";
import {withPopUp} from "../../../../hoc/PopUp/withPopUp";
import {Form, Formik, Field, ErrorMessage} from "formik";
import Kind from "../../../common/Kind/Kind";


const NewGame = (props) => {
    const [kind, setKind] = useState(null)
    const [newKindForm, setNewKindForm] = useState(false)
    const [newKind, setNewKind] = useState("")

    const changeNewKindFormState = (state=true) => {
        if(!newKindForm) {
            setNewKindForm(true)
        } else {
            if(newKind.length > 0 && state){
                props.createNewKind(newKind)
            }
            setNewKindForm(false)
            setNewKind("")
        }
    }
    const onKindFormChange = (e) => {
        setNewKind(e.currentTarget.value)
    }

    return <div className={style.newGame}>
        <div className={style.title}>Create new game</div>

        <Formik
            initialValues={{ topic: ''}}
            validate={values  => {
                const errors = {};
                const maxLength = 10

                if(values.topic.length < 5) {
                    errors.topic = `Min length ${maxLength} symbols`
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.newGame({topic: values.topic, kind_id: kind})
                    props.changePopUp()
                    setSubmitting(false);
                }, 400);
            }}
            onReset={() =>{
                props.changePopUp()
            }}>
            {({ isSubmitting }) => (
                <Form className={style.formBody}>
                    <div className={style.inputs}>
                        Topic: <Field type="textarea" name="topic" component="input" className={style.textArea}/>
                    </div>

                    {props.kinds &&
                    <div className={style.kinds}>
                        Set kind: {props.kinds.map(item =>
                        <span key={item.id} onClick={() => setKind(item.id)} className={style.kindButton}>
                            <Kind kindId={item.id} active={kind === item.id}/>
                    </span> )}
                        <div className={style.addKind} onClick={changeNewKindFormState}>Add kind</div>
                        {newKindForm &&
                        <div className={style.newKindForm}>
                            <input onChange={onKindFormChange}
                                   autoFocus={true}
                                   value={newKind}
                            />
                            <div><button onClick={changeNewKindFormState}>Save</button>
                            <button onClick={() => changeNewKindFormState(false)}>Cancel</button></div>
                        </div>}
                    </div>
                    }
                    <div className={style.buttons}>
                        <button type="submit" disabled={isSubmitting || !kind}>Create</button>
                        <button type="reset">Cancel</button>
                    </div>
                    <ErrorMessage name="topic" component="div" className={style.error}/>
                </Form>

            )}
        </Formik></div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {newGame, createNewKind}), withPopUp)(NewGame)