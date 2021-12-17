import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from "./routers";

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
