import React from 'react'
import style from "./withPopUp.module.css"

export const withPopUp = (Component) => {
    return (props) => {
        return <div className={style.popUp}><Component {...props}/></div>
    }
}