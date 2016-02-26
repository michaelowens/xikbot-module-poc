import TestModule from '../modules/test'

export const MODULES = [
    TestModule
]

let ModulesManager = {
    modules: [],

    load (reload = true) {
        this.modules = MODULES.map(module => new module)

        if (reload) {
            this.reload()
        }
    },

    reload () {
        this.modules.forEach(function (module) {
            module.enable()
        })
    }
}

export default ModulesManager
