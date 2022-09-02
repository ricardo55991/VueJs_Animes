<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-around">
      <div class="col-4 mt-0">
        <img class="totoro-img img-fluid" src="../assets/totoro.png" alt="totoro" />
      </div>

      <div class="col-5">
        <section>
          <h2>Entrar</h2>
        </section>
        <form>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Usuário">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" style="border-top: none" id="exampleInputPassword1" placeholder="Senha">
          </div>
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
body{
  background-color: #012E40 !important;
}

.totoro-img{
  max-height: 1080px;
}

.form-control{
  background-color: #F2E3D5 !important;
  padding-left: 23px !important;
  height: 75px;
}
</style>