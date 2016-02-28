import chai from 'chai'
import spies from 'chai-spies'
import TestModule from '../modules/test'
import EventManager from '../models/event'
import Chat from '../models/chat'

let expect = chai.expect

chai.use(spies)

describe('TestModule', () => {
    let module

    beforeEach(() => {
        if (module) {
            module.disable()
        }

        TestModule.prototype.test = chai.spy(TestModule.prototype.test)
        TestModule.prototype.remove = chai.spy(TestModule.prototype.remove)
        TestModule.prototype.onMessage = chai.spy(TestModule.prototype.onMessage)
        module = new TestModule
    })

    it('should start disabled', () => {
        expect(module.enabled).to.be.false
        expect(EventManager.listenerCount('message')).to.equal(0)
        expect(EventManager.listenerCount('command:test')).to.equal(0)
    })

    it('should bind events after enabling', () => {
        module.enable()
        expect(module.enabled).to.be.true
        expect(EventManager.listenerCount('message')).to.equal(1)
        expect(EventManager.listenerCount('command:test')).to.equal(1)
    })

    it('should pick up on messages', () => {
        module.enable()

        expect(module.onMessage).to.not.have.been.called()
        Chat.handleMessage('any message')
        expect(module.onMessage).to.have.been.called.once()
    })

    it('should pick up on commands', () => {
        module.enable()

        expect(module.onMessage).to.not.have.been.called()
        expect(module.remove).to.not.have.been.called()
        expect(module.test).to.not.have.been.called()

        Chat.handleMessage('!test add 1')
        expect(module.remove).to.not.have.been.called.once()
        expect(module.onMessage).to.have.been.called.once()
        expect(module.test).to.have.been.called.once()

        Chat.handleMessage('!test remove 1')
        expect(module.remove).to.have.been.called.once()
        expect(module.onMessage).to.have.been.called.exactly(2)
        expect(module.test).to.have.been.called.once()
    })
})
