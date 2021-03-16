import React from 'react'
import style from './Round.module.css'
import SpeechContainer from "./Speech/SpeechContainer";
import Talk from "./Talk/Talk";

class Round extends React.Component {
    state = {
        editMode: false
    }
    changeEditMode = () => {
        !this.state.editMode
            ? this.setState({ editMode: true })
            : this.setState({ editMode: false })
    }
    render() {
        return <div className={style.round}>
            <div className={style.messages}><SpeechContainer roundType={[this.props.roundType]}/></div>
            <div className={style.form}>
                {this.props.isAuth && <button onClick={this.changeEditMode}>Add speech</button>}
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

export default Round