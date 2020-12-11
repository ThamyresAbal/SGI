<template>
  <div id="app">
    <Header />

    <router-view/>

    <Footer />
  </div>
</template>

<style>
@import './styles/variables.css';
@import './styles/button.css';
@import './styles/form.css';
@import './styles/carousel.css';

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

#app {
  padding-top: 45px;
}

</style>

<script>
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default {
  name: 'App',
  components: { 
    Header,
    Footer,
  },
}
</script>