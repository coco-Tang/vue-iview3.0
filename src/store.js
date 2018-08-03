import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [],
    pageOpenedList: [{
      title: '首页',
      path: '',
      name: 'home_index'
    }],
  },
  mutations: {
    updateMenulist (state) {
      let menuList = [];
      router.forEach((item) => {
        
      })
    }
  },
  actions: {

  }
})
