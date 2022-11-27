<template>
  <div class="main">
    <Alerta/>
    <div class="row d-flex justify-content-around">
      <div class="col mt-0">
        <img id="totoro-img" src="../assets/totoroGuardaChuva.png" alt="totoro" />
      </div>
      <div class="div-form col">
        <form class="form-login mb-5">
          <img id="logo" src="../assets/animesversoLogoHD.png" alt="logo" />
          <h2 class="titulo-login mb-3">Cadastro</h2>
          <div class="mb-3">
            <input v-model="usuario" type="text" class="form-control" id="exampleInputUser" aria-describedby="userHelp"
              placeholder="Usuário" required>
          </div>
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
              placeholder="Email" required>
          </div>
          <div class="mb-3">
            <input v-model="senha" type="password" class="form-control" style="border-top: none" id="exampleInputPassword1" placeholder="Senha" required>
          </div>
          <div class="mb-3">
            <input v-model="senhaConfirmacao" type="password" class="form-control" style="border-top: none" id="exampleInputPassword2" placeholder="Confirme a senha" required>
          </div>
          <button type="submit" class="btn-submit btn btn-primary mb-3" @click="cadastrarUsuario()">Salvar</button>
          <button type="button" class="link-login btn btn-link " @click="retornarLogin()">Voltar para tela de login</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Alerta from '../components/Alerta.vue';

export default {
  name: "Cadastro", 
  data(){
    return{
    }
  },
  components: {
    Alerta
  },
  computed:{
      ...mapGetters("animes", ["getPaginaCadastro"]),
      
  },
  methods:{
      ...mapMutations("animes", ["setPaginaCadastro"]),
      ...mapActions("usuarios", ["postUsuario"]),

      retornarLogin(){
        this.setPaginaCadastro(false);
      },

      async cadastrarUsuario(){
        if(this.usuario && this.email && this.senha && this.senhaConfirmacao){
          let dadosCadastro = {
            usuario: this.usuario,
            email : this.email,
            senha: this.senha
          }
          let usuarioCadastrado = await this.postUsuario(dadosCadastro);

          if(usuarioCadastrado == true){
            setTimeout(() => {this.setPaginaCadastro(false)}, 2000);
        }
        }
      }
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

.link-login{
  color: #30A5BF;
  text-align: start;
  display: block;
}

</style>