import servicoApi from '../../services/anime';

export default {
    namespaced: true,
    state: {
        // teste: "",
    },
    getters: {
        // getTeste: (state) => state.teste
    },
    mutations: {
        // setTeste: (state, teste) => {
        //     state.teste = teste;
        // }
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