<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse m-1" id="navbarSupportedContent">
        <div class="d-inline-flex flex-row" v-if="!this.getNavbarSemBarraPesquisa">
          <div>
            <button type="button" class="botoes-navbar btn" data-bs-toggle="dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill=" white" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><hr class="dropdown-divider"></li>
            </ul>
          </div>
          <div id="box-form">
            <form class="d-flex">
              <input v-model="nomeAnime" class="input-anime form-control me-2 col-1" type="search" placeholder="Buscar anime" aria-label="Search">
              <button @click="buscarAnime()" type="button" class="botoes-navbar btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill=" white" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src="../assets/animeVersoTextoBranco.jpeg" class="logo-texto img-fluid" alt="..."/>
        </div>
        <div class="box-icones">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button @click="abrirHome()" type="button" class="botoes-navbar btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill=" white" class="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
              </button>
            </li>
            <li class="nav-item">
              <button @click="abrirPerfil()" type="button" class="botoes-navbar btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill=" white" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                </svg>
              </button>
            </li>
            <li class="nav-item">
              <button @click="abrirFavoritos()" type="button" class="botoes-navbar btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill=" white" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </button>
            </li>
            <li class="nav-item">
              <button @click="sair()" type="button" class="botoes-navbar btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill=" white" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: "Navbar",
  data(){
    return{

    }
  },
  methods: {
    ...mapMutations("gerais", ["setNavbarSemBarraPesquisa"]),
    ...mapMutations("animes", ["setNomeAnime"]),
    
    abrirPerfil(){
      this.$router.push({ path: '/perfil' });
      this.setNavbarSemBarraPesquisa(true);
    },
    abrirHome(){
      this.$router.push({ path: '/home' });
      this.setNavbarSemBarraPesquisa(false);
    },
    abrirFavoritos(){
      this.$router.push({ path: '/favoritos' });
      this.setNavbarSemBarraPesquisa(true);
    },
    sair(){
      this.$router.push({ path: '/login' });
      this.setNavbarSemBarraPesquisa(false);
    },

    buscarAnime(){
      this.setNomeAnime(this.nomeAnime);
    }
  },

  computed:{
    ...mapGetters("gerais", ["getNavbarSemBarraPesquisa"])
  }

}
</script>

<style scoped>
.navbar{
  background-color: #30A5BF !important;
}

#navbarSupportedContent{
  padding-inline: 15px;
  justify-content: space-between;
}

.input-anime, .input-anime:focus{
  background-color: #D9D9D9;
  border-color: none;
  box-shadow: none;
  height: 35px;
  margin-top: 2px;
}

#box-form{
  margin-left: 55px;
}

.logo-texto{
  height: 42px;
}

.botoes-navbar:hover, .botoes-navbar:focus{
  border-color: white;
}

</style>