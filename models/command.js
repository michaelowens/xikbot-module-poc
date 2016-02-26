import EventManager from './event'

let Commands = {
    rawCommand (callback, options) {
        EventManager.on('command:' + options.command, callback)
    }
}

export default Commands