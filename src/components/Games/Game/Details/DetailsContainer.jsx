import React, {useEffect} from 'react'
import Details from "./Details";
import {connect} from "react-redux";
import {getFullGameData} from "../../../../redux/games-reducer";

const DetailsContainer = ({getFullGameData,
                              game,
                              editMode,
                              editorMode,
                              deleteCurrentGame,
                              changeStateViewDetails}) => {
    useEffect(() => {
        getFullGameData(game.id)
    },[])
    return <div><Details game={game}
                         editMode={editMode}
                         editorMode={editorMode}
                         deleteCurrentGame={deleteCurrentGame}
                         changeStateViewDetails={changeStateViewDetails}/></div>
}

export default connect(null, {getFullGameData})(DetailsContainer)