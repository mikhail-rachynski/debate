import React from 'react'
import style from './Round.module.css'
import SpeechContainer from "./Speech/SpeechContainer";
import Talk from "./Talk/Talk";
import Rating from "./Rating/Rating";

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
            <div className={style.title}>{this.props.roundType}</div>
            <div className={style.rating}>
                <Rating roundId={this.props.roundId}
                        setRoundRating={this.props.setRoundRating}
                        currentUserRole={this.props.currentUserRole}
                        rating={this.props.rating}/>
            </div>
            <div className={style.speeches}>
                <SpeechContainer roundType={[this.props.roundType]}/>
            </div>
            <div className={style.form}>
                {this.props.isAuth &&
                <button onClick={this.changeEditMode}>
                    {!this.state.editMode ? "Add speech" : "Close"}
                </button>}
                {this.state.editMode &&
                <Talk {...this.props} changeEditMode={this.changeEditMode} />
                }</div>


        </div>
    }
}

export default Round