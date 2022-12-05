<template>
    <div>
      <Navbar/>
      <Alerta/>
      <div class="card w-75 p-5">
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <img src="../assets/ImagemPerfilPadrao.jpg" class="imgPerfil rounded-circle" alt="..." width="200">
                    <h3 class="card-title mt-4">{{ dadosUsuario.login.toUpperCase() }}</h3>
                </div>
                <div class="col-1">
                    <div class="divider d-flex" style="height: 200px;">
                        <div class="vr"></div>
                    </div>
                </div>
                <div v-if="!this.atualizarDados" class="col">
                    <form class="form-perfil mt-5">
                    <div class="form-group row mb-5">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                        <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="dadosUsuario.email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Senha:</label>
                        <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="*********">
                        </div>
                    </div>
                    </form>
                    <button @click="atualizarCadastro()" type="button" class="btn-att-dados btn btn-outline-info mt-5">Atualizar dados</button>
                </div>
                <div v-else class="form-cadastro col mt-5">
                    <form>
                        <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email:</label>
                        <div class="col-sm-10">
                        <input v-model="email" type="email" class="form-control" id="inputEmail" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="form-group row mt-4">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Senha:</label>
                        <div class="col-sm-10">
                        <input v-model="senha" type="password" class="form-control" id="inputPassword" placeholder="Senha" ref="">
                        </div>
                    </div>
                    </form>
                    <div class="botoes">
                        <button @click="atualizar()" type="button" class="btn-att-dados btn btn-outline-info mt-5">Atualizar dados</button>
                        <button @click="cancelar()" type="button" class="btn-att-dados btn btn-outline-info mt-5">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Alerta from '@/components/Alerta.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "Perfil",

    components:{
      Navbar,
      Alerta,
    },

    data(){
      return{
        dadosUsuario: [],
        atualizarDados: false,
      }
    },

    computed:{
        ...mapGetters("usuarios", ["getDadosUsuario"]),
        
    },

    methods: {
        ...mapActions("usuarios", ["putUsuario"]),

        atualizarCadastro(){
            this.atualizarDados = true;
        },

        cancelar(){
            this.atualizarDados = false;
        },

        async atualizar(){
            if(this.email, this.senha){
                let dados = {
                    email: this.email,
                    senha: this.senha,
                    idUsuario: this.dadosUsuario.id_usuario
                }
                await this.putUsuario(dados);
            }
            
        }
    },

    created(){
        this.dadosUsuario = this.getDadosUsuario;
    },
  }
  </script>
  
  <style scoped>
  .card{
    background: rgb(3,72,78);
    background: linear-gradient(90deg, rgba(3,72,78,1) 0%, rgba(9,98,121,1) 35%, rgba(48,165,191,1) 100%);
    box-shadow:  12px 12px #0e657959;
    display: inline-flex;
    margin-top: 5%;
  }

  .card-title{
    color: white;
  }

  .divider{
    color: white;
    height: 250px !important;
  }

  .form-perfil{
    color: white;
  }

  .btn-att-dados{
    display: block;
  }

  .form-cadastro{
    color: white;
  }

  .botoes{
    display: flex;
    justify-content: space-around;
  }
  
  </style>