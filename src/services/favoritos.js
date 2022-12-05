import api from './api';

export default {
    getFavoritos: async (idUsuario) => {
        let barramento = 'favoritos/favoritos';
        return await api.get(barramento, {
            params: {
              id_usuario: idUsuario,
            }
        });
    },

    postFavorito: async (dados) => {
        let barramento = 'favoritos/favorito';
        return await api.post(barramento, {
            id_usuario: dados.idUsuario,
            id_anime: dados.idAnime
            });
    },

    deleteFavorito: async (dados) => {
        let barramento = 'favoritos/favorito';
        return await api.delete(barramento, { data:{
            id_usuario: dados.idUsuario,
            id_anime: dados.idAnime
        }});
    },
}