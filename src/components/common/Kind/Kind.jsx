import React, {useEffect, useState} from "react"
import style from "./Kind.module.css"
import {connect} from "react-redux";

const Kind = (props) => {
    const [kindStyle, setKindStyle] = useState(style.kind)
    useEffect(() => {
        props.active
            ? setKindStyle(style.kindActive)
            : setKindStyle(style.kind)
    }, [props.active])

    return <span className={kindStyle}>{props.kind ? props.kind.name.toUpperCase() : props.name}</span>
}

const mapStateToProps = (state, props) => ({
    kind: state.games.kinds.filter(kind => kind.id === props.kindId)[0]})

export default connect(mapStateToProps, null)(Kind)