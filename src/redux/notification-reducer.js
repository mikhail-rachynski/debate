import {webSocket} from "../api/ws";

const SET_UNREAD_MESSAGES_COUNT = 'SET_UNREAD_MESSAGES_COUNT'
const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE'
const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES'
const ADD_MESSAGES_TO_LIST = 'ADD_MESSAGES'

let initialState = {
    messages: [],
    allMessagesCount: null,
    unreadMessagesCount: 0
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_MESSAGES:
            return {
                ...state,
                messages: action.messages,
                allMessagesCount: action.allMessagesCount
            }
        case ADD_MESSAGES_TO_LIST:
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        case SET_UNREAD_MESSAGES_COUNT:
            return {
                ...state,
                unreadMessagesCount: action.count
            }
        case SET_NEW_MESSAGE:
            return {
                ...state,
                messages: [action.message, ...state.messages],
                unreadMessagesCount: action.count
            }
        default:
            return state
    }
}

export const setUnreadMessagesCount = (count) => ({type: SET_UNREAD_MESSAGES_COUNT, count})
export const setNewMessage = (count, message) => ({type: SET_NEW_MESSAGE, count, message})
export const setAllMessages = (messages, allMessagesCount) => ({type: SET_ALL_MESSAGES, messages, allMessagesCount})
export const addMessagesToList = (messages) => ({type: ADD_MESSAGES_TO_LIST, messages})


export const subscribeToNotifications = () => (dispatch) => {
    const cable = webSocket.subscribe()
    cable.subscriptions.create("NotificationsChannel", {
        received(data) {
            switch (data.action) {
                case "set_all_messages": {
                    dispatch(setAllMessages(data.messages, data.allMessagesCount))
                    break
                }
                case "set_new_message": {
                    dispatch(setNewMessage(data.count, data.message))
                    break
                }
                case "unread_messages": {
                    dispatch(setUnreadMessagesCount(data.count))
                    break
                }
                case "add_new_notifications_to_list": {
                    dispatch(addMessagesToList(data.messages))
                    break
                }
            }
        }
    })
}

export const requestNotifications = (action, count=0) => (dispatch) => {
    const cable = webSocket.subscribe()
    let channel = cable.subscriptions.subscriptions.filter(item =>
        JSON.parse(item.identifier).channel === "NotificationsChannel")[0]
    channel.send({action: action, count: count})
    action === "read_notifications" && dispatch(setAllMessages([]))
}

export default notificationReducer