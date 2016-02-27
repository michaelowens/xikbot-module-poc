import TestModule from '../modules/test'

export const MODULES = [
    TestModule
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
