<template>
  <div id="app">
    <div id="content"></div>
    <router-link to="/toRouteTest">跳到路由测试</router-link>
    <router-link to="/toVuexTest">Vuex测试</router-link>
    <router-view id="iframe"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#content {
  width: 80%;
  height: 80%;
  background-color: aliceblue;
}
#iframe {
  width: 80%;
  height: 80%;
  background-color: aliceblue;
}
</style>
