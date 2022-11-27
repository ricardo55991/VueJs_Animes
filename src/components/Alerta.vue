<template>
  <div v-if="getAlerta.ativo" :class="getAlerta.status == 1 ? alertaSucesso : alertaErro" role="alert">
    {{getAlerta.texto}}
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Alerta",
  data(){
    return{
      alertaSucesso: "alert alert-success",
      alertaErro: "alert alert-danger"
    }
  },
  methods:{

  },
  computed:{
    ...mapGetters("gerais", ["getAlerta"])
  }
}
</script>

<style scoped>
.alert{
  max-width: 30%;
  position: absolute;
  margin-left: 43%;
}
</style>