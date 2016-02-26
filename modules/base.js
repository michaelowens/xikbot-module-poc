import EventManager from '../models/event'

export default class BaseModule {
    constructor () {
        this.commands = {}
        this.events = {}
    }

    enable () {
        for (var event in this.events) {
            EventManager.on(event, this.events[event])
        }
    }

    disable () {}
}