import React from "react";
import style from "./Speech.module.css"
import profilePhoto from "../../../../../assets/images/small_profile_photo.jpg";
import {MdDeleteForever} from 'react-icons/md';
import { AiFillEdit,  AiOutlineEdit} from "react-icons/ai";

class Speech extends React.Component {
    state = {
        editMode: false,
        speech: this.props.speech
    }
    deleteSpeech = () => {
        this.props.deleteSpeech(this.props.speechId)
    }
    onSpeechChange = (e) => {
        this.setState( {
            speech: e.currentTarget.value
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateSpeech(this.props.speechId, this.state.speech)
    }
    render() {

        return <div className={style.speech}>
            <img src={profilePhoto} className={style.user} alt={this.props.userName}/>
            {!this.state.editMode &&
                <div className={style.text}>{this.props.speech}</div>}
            {this.state.editMode &&
                <textarea onChange={this.onSpeechChange}
                          autoFocus={true}
                          onBlur={this.deActivateEditMode}
                          value={this.state.speech} />
            }
            {this.props.currentUserId === this.props.userId &&
                <div className={style.options}>
                    {this.state.editMode ? <AiOutlineEdit /> : <AiFillEdit onClick ={this.activateEditMode} />}
                    <MdDeleteForever onClick={this.deleteSpeech} />
                </div>}
        </div>
    }
}

export default Speech