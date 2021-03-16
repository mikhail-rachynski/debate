import React from "react";
import {connect} from "react-redux";
import Speech from "./Speech";

class SpeechContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <div>
            {this.props.speech[this.props.roundType].map(speech => {

                return <Speech key={speech.id} msg={speech.speech}/>
            })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        speech: state.games.speech
    }
}

export default connect(mapStateToProps, {})(SpeechContainer)