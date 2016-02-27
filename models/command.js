import EventManager from './event'

class Commands {
    rawCommand (callback, options) {
        return new Command(options, callback)
    }

    multiCommand (options) {
        return new MultiCommand(options)
    }
}

export class Command {
    constructor (options, callback) {
        this.options = options
        this.callback = callback
    }

    enable () {
        EventManager.on('command:' + this.options.command, this.callback)
    }

    disable () {
        EventManager.removeListener('command:' + this.options.command, this.callback)
    }
}

export class MultiCommand {
    constructor (options) {
        this.options = options
        this.handler = this.handleCommand.bind(this)
    }

    handleCommand (data) {
        if (data.params[0]) {
            let subcommand = data.params[0]

            if (subcommand in this.options.commands) {
                this.options.commands[subcommand].callback(data)
            }
        }
    }

    enable () {
        EventManager.on('command:' + this.options.command, this.handler)
    }

    disable () {
        EventManager.removeListener('command:' + this.options.command, this.handler)
    }
}

export default new Commands
