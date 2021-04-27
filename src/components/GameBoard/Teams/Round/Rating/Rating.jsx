import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import style from './Rating.module.css'

class Rating extends React.Component {
    onChangeRating = (i) => {
        this.props.currentUserRole === "referee" && this.props.setRoundRating(this.props.roundId, i)
    }
    renderRatingStars = () => {
        let rating = []
        for(let i = 0; i < 5; i++) {
            rating.unshift(this.props.rating > i
                ? <AiFillStar size="1.2em" className={this.props.currentUserRole === "referee" && style.star}
                              key={i}
                              onClick={() => this.onChangeRating(i + 1)} />
                : <AiOutlineStar size="1.2em" className={this.props.currentUserRole === "referee" && style.star}
                                 key={i}
                                 onClick={() => this.onChangeRating(i + 1)} />)
        }
        return rating
    }
    render() {
        return <div className={style.rating}>{this.renderRatingStars()}</div>
    }
}

export default Rating