import React from "react";
import {connect} from "react-redux";
import Message from "./Message";

class MessageContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <div>
            {this.props.speech[this.props.roundType].map(speech => {

                return <Message key={speech.id} msg={speech.speech}/>
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

export default connect(mapStateToProps, {})(MessageContainer)