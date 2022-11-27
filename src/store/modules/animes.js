import servicoApi from '../../services/animes';

export default {
    namespaced: true,
    state: {
        paginaCadastro: false,
    },
    getters: {
        getPaginaCadastro: (state) => state.paginaCadastro,
    },
    mutations: {
        setPaginaCadastro: (state, valor) => {
            state.paginaCadastro = valor;
        }
    },
    actions: {
        async getHora(){
            try{
                let response = await servicoApi.getHora();
                return response.data;
            } catch (error) {
                return "Deu ruim!";
            }
        }
    }
}