let EventManager = {
    events: {
        'onMessage': [],
        'onSubscription': [],
        'onFollow': []
    },

    addEvent (event, callback) {
        if (!(event in this.events)) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    },

    removeEvent (event, callback) {
        let index = this.events[event].findIndex(cb => cb === callback)
        if (index > -1) {
            this.events[event].splice(index, 0)
        }
    },

    emit (event, data) {
        this.events[event].forEach(e => e && e(data))
    }
}

export default EventManager
