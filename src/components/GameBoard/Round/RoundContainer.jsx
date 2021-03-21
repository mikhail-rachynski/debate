import React from 'react'
import {connect} from "react-redux";
import {pushSpeech} from "../../../redux/game-reducer";
import Round from "./Round";

class RoundContainer extends React.Component {

    render() {
        return <div>{this.props.rounds.map(round =>
            <Round key={round.id}
                   roundId={round.id}
                   roundType={round.round_type}
                   {...this.props}
                   />)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        speech: state.games.speech,
        rounds: state.games.rounds,
        currentGame: state.games.currentGame,
        isAuth: state.auth.isAuth,
        currentUserId: state.auth.currentUserId
    }
}

export default connect(mapStateToProps, {pushSpeech})(RoundContainer)