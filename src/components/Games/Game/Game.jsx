import React, {useEffect, useState} from 'react'
import style from './Game.module.css'
import {ImExit} from 'react-icons/im';
import {
    MdPlayArrow,
    MdPeopleOutline,
    BiPauseCircle,
    IoGameControllerOutline,
    BiKey, FaFlagCheckered
} from "react-icons/all";
import {NavLink} from "react-router-dom";
import DetailsContainer from "./Details/DetailsContainer";
import {TimePassed} from "../../common/TimePassed/TimePassed";
import Kind from "../../common/Kind/Kind";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Game = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [viewDetails, setViewDetails] = useState(false)
    const [topic, setTopic] = useState(props.game.topic)
    const [score, setScore] = useState(null)

    useEffect(() => {
        setTopic(props.game.topic)
    }, [props.game.topic])

    useEffect(() => {
        setScore(props.game.score)
    }, [props.game.score])

    const changeStateViewDetails = () => {
        !viewDetails ? setViewDetails(true) : setViewDetails(false)
    }
    const play = () => {
        props.addPlayer(props.game.id, props.currentUserId)
    }
    const exit = () => {
        props.exitPlayerFromGame(props.game.id, props.currentUserId)
    }
    const deleteCurrentGame = () => {
        props.deleteGame(props.game.id)
    }
    const changeEditorMode = () => {
        if(!editMode) {
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }
    const status = () => {
        switch(props.game.status){
            case "waiting": {
                return props.game.current_user_gamer
                    ? <ImExit title="Exit"
                              onClick={exit}/>
                    : props.isAuth
                        ? <MdPlayArrow title="Play"
                                       onClick={play}/>
                        : <BiKey title="Login or register"/>
            }
            case "progress": {
                return <NavLink to={"/game/" + props.game.id}>
                    <IoGameControllerOutline title="Game started" />
                </NavLink>
            }
            case "pause": {
                return <BiPauseCircle />
            }
            case "finished": {
                return <NavLink to={"/game/" + props.game.id}>
                    <FaFlagCheckered title="Game finished" />
                </NavLink>
            }
        }

    }

    return <div>
        <div className={style.game}>
            {!editMode
                ? <div className={style.topicArea}>
                    <div className={style.topic}>
                        <NavLink  to={"/game/" + props.game.id}>{topic}</NavLink>
                        {props.game.kind_id && <Kind kindId={props.game.kind_id}/>}
                    </div>
                    <div className={style.gameInfo}>
                        <NavLink to={"/profile/" + props.game.creator.id} style={{fontWeight: "bold"}}>
                            {props.game.creator.name}
                        </NavLink> created {<TimePassed createdTime={props.game.created_at}/>}
                    </div>
                </div>

                : <Formik
                    initialValues={{topic: topic}}
                    onSubmit={(values, { setSubmitting }) => {

                        setTimeout(() => {
                            props.updateGameTopic({gameId: props.game.id, topic: values.topic, kind_id: values.kind})
                            changeEditorMode()
                            changeStateViewDetails()
                            setSubmitting(false);
                        }, 400);
                    }}
                    onReset={() =>{
                        changeEditorMode()
                    }}>

                    {({ isSubmitting }) => (
                        <Form className={style.formBody}>
                            <div className={style.inputs}>
                                <Field type="input" name="topic" component="input" className={style.textArea}/>
                            </div>

                            <div>
                                Kind: <Field as="select" name="kind" defaultValue={props.game.kind_id} className={style.selectList}>
                                {props.kinds.map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>)}
                            </Field>
                                <span> <button type="submit" disabled={isSubmitting}>Save</button>
                                <button type="reset">Cancel</button></span>
                            </div>
                            <ErrorMessage name="text" component="div" className={style.error}/>
                        </Form>

                    )}
                </Formik>
            }

            {score &&
            <div className={style.rating}>
                <div className={style.scaleGovernment}
                     style={{height: `${score}%`}}/>
                <div className={style.scaleOpposition}
                     style={{height: `${100-score}%`}}/>
            </div>
            }

            <div className={style.users} onClick={changeStateViewDetails}>
                <MdPeopleOutline size="1em"/> {props.game.users_count}
            </div>
            <div className={style.status}>
                {status()}
            </div>

        </div>

        {viewDetails
            ? <DetailsContainer game={props.game}
                                editMode={editMode}
                                editorMode={changeEditorMode}
                                deleteCurrentGame={deleteCurrentGame}
                                changeStateViewDetails={changeStateViewDetails}/>
            : <div className={style.details}>
                <span className={style.bookmark} onClick={changeStateViewDetails}>View details</span>
            </div>
        }

    </div>
}

export default Game