import servicoApi from '../../services/animes';

export default {
    namespaced: true,
    state: {
        paginaCadastro: false,
    },
    getters: {
        // getTeste: (state) => state.teste
        getPaginaCadastro: (state) => state.paginaCadastro,
    },
    mutations: {
        // setTeste: (state, teste) => {
        //     state.teste = teste;
        // }
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