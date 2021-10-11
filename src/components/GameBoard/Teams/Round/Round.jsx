import React, {useState} from 'react'
import style from './Round.module.css'
import SpeechContainer from "./Speech/SpeechContainer";
import Talk from "./Talk/Talk";
import Rating from "./Rating/Rating";
import Countdown from "./Countdown/Countdown";

const Round  = (props) => {
    const [editMode, setEditMode] = useState(false)

    const changeEditMode = () => {
        !editMode
            ? setEditMode(true)
            : setEditMode(false)
    }

    return <div className={style.round}>
        <div className={style.header}>
            <div className={style.title}>
                {props.roundType}
            </div>
            <div className={style.rightElement}>
                {props.currentGame.status === "finished"
                    ? <Rating roundId={props.roundId}
                              setRoundRating={props.setRoundRating}
                              currentUserRole={props.currentUserRole}
                              rating={props.rating}
                              ratingChange={props.ratingChange}
                              changedRoundRating={props.changedRoundRatings.filter((item) => item.roundId === props.roundId)[0]}/>
                    :<Countdown startTime={props.startTime}/>}
            </div>
        </div>
        <div className={style.speeches}>
            <SpeechContainer roundId={props.roundId}  team={props.team} />
        </div>
        <div className={style.talk}>
            {props.isAuth && !editMode  &&
            <div onClick={changeEditMode}>Add speech</div>}
            {editMode &&
            <div><Talk {...props} changeEditMode={changeEditMode} /></div>
            }</div>
    </div>

}

export default Round