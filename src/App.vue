<template>
  <div id="app">
    <Header />

    <Home />
    <router-view/>
    
    <FooterPage />
  </div>
</template>

<style> 
  @import './styles/variables.css';

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body, #app {
  height: 100vh;
  font-family: var(--default-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

<script>
  import Header from './components/Header.vue';
  import FooterPage from './components/FooterPage.vue';
  import Home from './components/Home.vue';

  export default {
    name: 'App',
    components: { 
      Header,
      FooterPage,
      Home
    },
  }
</script>