import api from './api';
var urlBase = process.env.VUE_APP_ANIME;

export default {
    getHora: async () => {
        let barramento = 'anime/hora';
        return await api.get(barramento);
    },
}