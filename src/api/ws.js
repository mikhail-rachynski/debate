import ActionCable from 'actioncable'

const cable = ActionCable.createConsumer('wss://api.iot7979.keenetic.pro/cable')
// const cable = ActionCable.createConsumer('wss://localhost:5000/cable')

export const webSocket = {
    subscribe ()
    {
        return cable
    }
}
