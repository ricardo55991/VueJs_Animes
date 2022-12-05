import { createStore } from 'vuex';
import animes from './modules/animes';
import usuarios from './modules/usuarios';
import gerais from './modules/gerais';
import favoritos from './modules/favoritos';


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
    gerais,
    favoritos
  }
})
