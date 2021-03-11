import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vcharts from 'v-charts'
Vue.use(Vcharts)
Vue.config.productionTip = false
Vue.use(Axios)
Vue.prototype.$axios = Axios
Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
