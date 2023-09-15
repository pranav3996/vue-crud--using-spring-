<template>
  <router-view />
</template>

<style>
:root {
  --color-primary: #69af4f;
  --color-white: #fff;
  --color-dark: #363949;
  --color-light: rgba(132, 139, 200, 0.18);
  --color-background: #f6f6f9;
  --box-shadow: 0 2rem 3rem var(--color-light);

  
}
.dark-theme-variables {
  --color-background: #181a1e;
  --color-white: #202528;
  --color-dark: #edeffd;
  --color-light: rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
