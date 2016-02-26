import EventManager from './event'

let Commands = {
    rawCommand (callback, options) {
        EventManager.addEvent('onCommand:' + options.command, callback)
    }
}

export default Commands