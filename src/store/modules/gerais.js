export default {
    namespaced: true,
    state: {
        alerta: {
            cor: "",
            corBackground: "",
            ativo: false,
            texto: ""
        },
        navbarSemBarraPesquisa: false,
    },
    getters: {
        getAlerta: state => state.alerta,
        getNavbarSemBarraPesquisa: state => state.navbarSemBarraPesquisa,
    },
    mutations: {
        setAlerta: (state, alerta) => {
            state.alerta = alerta;
        },
        setNavbarSemBarraPesquisa: (state, value) => {
            state.navbarSemBarraPesquisa = value;
        } 
        
    },
    actions: {
        alertaSucesso({ commit }, texto){
            commit("setAlerta", {
                //icone
                status: 1, // Sucesso
                ativo: true,
                texto: texto
            })
        },

        alertaErro({ commit }, texto){
            commit("setAlerta", {
                //icone
                status: 2, // Erro
                ativo: true,
                texto: texto
            })
        },
    }
}