import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(less)
Vue.use(BootstrapVue)


new Vue({
  render: h => h(App),
}).$mount('#app')
