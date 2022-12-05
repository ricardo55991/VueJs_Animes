<template>
    <div>
      <Navbar/>
      <cardAnime :listaAnimes="this.listaAnimes" class="mt-5"/>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import Navbar from '@/components/Navbar.vue';
  import cardAnime from '@/components/cardAnime.vue';
  
  export default {
    name: "Favoritos",
    components:{
      Navbar,
      cardAnime,
    },
    data(){
      return{
        listaAnimes: [],
      }
    },
    computed:{
        ...mapGetters("usuarios", ["getDadosUsuario"])
    },
    methods:{
          ...mapActions("favoritos", ["getFavoritos"]),
    },
    async created(){
        if(this.getDadosUsuario){
            this.listaAnimes = await this.getFavoritos(this.getDadosUsuario.id_usuario);
        }
    }
  }
  </script>
  
  <style>
  
  </style>