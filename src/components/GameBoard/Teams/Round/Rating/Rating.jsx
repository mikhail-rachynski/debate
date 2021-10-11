import React, {useEffect, useState} from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import style from './Rating.module.css'

const Rating = (props) => {
    const [judge, setJudge] = useState(false)
    const [rating, setRating] = useState(0)

    useEffect(() => {
        props.ratingChange ? setJudge(true) : setJudge(false)
    }, [props.ratingChange])

    useEffect(() => {
        !judge && setRating(props.rating)
    },[judge, props.rating])

    const onChangeRating = (i) => {
        if(judge) {
            props.setRoundRating(props.roundId, i+1)
            setRating(props.changedRoundRating.rating)
        }
    }

    const renderRatingStars = () => {
        let ratingStars = []
        for(let i = 0; i < 5; i++) {
            ratingStars.unshift(rating > i
                ? <AiFillStar size="1.2em" className={judge && style.star}
                              key={i}
                              onClick={() => onChangeRating(i)} />
                : <AiOutlineStar size="1.2em" className={judge && style.star}
                                 key={i}
                                 onClick={() => onChangeRating(i)} />)
        }
        return ratingStars
    }
    return <div className={style.rating}>{renderRatingStars()}</div>
}

export default Rating