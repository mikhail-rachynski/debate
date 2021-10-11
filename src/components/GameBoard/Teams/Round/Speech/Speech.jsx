import React, {useState} from "react";
import style from "./Speech.module.css"
import profilePhoto from "../../../../../assets/images/small_profile_photo.jpg";
import {MdDeleteForever} from 'react-icons/md';
import {AiFillEdit} from "react-icons/ai";
import {TimePassed} from "../../../../common/TimePassed/TimePassed";
import {BsThreeDots} from "react-icons/bs";
import Talk from "../Talk/Talk";

const Speech = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [speechText, setSpeechText] = useState(props.text)
    const [reply, setReply] = useState(false)

    const changeReplyEditMode = () => {
        !reply ? setReply(true) : setReply(false)
    }
    const showOptionsMenu = (e) => {
        e.stopPropagation();
        setShowOptions(true)
        document.addEventListener('click', closeOptionsMenu);

    }
    const closeOptionsMenu = () => {
        setShowOptions(false)
        document.removeEventListener('click', closeOptionsMenu);
    }
    const deleteSpeech = () => {
        props.deleteSpeech(props.speechId)
    }
    const onSpeechChange = (e) => {
        setSpeechText(e.currentTarget.value)
    }
    const activateEditMode = () => {
        closeOptionsMenu()
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateSpeech(props.speechId, speechText)
    }

    return <div className={style.speech} >
        <div className={style.header} style={{color: props.team === "government" ? "#64a0a0" : "#a06464"}}>
            <div className={style.speaker}>
                <img src={profilePhoto} className={style.avatar} alt={props.userName}/>
                <div className={style.spoke}>
                    <span className={style.userName}>{props.userName}</span>
                    <span className={style.time}> spoke {<TimePassed createdTime={props.created_at}/>}{props.created_at !== props.updated_at && " & updated"}</span>
                </div>
            </div>
            {props.currentUserId === props.userId &&
            <div className={style.options} onClick={showOptionsMenu}>
                {showOptions
                    ? <div className={style.optionsMenu}>
                        <AiFillEdit onClick={activateEditMode} />
                        <MdDeleteForever onClick={deleteSpeech} />
                    </div> :
                    <BsThreeDots/>}
            </div>}
        </div>
        {!editMode &&
        <div className={style.text}>{props.text}</div>}

        {editMode &&
        <textarea onChange={onSpeechChange}
                  autoFocus={true}
                  onBlur={deActivateEditMode}
                  value={speechText} />
        }

        <div className={style.footer}>
            {reply
                ? <Talk roundId={props.roundId}
                        reply={props.text}
                        speechId={props.speechId}
                        changeEditMode={changeReplyEditMode}
                        pushSpeech={props.pushSpeech}/>
                : <div className={style.replyButton} onClick={changeReplyEditMode}>Reply</div>}

        </div>

        {props.replies &&
        <div className={style.reply}>
            {props.replies.map(speech => <Speech key={speech.id}
                                                 roundId={props.roundId}
                                                 replies={props.speeches.filter(reply => reply.reply_to === speech.id)}
                                                 speeches={props.speeches}
                                                 speechId={speech.id}
                                                 text={speech.text}
                                                 created_at={speech.created_at}
                                                 updated_at={speech.updated_at}
                                                 userId={speech.user_id}
                                                 userName={speech.user_name}
                                                 team={props.team}
                                                 currentUserId={props.currentUserId}
                                                 pushSpeech={props.pushSpeech}
                                                 updateSpeech={props.updateSpeech}
                                                 deleteSpeech={props.deleteSpeech}
            />)}
        </div>
        }

    </div>
}

export default Speech