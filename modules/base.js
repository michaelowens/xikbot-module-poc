import EventManager from '../models/event'

export default class BaseModule {
    constructor () {
        this.commands = null
        this.events = {}
    }

    enable () {
        for (var event in this.events) {
            EventManager.on(event, this.events[event])
        }

        if (this.commands) {
            this.commands.enable()
        }
    }

    disable () {
        for (var event in this.events) {
            EventManager.removeListener(event, this.events[event])
        }

        if (this.commands) {
            this.commands.disable()
        }
    }
}
