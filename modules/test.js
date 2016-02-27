import BaseModule from './base'
import Commands from '../models/command'
import Database from '../models/database'

// export con

export default class TestModule extends BaseModule {
    constructor () {
        super()

        this.name = 'TestModule'

        // this.commands = Commands.rawCommand(this.test, {
        //     command: 'test',
        //     description: 'A test command'
        // })

        this.commands = Commands.multiCommand({
            command: 'test',
            commands: {
                'add': {
                    description: 'Test add command',
                    callback: this.test
                },
                'remove': {
                    description: 'Test remove command',
                    callback: this.remove
                }
            }
        })

        this.events = {
            'message': this.onMessage
        }
    }

    async test (message) {
        let data = await Database.client.hgetAsync('commands', message.channel.name)
        console.log(`TestModule got test command, db value: ${data.value}`)
    }

    remove (message) {
        console.log('TestModule got remove command')
    }

    onMessage (message) {
        console.log('TestModule got message!')
    }
}
