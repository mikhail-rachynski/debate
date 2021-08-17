import ActionCable from 'actioncable'

const token = localStorage.token
const cable = ActionCable.createConsumer(`wss://api.iot7979.keenetic.pro/cable?token=${token ? token : ""}`)


export const webSocket = {
    subscribe ()
    {
        return cable
    }
}
