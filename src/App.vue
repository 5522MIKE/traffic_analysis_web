<!-- 展示模板 -->
<template>
<<<<<<< HEAD
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
=======
    <Main></Main>
>>>>>>> 2f9a9a0ccd7d7024a68848579a9f01970b64c352
</template>
 
<script>
// 导入组件
import Main from './components/Main'
// import Layout from './components/Layout'
export default {
  name: 'app',
  components: {
    Main
  }
}
</script>
<!-- 样式代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b85e4;
  margin-top: 60px;
}
</style>