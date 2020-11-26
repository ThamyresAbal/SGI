<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  export default {
    name: 'App',
    components: {
      Login,
    }
  }
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body, #app {
  width: 100vw;
  height: 100vh;
  font-family: "Open Sans";
  text-align: center;
}

</style>
