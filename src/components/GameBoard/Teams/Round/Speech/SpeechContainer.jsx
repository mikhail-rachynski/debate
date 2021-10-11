import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Speech from "./Speech";
import {deleteSpeech, pushSpeech, updateSpeech} from "../../../../../redux/game-reducer";

function SpeechContainer(props) {
    const [speeches, setSpeeches] = useState([])

    useEffect(() => {
        setSpeeches(props.speeches.filter(speech => speech.round_id === props.roundId))
    }, [props.speeches])
    return <div>
        {speeches &&
        speeches.filter(speech => !speech.reply_to).map(speech => {
            return <div key={speech.id}>
                <Speech
                    roundId={props.roundId}
                    speeches={props.speeches}
                    replies={props.speeches.filter(reply => reply.reply_to === speech.id)}
                    speechId={speech.id}
                    text={speech.text}
                    created_at={speech.created_at}
                    updated_at={speech.updated_at}
                    userId={speech.user_id}
                    userName={speech.user_name}
                    team={props.team}
                    currentUserId={props.currentUserId}
                    pushSpeech={props.pushSpeech}
                    updateSpeech={props.updateSpeech}
                    deleteSpeech={props.deleteSpeech}
                />
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

export default connect(mapStateToProps, {pushSpeech, deleteSpeech, updateSpeech})(SpeechContainer)