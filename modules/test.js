import BaseModule from './base'
import Command from '../models/command'

// export con

export default class TestModule extends BaseModule {
    constructor () {
        super()

        this.commands = Command.rawCommand(this.test, {
            command: 'test',
            description: 'A test command'
        })
        this.events = {
            'onMessage': this.onMessage
        }
    }

    test (message) {
        console.log('TestModule got test command!', message)
    }

    onMessage (message) {
        console.log('TestModule got message!', message)
    }
}