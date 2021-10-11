import ActionCable from 'actioncable'

const token = localStorage.token
const cable = ActionCable.createConsumer(`wss://api.kosma.keenetic.link/cable?token=${token ? token : ""}`)

export const webSocket = {
    subscribe ()
    {
        return cable
    }
}
