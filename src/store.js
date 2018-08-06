import Vue from 'vue'
import Vuex from 'vuex'
import { appRouter } from './router'

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
      appRouter.forEach((item) => {
        menuList.push(item);
      })
      // console.log('menuList',menuList)
      state.menuList = menuList;
    }
  },
  actions: {

  }
})
