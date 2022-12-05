import servicoApi from '../../services/favoritos';

export default {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async getFavoritos({commit, dispatch}, idUsuario){
            try{
                let response = await servicoApi.getFavoritos(idUsuario);
                return response.data;
            } catch (error) {
                return "Deu ruim!";
            }
        },

        async postFavorito({commit, dispatch}, dados){
            try{
                let response = await servicoApi.postFavorito(dados);
                return response.data;
            } catch (error) {
                return "Deu ruim!";
            }
        },

        async deleteFavorito({commit, dispatch}, dados){
            try{
                let response = await servicoApi.deleteFavorito(dados);
                return response.data;
            } catch (error) {
                return "Deu ruim!";
            }
        }
    }
}