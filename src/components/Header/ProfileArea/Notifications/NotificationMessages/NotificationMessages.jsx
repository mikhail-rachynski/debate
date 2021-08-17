import React from "react"
import style from "./NotificationMessages.module.css";
import {Message} from "./Message/Message";
import CircleLoader from "../../../../common/CircleLoader/CircleLoader";

export const NotificationMessages = ({messages, requestNotifications, allMessagesCount}) => {
    const onScrollNotifications = (e) => {
        if (e.target.scrollTop + e.target.offsetHeight === e.target.scrollHeight) {
            requestNotifications("add_notifications", messages.length)
        }
    }
    return <div className={style.dropdown} >
        <div id="myDropdown" className={style.dropdownContent} onScroll={event => onScrollNotifications(event)}>
            {messages.length > 0
                ? <div>
                    {messages.map(item =>
                        <Message item={item} key={item.id}/>)}
                </div>
                : <>{allMessagesCount === 0 ? "No notifications" : <div><CircleLoader/></div>}</>}

        </div>
    </div>
}