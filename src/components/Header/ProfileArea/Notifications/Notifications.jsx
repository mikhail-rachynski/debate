import React from "react"
import {IoNotificationsOutline} from "react-icons/io5";
import style from "./Notifications.module.css";

export const Notifications = ({count}) => {
    return <div><IoNotificationsOutline />
        <span className={count > 0 ? style.newMessage: style.count}>{count}</span>
    </div>
}