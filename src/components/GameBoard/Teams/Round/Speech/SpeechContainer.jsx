import React from "react";
import {connect} from "react-redux";
import Speech from "./Speech";
import {deleteSpeech, updateSpeech} from "../../../../../redux/game-reducer";

class SpeechContainer extends React.Component {
    render() {
        return <div>
            {this.props.speech[this.props.roundType] ?
                this.props.speech[this.props.roundType].map(speech => {
                    return <div key={speech.id}>
                        <Speech {...this.props} {...speech}/>
                    </div>
                })
                : null
            }</div>
    }
}

const mapStateToProps = (state) => {
    return {
        speech: state.games.speech,
        currentUserId: state.auth.currentUserId,
        currentGame: state.games.currentGame
    }
}

export default connect(mapStateToProps, {deleteSpeech, updateSpeech})(SpeechContainer)