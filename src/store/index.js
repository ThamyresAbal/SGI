import Vuex from 'vuex';
import Vue from 'vue';
import filmes from './modules/filmes'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        filmes
    }
})