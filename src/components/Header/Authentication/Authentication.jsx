import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Authentication.module.css"
import Preloader from "../../common/Preloader/Preloader";

const Authentication = ({isFetching}) => {
    return <div>{isFetching
        ? <Preloader />
        : <div className={style.loginMenu}><NavLink to="/signup" >Registration</NavLink>
            <NavLink to="/login" >login</NavLink></div>}</div>
}

export default Authentication