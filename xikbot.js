import ModulesManager from './models/module'
import EventManager from './models/event'

ModulesManager.load()

// Pretend to receive a message and emit the event
EventManager.emit('message', {
    message: 'This is a test message',
    channel: {
        name: 'xikeon'
    }
})

EventManager.emit('command:test', {
    message: '!test my params',
    params: ['my', 'params'],
    channel: {
        name: 'xikeon'
    }
})