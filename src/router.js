import VueRouter from 'vue-router';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

export default new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: Cadastro
        }
    ]
});