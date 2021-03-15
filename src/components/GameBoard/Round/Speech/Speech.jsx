import React from 'react'
import Talk from "./Talk/Talk";
import MessageContainer from "./Message/MessageContainer";
import style from './Speech.module.css'

class Speech extends React.Component {
    state = {
        editMode: false
    }
    changeEditMode = () => {
        !this.state.editMode
            ? this.setState({ editMode: true })
            : this.setState({ editMode: false })
    }
    render() {
        return <div className={style.speech}>
            <div className={style.messages}><MessageContainer roundType={[this.props.roundType]}/></div>
            <div className={style.form}><button onClick={this.changeEditMode}>Add speech</button>
            {this.state.editMode &&
            <Talk gameId={this.props.currentGame}
                  changeEditMode={this.changeEditMode}
                  roundId={this.props.roundId}
                  getSpeech={this.props.getSpeech}
                  pushSpeech={this.props.pushSpeech}/>
            }</div>

        </div>
    }
}

export default Speech