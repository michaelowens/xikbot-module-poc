import EventManager from './event'

class TMI {

}

class Chat {
    constructor () {
        this.client = null
    }

    connect () {
        this.client = new TMI
    }

    handleMessage (message) {
        let params = message.split(' '),
            command = null,
            data = {}

        if (params[0] && params[0].startsWith('!')) {
            command = params.shift().substr(1)
        }

        data = {
            command: command,
            message: message,
            params: params,
            channel: {
                name: 'xikeon'
            }
        }

        EventManager.emit('message', data)

        if (command) {
            EventManager.emit(`command:${command}`, data)
        }
    }
}

export default new Chat
