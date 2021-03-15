import React from 'react'
import {connect} from "react-redux";
import {getRounds, getSpeech} from "../../../redux/game-reducer";
import Round from "./Round";

class RoundContainer extends React.Component {

    render() {
        return <div>{this.props.rounds.map(round =>
            <Round key={round.id}
                   roundId={round.id}
                   roundType={round.round_type}
                   />)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        rounds: state.games.rounds,
    }
}

export default connect(mapStateToProps, {})(RoundContainer)