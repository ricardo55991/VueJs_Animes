<template>
  <div class="main" v-if="!this.getPaginaCadastro">
    <Alerta/>
    <div class="row d-flex justify-content-around">
      <div class="col mt-0">
        <img id="totoro-img" src="../assets/totoroGuardaChuva.png" alt="totoro" />
      </div>
      <div class="div-form col">
        <form class="form-login">
          <img id="logo" src="../assets/animesversoLogoHD.png" alt="logo" />
          <h2 class="titulo-login mb-3">Entrar</h2>
          <div class="mb-3">
            <input v-model="usuario" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Usuário ou email">
          </div>
          <div class="mb-3">
            <input v-model="senha" type="password" class="form-control" style="border-top: none" id="exampleInputPassword1" placeholder="Senha">
          </div>
          <button type="submit" class="btn-submit btn btn-primary mb-3" @click="validarLogin(usuario, senha)">Entrar</button>
          <button type="button" class="link-cadastro btn btn-link" @click="paginaCadastro()">Cadastre-se</button>
        </form>
      </div>
    </div>
  </div>
  <div v-else>
    <Cadastro/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Cadastro from './Cadastro.vue';
import Alerta from '../components/Alerta.vue';

export default {
  name: "Login",
  data(){
    return{
    }
  },
  components:{
    Cadastro,
    Alerta
  },

  methods: {
    ...mapMutations("animes", ["setPaginaCadastro"]),
    ...mapActions("usuarios", ["getUsuario"]),

    paginaCadastro(){
      this.setPaginaCadastro(true);
    },

    async validarLogin(usuario, senha){
      const login = {
        usuario: usuario,
        senha: senha
      }
      await this.getUsuario(login);
    }
  },

  computed:{
    ...mapGetters("animes", ["getPaginaCadastro"])
  },

  created(){
    
  }
}

</script>

<style scoped>
.main{
  height: 100%;
  width: 100%;
}

.main .row .col #totoro-img{
  height: 100%;
  width: 100%;
  max-height: 1080px;
  max-width: 878px;
}

#logo{
  width: 420px; 
  margin-bottom: 25px; 
}

.form-control{
  background-color: #D9D9D9 !important;
  padding-left: 23px !important;
  height: 75px;
}

.form-login{
  margin-top: 25%;
  margin-right: 15%;
}

.titulo-login{
  text-align: start;
  color: #30A5BF;
  font-family: fantasy;
  /* text-shadow: 1px -4px 40px #F2E205 !important; */
}

.btn-submit{
  width: 100%;
  height: 60px;
  background-color: #30A5BF;
  border-color: #30A5BF;
  font-family: fantasy;
  letter-spacing: 1px;
  color: #F2E3D5;
  font-size: 20px;
}

.btn-submit:hover {
  background-color: transparent;
  border-color: #30A5BF;
  color: #30A5BF;
}

/* .btn-submit:active, .btn-submit:focus{
  text-shadow: 0 0 1em #012E40 !important;
  box-shadow: 0 0 2em #F2E205 !important;
  background-color: #F2E205;
  border-color: #F2E205;
} */

.link-cadastro{
  color: #30A5BF;
  text-align: start;
  display: block;
}

/* Animações */
/* @keyframes raios {
  0%{
    -webkit-filter: drop-shadow(0 0 1em #f2e20542);
    filter: drop-shadow(0 0 1em #f2e20580);
  }
  20%{
    -webkit-filter: drop-shadow(0 0 2em #f2e20542);
    filter: drop-shadow(0 0 2em #f2e20580);
  }
  40%{
    -webkit-filter: drop-shadow(0 0 3em #f2e20542);
    filter: drop-shadow(0 0 3em #f2e20580);
  }
  60%{
    -webkit-filter: drop-shadow(0 0 3em #f2e20542);
    filter: drop-shadow(0 0 3em #f2e20580);
  }
  80%{
    -webkit-filter: drop-shadow(0 0 2em #f2e20542);
    filter: drop-shadow(0 0 2em #f2e20580);
  }
  100%{
    -webkit-filter: drop-shadow(0 0 1em #f2e20542);
    filter: drop-shadow(0 0 1em #f2e20580);
  }
} */


/* Responsividade */
/* @media (min-height: 1081px) and ()
{
  .main
   {
    height: 1440px;
   }
} */

</style>