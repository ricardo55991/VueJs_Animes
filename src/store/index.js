import { createStore } from 'vuex';
import animes from './modules/animes';
import usuarios from './modules/usuarios';
import gerais from './modules/gerais';


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    animes,
    usuarios,
    gerais
  }
})
