import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import './assets/reset.css'
import './assets/iconfont.css'

import router from './router'

// import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(less)
// Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
