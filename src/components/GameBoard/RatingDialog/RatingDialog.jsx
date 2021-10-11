import React from 'react'
import style from './RatingDialog.module.css'
import {AiFillStar} from "react-icons/all";

export const RatingDialog = (props) => {
    const saveRatings = () => {
        props.saveGameRatings(props.currentGameId, props.changedRoundRatings)
        props.setRatingChange(false)
    }
    const allStars = () => {
        return props.changedRoundRatings.map(round => round.rating === null).some(item => item)
    }
    const stars = (count, size=1) => {
        const stars = []
        while(stars.length < count) {
            stars.push(<AiFillStar size={`${size}em`} key={stars.length} style={{color: "white"}}/>)
        }
        return stars.map(item => item)
    }
    return <div className={style.dialogLine}>
        {!props.ratingChange
            ? <>
                <button onClick={() => props.setRatingChange(true)} >
                    You are the referee. Click to set ratings {stars(5, 0.9, "white")}
                </button>
            </>
            : <>
                <p>{!allStars() ? "Save ratings?" : "Set ratings for all rounds"}</p>
                <button onClick={saveRatings} disabled={allStars()}>Save</button>
                <button onClick={() => props.setRatingChange(false)}>Cancel</button>
            </>
        }</div>
}

export default RatingDialog