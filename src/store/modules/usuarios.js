import servicoApi from '../../services/usuarios';
const root = { root: true };

export default {
    namespaced: true,
    state: {
        dadosUsuario: null
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
                    commit("usuarios/setDadosUsuario", dados.dados, root);
                    return true;
                }
            } 
            catch (error) {
                dispatch("gerais/alertaErro", "Erro ao logar.", root);
            }
            finally {
                setTimeout(() => {commit("gerais/setAlerta", {status: 1, ativo: false, texto: ""}, root)}, 3000)
            }
        },

        async postUsuario({commit, dispatch}, dadosCadastro){
                try{
                    let response = await servicoApi.postUsuario(dadosCadastro);
                    const dados = response.data;
                    if(dados.indErro){
                        dispatch("gerais/alertaErro", dados.descricao, root);
                    }
                    else{
                        dispatch("gerais/alertaSucesso", dados.descricao, root);
                        return true;
                    }
                } 
                catch (error) {
                    dispatch("gerais/alertaErro", "Erro ao realizar o cadastro.", root);
                }
                finally {
                    setTimeout(() => {commit("gerais/setAlerta", {status: 1, ativo: false, texto: ""}, root)}, 3000)
                }
            },

            async putUsuario({commit, dispatch}, dadosUsuario){
                try{
                    let response = await servicoApi.putUsuario(dadosUsuario);
                    const dados = response.data;
                    if(dados.indErro){
                        dispatch("gerais/alertaErro", dados.descricao, root);
                    }
                    else{
                        dispatch("gerais/alertaSucesso", dados.descricao, root);
                        return true;
                    }
                } 
                catch (error) {
                    dispatch("gerais/alertaErro", "Erro ao atualizar o cadastro.", root);
                }
                finally {
                    setTimeout(() => {commit("gerais/setAlerta", {status: 1, ativo: false, texto: ""}, root)}, 3000)
                }
            },
        },
}
