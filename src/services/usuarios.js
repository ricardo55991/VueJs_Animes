import api from './api';

export default {
    getUsuario: async (login) => {
        let barramento = 'usuarios/login';
        return await api.get(barramento, {
            params: {
              usuario: login.usuario,
              senha: login.senha
            }
        });
    },

    postUsuario: async (dadosCadastro) => {
        let barramento = 'usuarios/cadastro';
        return await api.post(barramento, {
            usuario: dadosCadastro.usuario,
            email: dadosCadastro.email,
            senha: dadosCadastro.senha
            });
    },
}