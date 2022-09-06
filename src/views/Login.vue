<template>
  <div class="main container-fluid">
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

}
</script>

<style scoped>
.main{
  background-color: #012E40 !important;
}

.totoro-img{
  max-height: 1080px;
  animation: raios 4s infinite linear;
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
  text-shadow: 0 0 2em #DBF227 !important;
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
  background-color: #012E40;
  border-color: #F2E3D5;
}

.btn-submit:active, .btn-submit:focus{
  text-shadow: 0 0 1em #012E40 !important;
  box-shadow: 0 0 2em #DBF227 !important;
  background-color: #DBF227;
  border-color: #DBF227;
}

@keyframes raios {
  0%{
    -webkit-filter: drop-shadow(0 0 1em #daf22750);
    filter: drop-shadow(0 0 1em #daf22752);
  }
  20%{
    -webkit-filter: drop-shadow(0 0 2em #daf22750);
    filter: drop-shadow(0 0 2em #daf22752);
  }
  40%{
    -webkit-filter: drop-shadow(0 0 3em #daf22750);
    filter: drop-shadow(0 0 3em #daf22752);
  }
  60%{
    -webkit-filter: drop-shadow(0 0 3em #daf22750);
    filter: drop-shadow(0 0 3em #daf22752);
  }
  80%{
    -webkit-filter: drop-shadow(0 0 2em #daf22750);
    filter: drop-shadow(0 0 2em #daf22752);
  }
  100%{
    -webkit-filter: drop-shadow(0 0 1em #daf22750);
    filter: drop-shadow(0 0 1em #daf22752);
  }

}
</style>