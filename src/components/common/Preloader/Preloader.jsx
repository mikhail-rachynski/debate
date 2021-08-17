import React from 'react'
import style from "./Preloader.module.css";
import {withPopUp} from "../../../hoc/PopUp/withPopUp";

let Preloader = () => {
    return <div className={style.loader}>Loading...</div>
}

export default withPopUp(Preloader)