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
}