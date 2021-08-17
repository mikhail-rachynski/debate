import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Speech from "./Speech";
import {deleteSpeech, updateSpeech} from "../../../../../redux/game-reducer";

function SpeechContainer(props) {
    const [speeches, setSpeeches] = useState([])

    useEffect(() => {
        setSpeeches(props.speeches.filter(speech => speech.round_id === props.roundId))
    }, [props.speeches])
    return <div>
        {speeches &&
        speeches.map(speech => {
            return <div key={speech.id}>
                <Speech speechId={speech.id}
                        speech={speech.speech}
                        userId={speech.user_id}
                        userName={speech.user_name}
                        currentUserId={props.currentUserId}
                        updateSpeech={props.updateSpeech}
                        deleteSpeech={props.deleteSpeech}/>
            </div>
        })
        }</div>
}

const mapStateToProps = (state) => {
    return {
        speeches: state.game.speeches,
        currentUserId: state.auth.currentUserId,
        currentGame: state.game.currentGame,
        isFetching: state.game.isFetching
    }
}

export default connect(mapStateToProps, {deleteSpeech, updateSpeech})(SpeechContainer)