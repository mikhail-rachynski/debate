import React from 'react'
import Game from "./Game/Game";
import GameMenu from "./GameMenu/GameMenu";
import style from './Games.module.css'


const Games = (props) => {
    let postsElements =
        props.games.map((value) => <Game key={value.id} game={value}
                                         {...props}/>)
    return (
        <div className={style.games}>
            <div className={style.start}><GameMenu /></div>
            <div className={style.games}>{postsElements}</div>
        </div>
    )
}


export default Games;