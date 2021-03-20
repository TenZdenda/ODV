import router from './router'
import store from "./store/store";
import App from './App'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import vuetify from "./plugins/veutify"

require('./bootstrap');

window.Vue = require('vue');

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})

const main = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
