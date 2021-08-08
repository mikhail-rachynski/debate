import React from 'react'
import GameMenu from "./GameMenu/GameMenu";
import style from './Games.module.css'
import Game from "./Game/Game";


const Games = (props) => {
    let allGames =
        props.games.map((value) => <Game key={value.id} game={value} {...props}/>)
    return (
        <div className={style.games}>
            <div className={style.start}><GameMenu isAuth={props.isAuth}/></div>
            <div className={style.games}>{allGames}</div>
        </div>
    )
}


export default Games;