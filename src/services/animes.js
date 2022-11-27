import api from './api';

export default {
    getHora: async () => {
        let barramento = 'animes/hora';
        return await api.get(barramento);
    },
}