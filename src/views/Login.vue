<template>
  <div class="main">
    <div class="row d-flex justify-content-around">
      <div class="col-4 mt-0">
        <img class="totoro-img img-fluid" src="../assets/totoro.png" alt="totoro" />
      </div>
      <div class="div-form col-5">
        <form class="form-login">
          <h2 class="titulo-login mb-3">Entrar</h2>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Usuário">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" style="border-top: none" id="exampleInputPassword1" placeholder="Senha">
          </div>
          <button type="submit" class="btn-submit btn btn-primary">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
  computed:{
  },

  created(){
    
  }
}

</script>

<style scoped>
.main{
  /* background-color: #012E40 !important; */
  background-image: url(../assets/backgroundNight.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.totoro-img{
  max-height: 1080px;
  /* animation: raios 5s infinite linear; */
}

.form-control{
  background-color: #F2E3D5 !important;
  padding-left: 23px !important;
  height: 75px;
}

.form-login{
  margin-top: 25%;
}

.titulo-login{
  text-align: start;
  color: #3CA6A6;
  font-family: fantasy;
  /* text-shadow: 1px -4px 40px #F2E205 !important; */
}

.btn-submit{
  width: 100%;
  height: 60px;
  background-color: #3CA6A6;
  border-color: #3CA6A6;
  font-family: fantasy;
  letter-spacing: 1px;
  color: #F2E3D5;
  font-size: 20px;
}

.btn-submit:hover {
  background-color: transparent;
  border-color: #F2E3D5;
}

.btn-submit:active, .btn-submit:focus{
  text-shadow: 0 0 1em #012E40 !important;
  box-shadow: 0 0 2em #F2E205 !important;
  background-color: #F2E205;
  border-color: #F2E205;
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