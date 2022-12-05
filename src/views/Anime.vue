<template>
    <div>
        <Navbar />
        <div class="row mt-5 d-flex justify-content-center">
            <div class="col-2">
                <cardAnime :listaAnimes="this.anime" />
            </div>
            <div class="col-4">
                <h4>Sinopse</h4>
                <span>{{ this.anime[0].descricao }}</span>
            </div>
        </div>
    </div>
    <div class="mt-5" v-if="this.anime[0].nome_temporada">
        <div class="row">
            <div class="btn-group">
                <button class="botao-temporadas btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ this.anime[0].nome_temporada }}
                </button>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-10">
                <div class="card">
                    <div class="card-body">
                        <div class="box-video">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="video-anime embed-responsive-item" :src=" this.anime[0].link " allowfullscreen></iframe>
                            </div>
                            <span>{{ this.anime[0].nome_episodio }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import cardAnime from '@/components/cardAnime.vue';
  
export default {
name: "Anime",
components:{
    Navbar,
    cardAnime,
},
data(){
    return{
    anime: [],
    }
},
computed:{
    ...mapGetters("usuarios", ["getDadosUsuario"]),
    ...mapGetters("animes", ["getAnimeSelecionado"]),
},
methods:{
        ...mapActions("animes", ["getAnimes"]),

        teste(){
        console.log(this.anime)
        }
},
async created(){
    this.anime = this.getAnimeSelecionado;
}
}
</script>
  
<style scoped>
.botao-temporadas{
    margin-inline: 20%;
    background-color: #30A5BF;
    border: none;
}

.card{
    margin-left: 24%;
    margin-right: 49px;
    background-color: rgba(61, 171, 195, 0.52);
}

.video-anime{
    width: 145px;
    height: 145px;
    border-radius: 5px;
}

.box-video{
    max-width: 145px;
}

</style>