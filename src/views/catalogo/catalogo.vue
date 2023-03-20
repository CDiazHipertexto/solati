<template lang="pug">
  //Layout
  #content.catalogue-content
    .content-sidebar.nav-bar
      nav
        .wrapp-logo
          a.navbar-brand(href='page-top')
            logoSolati
          div.txt
            p  Sistema Solati
            p Solución integral para la gestión.
        ul.menu
          li
            a Inicio
          li
            a Calendario
          li
            a Configuración
    .catalogue

</template>

<script>

import logoSolati from "@/components/elements/icons/logoSolati";

export default {
  name: 'catalogo',
  components: { logoSolati },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  }
}
</script>
<style lang="sass" scoped>
  #content.catalogue-content
    display: grid
    grid-template-areas: "nav-bar main-view"
    grid-template-columns: auto 1fr
    grid-template-rows: 1fr auto
    height: 100%
    min-height: 100%
    position: relative
    width: 100%
  .wrapp-logo
    display: flex
    text-align: left
    .navbar-brand
      padding: 0.8em
      background: #1C2030
      border-radius: 12px
      width: fit-content
      margin: auto
      display: block
      svg
        width: 70px
        height: 70px
    .txt
      padding-left: 1rem
      p
        margin: 0
  .menu
    margin-top: 4rem
  .nav-bar
    background-color: #fff
    grid-area: nav-bar
    width: 290px
    z-index: 3
    display: flex
    flex-direction: column
    min-height: 0
    position: relative
    margin: 4rem
    border-radius: 11px
    nav
      position: fixed
      height: 100%
      width: inherit
      padding: 3rem
  .catalogue
    grid-area: main-view
    width: 100%
    overflow: hidden
    min-height: 100vh

</style>
