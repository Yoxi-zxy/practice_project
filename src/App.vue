<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  min-width: 1200px;
}
body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
body::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #EBEBEB;
}
body::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #c2c2c2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 1001px;
  background-color: #f2f2f2;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
