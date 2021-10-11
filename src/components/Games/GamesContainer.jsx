import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {
    getGames, getKinds,
    webSocketGames
} from "../../redux/games-reducer";
import style from "./Games.module.css";
import GameMenu from "./GameMenu/GameMenu";
import GameContainer from "./Game/GameContainer";
import Kind from "../common/Kind/Kind";
import {withRouter, NavLink} from "react-router-dom";
import {compose} from "redux";
import {MdFiberNew} from "react-icons/md";
import NewGame from "./GameMenu/NewGame/NewGame";

const GamesContainer = ({getGames, webSocketGames, games,
                            isAuth, kinds, getKinds, currentKind, match, isFetching}) => {
    const [page, setPage] = useState(match.params.id)

    useEffect(() => {
        getKinds()
        webSocketGames(true)
        return () => webSocketGames(false)
    }, [])

    useEffect(() => {
        setPage(match.params.id)
    }, [match.params.id])

    useEffect(() => {
        getGames(page)
    }, [page])

    const [newGamePopUp, setNewGamePopUp] = useState(false)

    const changePopUp = () => {
        newGamePopUp ? setNewGamePopUp(false) : setNewGamePopUp(true)
    }

    return <div className={style.games}>
        <div className={style.menu}>
            <GameMenu isAuth={isAuth} kinds={kinds} gamesLength={games.length} changePopUp={changePopUp}/>
        </div>
        <div className={style.kinds}>
            <NavLink to={"/"}>
                <Kind name={"ALL"} active={currentKind === 0} kindId={0}/>
            </NavLink>
            {kinds.map(kind => <NavLink to={"/kind/"+kind.id} key={kind.id}>
                <Kind active={currentKind === kind.id} kindId={kind.id}/>
            </NavLink>)}
        </div>
        <div className={style.games}>
            {games.length === 0 && !isFetching ?
                <div className={style.newGame}>
                    <div className={style.newGameButton} onClick={changePopUp}>
                        <div><MdFiberNew size={"7em"}/></div>
                        <div>Create new game</div>
                    </div>
                </div>
                : games.map((game) =>
                <GameContainer key={game.id} game={game} kinds={kinds}/>
                )}
        </div>
        {newGamePopUp && <NewGame changePopUp={changePopUp} kinds={kinds}/>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        currentKind: state.games.currentKind,
        games: state.games.games,
        isAuth: state.auth.isAuth,
        kinds: state.games.kinds,
        isFetching: state.app.isFetching
    }
}

export default compose(connect(mapStateToProps,
    {getGames: getGames, webSocketGames, getKinds}), withRouter)(GamesContainer)