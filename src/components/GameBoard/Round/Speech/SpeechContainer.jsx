import React from 'react'
import {getSpeech, pushSpeech} from "../../../../redux/game-reducer";
import {connect} from "react-redux";
import Speech from "./Speech";

class SpeechContainer extends React.Component {
    componentDidMount() {
        const gameId = this.props.currentGame
        const roundId = this.props.roundId
    }
    render() {
        return <Speech {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        speech: state.games.speech,
        rounds: state.games.rounds,
        currentGame: state.games.currentGame
    }
}

export default connect(mapStateToProps, {pushSpeech})(SpeechContainer)