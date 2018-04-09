// https://blog.csdn.net/teckeryu/article/details/54915207
const test = {
  state: {
    // 放置公用状态
    count: 0
  },
  getters: {
    changeState: state => {
      // 相当于 vue 实例中的 methods,用于处理公用的 data
      // 自 vuex 面向组件的数据处理
    }
  },
  mutations: {
    // 写法与 getters 相类似
    // 组件想要对于 vuex 中的数据进行的处理
    // 组件中采用 this.$store.commit('方法名')的方式调用，充分实现解耦
    // 内部操作必须在此刻完成（同步）
    // 例如 increment 方法： this.$store.commit(increment);
    increment (state) {
      state.count++
    }
  },
  actions: {
    // 使得mutations能够实现异步调用，实现例如延迟调用
    increment ({commit}, payload) {
      commit('突变方法名')
      // payload 应该是一个对象，可通过模板方法调用传入对象的方式将数据从组件传入vuex
    }
  }

}

export default test
