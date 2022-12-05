<template>
    <div class="box-card">
        <div v-for="anime in this.listaAnimes" :key="anime.id_anime" class="card mx-3 mb-4" style="width: 15rem;">
            <img @click="abrirAnime(anime.id_anime)" :src="anime.img_logo" class="card-imagem card-img-top" alt="..." height="360">
            <div class="card-body p-0 mx-3 my-2">
                <h5 class="card-title">{{ anime.nome }}</h5>
                <div class="d-flex justify-content-between">
                    <div class="small-ratings">
                        <i v-for="ratingPreenchido in anime.avaliacao" :key="ratingPreenchido.index" class="icone-estrela bi bi-star-fill"></i>
                        <i v-for="ratingVazio in ((anime.avaliacao - 5) * -1)" :key="ratingVazio.index" class="icone-estrela bi bi-star"></i>
                    </div>
                    <div class="me-3" v-if="!this.exibirModal">
                        <i v-if="anime.ind_favorito == 'N'" @click="favoritar(anime.id_anime, anime.ind_favorito)" class="icone-coracao bi bi-heart"></i>
                        <i v-else @click="favoritar(anime.id_anime, anime.ind_favorito)" class="icone-coracao bi bi-heart-fill"></i>
                    </div>
                    <div v-else>
                        <i v-if="anime.ind_favorito == 'N'" class="icone-coracao bi bi-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: "cardAnime",
    components:{
    },
    props:{
        listaAnimes: Array,
    },
    data(){
        return{

        }
    },
    methods:{
        ...mapActions("favoritos", ["postFavorito", "deleteFavorito"]),
        ...mapActions("animes", ["getAnime"]),
        ...mapMutations("gerais", ["setNavbarSemBarraPesquisa"]),

        async favoritar(idAnime, indFavorito){
            if(this.getDadosUsuario){
                let dados = {
                    idUsuario: this.getDadosUsuario.id_usuario,
                    idAnime : idAnime
                }
                if(indFavorito == 'N'){
                    await this.postFavorito(dados);
                    this.listaAnimes.find(l => l.id_anime == idAnime).ind_favorito = 'S';
                }
                else{
                    await this.deleteFavorito(dados);
                    this.listaAnimes.find(l => l.id_anime == idAnime).ind_favorito = 'N';
                }
            }
            else{
                this.exibirModal = true;
            }
        },

        async abrirAnime(idAnime){
            await this.getAnime(idAnime);
            this.$router.push({ path: '/anime' });
            this.setNavbarSemBarraPesquisa(true);
        }
    },
    computed:{
        ...mapGetters("usuarios", ["getDadosUsuario"])
    },
}
</script>

<style scoped>
.card{
    /* border: none; */
    display: inline-flex;
}
.card-title{
    text-align: start;
    margin-top: 9px;
}
.card-imagem:hover{
    cursor: pointer;
}

.icone-coracao{
    color: #BD2A2E;
    font-size: 22px;
}

.icone-coracao:hover{
    cursor: pointer;
}

.icone-estrela{
    color: #F2BE22;
    font-size: 21px;
}

</style>