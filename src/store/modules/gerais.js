export default {
    namespaced: true,
    state: {
        alerta: {
            cor: "",
            corBackground: "",
            ativo: false,
            texto: ""
        }
    },
    getters: {
        getAlerta: state => state.alerta
    },
    mutations: {
        setAlerta: (state, alerta) => {
            state.alerta = alerta;
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