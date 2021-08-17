import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import {requestNotifications, subscribeToNotifications} from "../../../../redux/notification-reducer";
import {Notifications} from "./Notifications";
import {NotificationMessages} from "./NotificationMessages/NotificationMessages";
import style from "./Notifications.module.css";

const NotificationsContainer = ({subscribeToNotifications,
                                    requestNotifications,
                                    unreadMessagesCount,
                                    allMessagesCount,
                                    messages}) => {
    let [opened, setOpened] = useState(false)
    let onButtonClick = (e) => {
        e.stopPropagation()
        !opened ? setOpened(true) : setOpened(false)
        if (opened) {
            requestNotifications("read_notifications")
        } else {
            requestNotifications("get_notifications")
        }
    }
    useEffect(() => {
        subscribeToNotifications()
    },[])
    return <div>
        <div onClick={onButtonClick}>
            <Notifications count={unreadMessagesCount}/>
        </div>
        {opened && <div>
            <NotificationMessages messages={messages} allMessagesCount={allMessagesCount} requestNotifications={requestNotifications}/>
            <div className={style.close} onClick={onButtonClick}/>
        </div>}

    </div>
}

const mapStateToProps = (state) => {
    return {
        messages: state.notifications.messages,
        unreadMessagesCount: state.notifications.unreadMessagesCount,
        allMessagesCount: state.notifications.allMessagesCount
    }
}

export default connect(mapStateToProps, {subscribeToNotifications, requestNotifications})(NotificationsContainer)