import React from "react"
import style from "./Message.module.css";

export const Message = ({item}) => {
    let time = () => {
        let date = new Date(item.created_at*1000)
        let day = date.getDate()
        let month = (date.getMonth()+1)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let checkDigits = (digit) => digit < 10 ? "0" + digit : digit
        return checkDigits(hours) + ":" + checkDigits(minutes) + ", " + checkDigits(day) + "." + checkDigits(month)
    }
    return <div className={item.read ? style.message : style.read}>
        <div className={style.text}>{item.text}</div>
        <div className={style.time}>{time()}</div>

    </div>
}
