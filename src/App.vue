<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "./scss/utilities/variables"
#app
  font-family: $font-family-sans-serif-plp
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px

#nav a
  font-weight: bold
  color: #2c3e50

#nav a.router-link-exact-active
  color: #42b983

</style>


<style lang="scss" src="./scss/app.scss"></style>
