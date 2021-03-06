import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'

//Plugins
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data: {},
  mounted () {
    this.$store.commit('updateMenulist');
  }
}).$mount('#app')
