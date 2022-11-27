import servicoApi from '../../services/usuarios';
const root = { root: true };

export default {
    namespaced: true,
    state: {
        dadosUsuario: Object
    },
    getters: {
        getDadosUsuario: (state) => state.dadosUsuario,
    },
    mutations: {
        setDadosUsuario: (state, dados) => {
            state.dadosUsuario = dados;
        }
    },
    actions: {
        async getUsuario({commit, dispatch}, login){
            try{
                let response = await servicoApi.getUsuario(login);
                const dados = response.data;
                if(dados.indErro){
                    dispatch("gerais/alertaErro", dados.descricao, root);
                }
                else{
                    dispatch("gerais/alertaSucesso", dados.descricao, root);
                    dispatch("gerais/setDadosUsuario", dados.descricao, root);
                }
            } 
            catch (error) {
                dispatch("gerais/alertaErro", "Erro ao logar.", root);
            }
            finally {
                setTimeout(() => {commit("gerais/setAlerta", {status: 1,ativo: false,texto: ""}, root)}, 3000)
            }
        }
    }
}