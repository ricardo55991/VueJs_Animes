<template>
  <div>
    <Navbar/>
    <cardAnime v-if="!this.buscando" :listaAnimes="this.listaAnimes" class="mt-5"/>
    <cardAnime v-else :listaAnimes="this.anime" class="mt-5"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import cardAnime from '@/components/cardAnime.vue';

export default {
  name: "Home",
  components:{
    Navbar,
    cardAnime,
  },
  data(){
    return{
      listaAnimes: [],
      anime: [],
      buscando: false,
    }
  },
  computed:{
      ...mapGetters("usuarios", ["getDadosUsuario"]),
      ...mapGetters("animes", ["getNomeAnime"])
  },
  methods:{
        ...mapActions("animes", ["getAnimes"]),
  },
  watch:{
    getNomeAnime(){
      if(this.getNomeAnime){
        this.buscando = true;
        this.anime = this.listaAnimes.filter(l => l.nome == this.getNomeAnime);
      }
      else{
        this.buscando = false;
      }
    }
  },
  async created(){
      let idUsuario = null
      if(this.getDadosUsuario){
          idUsuario = this.getDadosUsuario.id_usuario
      }
      this.listaAnimes = await this.getAnimes(idUsuario);
  }
}
</script>

<style>

</style>