<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Personagem</router-link> |
      <router-link to="/episodios">Episódios</router-link> | 
      <router-link to="/locais">Locais</router-link> |
      <router-link to="/sobre">Sobre</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  components:{
  }
}
</script>

<style>
html, body{
  /* height: 100%;
  width: 100%; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100%;
  width: 100%; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
