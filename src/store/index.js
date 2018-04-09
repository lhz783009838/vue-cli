/** vuex 详情访问 https://vuex.vuejs.org/zh-cn */

import Vue from 'vue'
import Vuex from 'vuex'
import vueTest from './modules/test'

/** 全局应用 vuex */
Vue.use(Vuex)

/**
 * 创建 store
 * 使用 vuex 的模块化功能，将不同的功能的 store 分割成 modules ，便于后期状态过多时导致复杂和难于维护
 * Modules 简介请访问 https://vuex.vuejs.org/zh-cn/modules.html
 * @type {Store}
 */
const store = new Vuex.Store({
  modules: {
    vueTest
  }
})

export default store
