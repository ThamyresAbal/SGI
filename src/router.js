import VueRouter from 'vue-router';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';

export default new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: Cadastro
        },

    ]
});