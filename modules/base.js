import EventManager from '../models/event'

export default class BaseModule {
    constructor () {
        this.enabled = false
        this.commands = null
        this.events = {}
    }

    isEnabled() {

    }

    isEnabledForChannel(channel) {
        return true
    }

    enable () {
        for (var event in this.events) {
            EventManager.on(event, this.events[event])
        }

        if (this.commands) {
            this.commands.enable()
        }

        this.enabled = true
    }

    disable () {
        for (var event in this.events) {
            EventManager.removeListener(event, this.events[event])
        }

        if (this.commands) {
            this.commands.disable()
        }

        this.enabled = false
    }
}
