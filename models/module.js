import TestModule from '../modules/test'
import AnotherModule from '../modules/another'

export const MODULES = [
    TestModule,
    AnotherModule
]

class ModulesManager {
    constructor () {
        this.modules = []
    }

    load () {
        this.modules = MODULES.map(module => new module)

        this.modules.forEach(function (module) {
            module.enable()
        })
    }

    get (moduleName) {
        return this.modules.find(module => module.constructor.name === moduleName)
    }
}

export default new ModulesManager
