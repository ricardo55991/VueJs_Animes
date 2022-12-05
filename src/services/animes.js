import api from './api';

export default {
    getHora: async () => {
        let barramento = 'animes/hora';
        return await api.get(barramento);
    },

    getAnimes: async (idUsuario) => {
        let barramento = 'animes/animes';
        return api.get(barramento, {
            params: {
              id_usuario: idUsuario
            }
        });
    },

    getAnime: async (idAnime) => {
        let barramento = 'animes/animeId';
        return api.get(barramento, {
            params: {
              id_anime: idAnime
            }
        });
    },
}