<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item navbar__item--larger">
        <router-link tag="a" class="navbar__item__link" to="/">
          Logo
        </router-link>
      </li>

      <li class="navbar__item">
        <button
          class="navbar__item__link"
          v-bind:class="{
            'icon--open': isCollapseOpen,
          }"
          href="#"
          @click="toggleCollapse"
        >
          Programação
          <i
            class="fas fa-chevron-left icon"
          ></i>
        </button>
      </li>

      <li class="navbar__item">
        <a class="navbar__item__link" href="#">
          Sobre
        </a>
      </li>

      <li class="navbar__item">
        <a class="navbar__item__link" href="#">
          Contato
        </a>
      </li>

      <li class="navbar__item">
        <router-link class="navbar__item__link" to="/login">
          Login
        </router-link>
      </li>

      <li class="navbar__item navbar__item--larger">
        <router-link class="navbar__item__link" to="/cadastro">
          Registrar
        </router-link>
      </li>
    </ul>

    <div
      class="dropdown"
      v-bind:class="{
        'dropdown--open': isCollapseOpen,
      }"
    >
      <div class="navbar__list">
        <li class="navbar__item">
          <router-link tag="a" class="navbar__item__link" to="/filmeDetalhe">
            Cinema
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link tag="a" class="navbar__item__link" to="/teatroDetalhe">
            Teatro
          </router-link>
        </li>

        <li class="navbar__item">
          <router-link tag="a" class="navbar__item__link" to="/showDetalhe">
            Shows
          </router-link>
        </li>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    background: #fdfdfd;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
  }

  .icon {
    vertical-align: middle;
    margin-left: 4px;
    transition: transform 0.2s ease-in;
  }

  .icon--open svg {
    transform: rotate(-90deg);
  }

  .navbar__list {
    display: flex;
    list-style: none;
  }

  .navbar__item {
    flex: 1;
  }

  .navbar__item--larger {
    flex: 2;
  }

  .navbar__item__link {
    display: block;
    background: none;
    border: none;
    color: #c0392b;
    font-weight: 600;
    font-size: 14px;
    padding: 12px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .navbar__item__link:focus {
    outline: none;
  }

  .navbar__item__link:hover {
    background: #f5f5f5;
  }

  .dropdown {
    height: 0px;
    overflow: hidden;
    transition: height 0.15s ease-in;
  }

  .dropdown--open {
    height: 46px;
  }
</style>

<script>
export default {
  name: 'HeaderDesktop',
  data: () => ({
    isCollapseOpen: false,
  }),
  methods: {
    toggleCollapse() {
      this.isCollapseOpen = !this.isCollapseOpen;
    },
  }
}
</script>