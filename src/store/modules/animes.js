import servicoApi from '../../services/animes';
const root = { root: true };

export default {
    namespaced: true,
    state: {
        paginaCadastro: false,
        animeSelecionado: [],
    },
    getters: {
        getPaginaCadastro: (state) => state.paginaCadastro,
        getAnimeSelecionado: (state) => state.animeSelecionado,
    },
    mutations: {
        setPaginaCadastro: (state, value) => {
            state.paginaCadastro = value;
        },
        setAnimeSelecionado: (state, value) => {
            state.animeSelecionado = value;
        },
    },
    actions: {
        async getHora(){
            try{
                let response = await servicoApi.getHora();
                return response.data;
            } catch (error) {
                return "Deu ruim!";
            }
        },

        async getAnimes({}, idUsuario){
            try{
                let response = await servicoApi.getAnimes(idUsuario);
                return response.data;
            } catch (error) {
                return "Deu ruim!";
            }
        },

        async getAnime({commit}, idAnime){
            try{
                let response = await servicoApi.getAnime(idAnime);
                const dados = response.data;
                commit("animes/setAnimeSelecionado", dados, root);
                return true;
            } catch (error) {
                return "Deu ruim!";
            }
        }
    }
}