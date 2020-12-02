<template>
  <nav class="navbar">
    <div class="navbar__item navbar__item--larger">
      <a href="#">
        Logo
      </a>
    </div>

    <div class="navbar__item">
      <a href="#">
        Programação
        <i class="fas fa-chevron-down icon"></i>
      </a>
    </div>

    <div class="navbar__item">
      <a href="#">
        Sobre
      </a>
    </div>

    <div class="navbar__item">
      <a href="#">
        Contato
      </a>
    </div>

    <div class="navbar__item">
      <a href="#">
        Login
      </a>
    </div>

    <div class="navbar__item navbar__item--larger">
      <a href="#">
        Registrar
      </a>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background: #fbfbfb;
    height: 60px;
    width: 100%;
    display: flex;
  }

  .icon {
    vertical-align: middle;
  }

  .navbar__item {
    flex: 1;
    color: #a00;
    flex: 1;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    padding: 12px;
  }

  .navbar__item--larger {
    flex: 2;
  }

  .navbar__item a {
    color: inherit;
    text-decoration: none;
  }

  .navbar__item a:visited {
    color: inherit;
  }
</style>

<script>
export default {
  name: 'Header',
}
</script>