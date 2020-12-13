import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from './components/Cadastro.vue'
import Login from './components/Login.vue';
import Catalogs from './components/Catalogs/Catalogs.vue';
import Pagamento from './components/Pagamento.vue';
import FilmeDetalhe from './components/FilmeDetalhe';
import TeatroDetalhe from './components/TeatroDetalhe';
import ShowDetalhe from './components/ShowDetalhe';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalogs',
    component: Catalogs,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pagamento',
    name: 'Pagamento',
    component: Pagamento,
  },
  {
    path: '/filmeDetalhe',
    name: 'FilmeDetalhe',
    component: FilmeDetalhe,
  },
  {
    path: '/teatroDetalhe',
    name: 'TeatroDetalhe',
    component: TeatroDetalhe,
  },
  {
    path: '/showDetalhe',
    name: 'ShowDetalhe',
    component: ShowDetalhe,
  },
  {
    path: '*',
    redirect: '/catalogs',
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routes,
})
