<template>
  <router-view/>
</template>

<style>
html {
   background: #5cd48c;
}
#app {
  @import url(https://fonts.googleapis.com/css2?family=Comfortaa&display=swap);
  font-family: Comfortaa, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
