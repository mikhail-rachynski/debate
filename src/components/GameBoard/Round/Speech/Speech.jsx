import React from "react";
import style from "./Speech.module.css"

const Speech = (props) => {
    return <div className={style.message}>{props.msg}</div>
}

export default Speech