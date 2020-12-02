import axios from 'axios';

const state = {
    filmes: []
};

const getters = {
    todosOsFilmes: state => state.filmes,
};

const actions = {
    getFilmes({ commit }){
        axios.get(
            "http://www.omdbapi.com/?apikey=27ec8e5&i=tt1285016" ,
        ).then((response) => {
            console.log(response.data);
            commit('getListaFilmes', response.data);
        });
    }
}

const mutations = {
    getListaFilmes: (state, data) => (state.filmes = data)
}

export default {
    state,
    getters,
    actions,
    mutations
}