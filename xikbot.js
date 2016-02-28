import ModulesManager from './models/module'
import Chat from './models/chat'

ModulesManager.load()
console.log('---- ENABLED MODULE')

// Pretend to receive a message and emit the event
Chat.handleMessage('This is a test message')
Chat.handleMessage('!test add 1')
Chat.handleMessage('!another one')

ModulesManager.get('TestModule').disable()

setTimeout(() => {
    console.log('---- DISABLED MODULE')
    Chat.handleMessage('This is a test message')
    Chat.handleMessage('!test add 1')

    ModulesManager.get('TestModule').enable()

    console.log('---- ENABLED MODULE')
    Chat.handleMessage('This is a test message')
    Chat.handleMessage('!test remove 1')
}, 1000)
