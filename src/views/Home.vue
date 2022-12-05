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
  name: "Home",
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
        ...mapActions("animes", ["getAnimes"]),
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