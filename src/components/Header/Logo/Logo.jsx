import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Logo.module.css"
import logo from "../../../assets/images/logo.svg";
import caption from "../../../assets/images/caption.svg";

const Logo = () => {
    return  <NavLink to="/"><div><img src={logo} className={style.logo} alt='home'/></div>
        <div><img src={caption} className={style.caption} alt='home'/></div></NavLink>

}

export default Logo