import ModulesManager from './models/module'
import EventManager from './models/event'

ModulesManager.load()

// Pretend to receive a message and emit the event
EventManager.emit('onMessage', {
    message: 'This is a test message'
})

EventManager.emit('onCommand:test', {
    message: '!test my params',
    params: ['my', 'params']
})