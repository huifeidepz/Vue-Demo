import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import './plugins/element.js'
import Vcharts from 'v-charts'
import route from "./route/route";
import VueWordCloud from 'vuewordcloud';
Vue.component(VueWordCloud)
Vue.use(Vcharts)
Vue.use(Axios)
Vue.prototype.$axios = Axios
Vue.config.productionTip = false


new Vue({
  render: h => h(App),route
}).$mount('#app')
