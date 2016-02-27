import TestModule from '../modules/test'

export const MODULES = [
    TestModule
]

class ModulesManager {
    constructor () {
        this.modules = []
    }

    load (reload = true) {
        this.modules = MODULES.map(module => new module)

        if (reload) {
            this.reload()
        }
    }

    reload () {
        this.modules.forEach(function (module) {
            module.enable()
        })
    }

    get (moduleName) {
        return this.modules.find(module => module.name === moduleName)
    }
}

export default new ModulesManager
