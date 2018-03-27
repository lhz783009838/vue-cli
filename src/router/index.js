import Vue from 'vue'
import Router from 'vue-router'
import RouterTest from '@/components/RouterTest'
import VuexTest from '@/components/VuexTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/toRouteTest',
      name: 'routerTest',
      component: RouterTest
    },
    {
      path: '/toVuexTest',
      name: 'vuexTest',
      component: VuexTest
    }
  ]
})
