import BaseModule from './base'
import Commands from '../models/command'
import ModulesManager from '../models/module'

export default class AnotherModule extends BaseModule {
    constructor () {
        super()

        this.commands = Commands.rawCommand(this.another, {
            command: 'another',
            description: 'Another module test'
        })
    }

    another (message) {
        console.log('AnotherModule got another command')

        if (ModulesManager.get('TestModule').isEnabledForChannel('xikeon')) {
            console.log('AnotherModule: TestModule is enabled too! Do something specific here')
        }
    }
}
