import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import LayOut from './views/LayOut.vue';

Vue.use(Router)

// 作为Home组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/projectManagement',
  component: LayOut,
  children: [
    { path: 'home', title: '首页', name: 'home_index', component: () => import(/* webpackChunkName: "home" */ './views/Home.vue') }
  ]
}

// 作为Home组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  { path: '/projectManagement',
    name: 'projectManagement',
    component: LayOut,
    redirect: { name: 'projectManagement_index' },
    meta: {
      icon: '',
      title: '检测项目管理'
    },
    children: [
      { path: 'index', title: '检测项目管理', name: 'projectManagement_index', component: () => import(/* webpackChunkName: "ProjectManagement" */ './views/ProjectManagement.vue') }
    ]
  },
  { path: '/voiceEditor',
    name: 'voiceEditor',
    component: LayOut,
    redirect: { name: 'voiceEditor_index' },
    meta: {
      icon: '',
      title: '音频编辑'
    },
    children: [
      { path: 'index', title: '音频编辑', name: 'voiceEditor_index', component: () => import(/* webpackChunkName: "VoiceEdit" */ './views/VoiceEditor.vue') }
    ]
  },
  { path: '/voiceprintManagement',
    name: 'voiceprintManagement',
    component: LayOut,
    redirect: { name: 'voiceprintManagement_index' },
    meta: {
      icon: '',
      title: '声纹管理',
      auth: true
    },
    children: [
      { path: 'index', title: '声纹管理', name: 'voiceprintManagement_index', component: () => import(/* webpackChunkName: "VoiceprintManagement" */ './views/VoiceprintManagement.vue') }
    ]
    
  }
]

export const routers = [
  otherRouter,
  ...appRouter
]

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: routers
};

export const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  // Util.title(to.meta.title, router.app);
  next();
});

router.afterEach((to) => {
  // Util.openNewPage(router.app, to.name, to.params, to.query);
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});