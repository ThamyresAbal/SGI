<template>
  <div class="header-mobile">
    <div class="navbar">
      <button
        @click="toggleSidebar"
        class="navbar__toggler"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <aside
      class="sidebar"
      v-bind:class="{
        'sidebar--open': isOpen,
        'sidebar--closed': !isOpen,
      }"
    >
      <nav class="navigation">
        <button
          @click="toggleSidebar"
          class="navigation__close"
        >
          <i class="fas fa-times"></i>
        </button>

        <ul class="navigation__list">
          <li class="navigation__item navbar__item--larger">
            <a class="navigation__item__link" to="/">
              Logo
            </a>
          </li>

          <li
            class="navigation__item"
            v-bind:class="{
              'navigation__item--open': isCollapseOpen,
              'navigation__item--closed': !isCollapseOpen,
            }"
          >
            <button
              class="navigation__item__link"
              @click="toggleInnerCollapse"
            >
              Programação
              <i class="fas fa-chevron-left icon"></i>
            </button>

            <div class="collapse">
              <div class="collase__content">
                <router-link to="/filmeDetalhe" class="navigation__item__link">
                  Cinema
                </router-link>

                <router-link to="/teatroDetalhe" class="navigation__item__link">
                  Teatro
                </router-link>

                <router-link to="/showDetalhe" class="navigation__item__link">
                  Shows
                </router-link>
              </div>
            </div>
          </li>

          <li class="navigation__item">
            <a class="navigation__item__link" href="#">
              Sobre
            </a>
          </li>

          <li class="navigation__item">
            <a class="navigation__item__link" href="#">
              Contato
            </a>
          </li>

          <li class="navigation__item">
            <router-link class="navigation__item__link" to="/login">
              Login
            </router-link>
          </li>

          <li class="navigation__item navigation__item--larger">
            <router-link tag="a" class="navigation__item__link" to="/cadastro">
              Registrar
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="lightbox"></div>
  </div>
</template>

<style scoped>
  .navbar {
    position: fixed;
    z-index: 2;
    right: 0;
    top: 0;
    background: var(--primary-color);
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #00000011;
  }

  .navbar__toggler,
  .navigation__close
  {
    padding: 12px;
    font-size: 22px;
    border: none;
    background: none;
    color: #fff;
  }

  .navbar__toggler:focus,
  .navigation__close:focus
  {
    outline: none;
  }

  .lightbox {
    display: none;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 50%);
  }

  .sidebar {
    position: fixed;
    height: 100vh;
    width: 300px;
    z-index: 3;
    transition: right 0.15s ease-in;
    background: var(--primary-color);
  }

  .sidebar--open {
    top: 0;
    right: 0;
  }

  .sidebar--open ~ .lightbox {
    display: block;
  }

  .sidebar--closed {
    right: -300px;
  }

  .navigation {
    padding: 48px 24px;
  }

  .navigation__close {
    position: absolute;
    right: 4px;
    top: 4px;
  }

  .navigation__list {
    list-style: none;
  }

  .navigation__item {
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .navigation__item:last-child {
    margin-bottom: 0px;
  }

  .navigation__item__link {
    display: block;
    background: none;
    border: none;
    text-align: left;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    padding: 12px;
    text-decoration: none;
  }

  .navigation__item__link:focus {
    outline: none;
  }

  .navigation__item button svg {
    margin-left: 4px;
    transition: transform 0.2s ease-in;
  }

  .navigation__item--open button svg {
    transform: rotate(-90deg);
  }

  .collapse {
    height: 0px;
    overflow: hidden;
    transition: height 0.2s ease-in;
  }

  .collase__content {
    padding-left: 16px;
  }

  .collase__content .navigation__item__link {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .collase__content .navigation__item__link:last-child {
    border-bottom: none;
  }

  .navigation__item--open .collapse {
    height: 135px;
  }
</style>

<script>
export default {
  name: 'HeaderMobile',
  data: () => ({
    isOpen: false,
    isCollapseOpen: false,
  }),
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },

    toggleInnerCollapse() {
      this.isCollapseOpen = !this.isCollapseOpen;
    }
  }
}
</script>