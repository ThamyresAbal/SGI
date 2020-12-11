<template>
  <div class="header">
    <div class="header__desktop">
      <HeaderDesktop />
    </div>

    <div class="header__mobile">
      <HeaderMobile />
    </div>
  </div>
</template>

<style scoped>
.header__mobile,.header__desktop {
  display: none;
}

@media screen and (min-width: 800px) {
  .header__desktop {
    display: block;
  }
}

@media screen and (max-width: 800px) {
  .header__mobile {
    display: block;
  }
}
</style>

<script>
  import HeaderDesktop from './components/HeaderDesktop';
  import HeaderMobile from './components/HeaderMobile';

  export default {
    name: 'Header',
    components: {
      HeaderDesktop,
      HeaderMobile,
    }
  }
</script>