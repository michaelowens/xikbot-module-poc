import BaseModule from './base'
import Command from '../models/command'
import Database from '../models/database'

// export con

export default class TestModule extends BaseModule {
    constructor () {
        super()

        this.commands = Command.rawCommand(this.test, {
            command: 'test',
            description: 'A test command'
        })
        this.events = {
            'message': this.onMessage
        }
    }

    async test (message) {
        let data = await Database.client.hgetAsync('commands', message.channel.name)
        console.log(`TestModule got test command, db value: ${data.value}`)
    }

    onMessage (message) {
        console.log('TestModule got message!')
    }
}