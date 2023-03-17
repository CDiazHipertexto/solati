<template lang="pug">
  //auth
  #body-code.row
    section#section-auth
      div.container-main
        div.section-header
          a(href="/").logo
            logoSolati
        div.section-body
          div.section-body--line
            div.section-body__title
              p {{ isLoggingIn ? 'Registrarse' : 'Inicia Sesión' }}
            hr
            div.section-body__other
              a.btn.btn__email(href="/auth/email")
                span Administrador
              a.btn.btn__email(href="/auth/email")
                span Gestor documentos
            hr
            div.section-body__switch
              p.txtLogin {{isLoggingIn ? '¿Ya estás registrado?' : '¿Aún no tienes una cuenta?'}}
              p.btn-primary-link(@click='toggleForm') {{ isLoggingIn ? 'Inicia sesión' : 'Registrarse' }}
 </template>

<script>
  import logoSolati from "@/components/elements/icons/logoSolati";
  import ButtonHrefComp from "@/components/elements/Ui/Button/buttonHrefComp.vue";
  import ButtonComp from "@/components/elements/Ui/Button/buttonComp.vue";
  export default {
    name: 'main',
    components: {ButtonComp, ButtonHrefComp, logoSolati  },
    props: ['state'],
    data: () => ({
      isLoggingIn: true
    }),
    methods: {
      toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
      },
      accesWith() {
        //console.log ('Ingreso apis redes')
      }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
      this.isLoggingIn = (this.state == 'login');
    }
  }
</script>

<style lang="sass" scoped>
  .btn
    border: 2px solid rgba(94, 94, 94, 0.23)
</style>
<style lang="sass">
  @import "../../scss/utilities/variables"
  body
    background-color: #f0f0f0
    min-height: auto
  .contain-to-grid.nav--login, #footer.footer--login, .none-login
    display: none !important
  #content.content--custom
    padding-top: 0
    background-image: none
    width: auto
    float: none
    font-size: 11px
  #section-auth
    width: 42em
    margin: 6em auto 0
    text-align: center
    @media only screen and (max-width: 410px)
      width: 96%
      margin: 3em auto 0
    .section-header
      margin-bottom: 3em
      .logo
        padding: 0.8em
        background: #1C2030
        border-radius: 12px
        width: fit-content
        margin: auto
        display: block
        svg
          width: 70px
          height: 70px
    .section-body
      &--line
        padding: 3em
        background: #ffffff
        border: 1px solid #dcdcdc
        @media only screen and (max-width: 410px)
          padding: 3em 1.5em
      &__title
        margin-bottom: 2em
        p
          font-size: 2em
          font-weight: 600
          color: $greenDarkHex
      &__social
        display: flex
        margin-bottom: 2em
        justify-content: space-between
      .btn
        box-shadow: none
        text-transform: none
        border: 1px solid rgb(94 94 94 / 23%)
        border-radius: 5px
        box-sizing: border-box
        width: 100%
        display: flex
        align-items: center
        color: #474747
        background: #fafafa
        padding: 1.3em 2em !important
        margin-left: 0
        margin-right: 0
        span
          display: inline-block
          margin-left: 10px
          padding-right: 22px
          width: 100%
          letter-spacing: .22px
          font-size: 1.6em
          white-space: nowrap
          font-weight: 600
        i
          color: #a5a5a5
        &__facebook
          width: 48%
          span
            margin-left: -5px
            padding-right: 0
        &__google
          width: 48%
          span
            margin-left: -5px
            padding-right: 0
        &__email
          margin-bottom: 2em
          .fa-mobile
            font-size: 1.6em
      &--separate
        text-align: center
        color: rgba(0,0,0,.24)
        margin-bottom: 2em
        &:before
          content: ""
          right: .5em
          margin-left: -50%
          display: inline-block
          height: 1px
          position: relative
          vertical-align: middle
          width: 45%
          background-color: rgba(210, 210, 210)
        &:after
          content: ""
          left: .5em
          margin-right: -50%
          display: inline-block
          height: 1px
          position: relative
          vertical-align: middle
          width: 45%
          background-color: rgba(210, 210, 210)
      &__other
        margin-bottom: 2em
      hr
        margin-bottom: 2em
        border-top: 1px solid rgba(210, 210, 210)
      &__switch
        display: flex
        justify-content: center
        p
          font-size: 1em
          span
            font-weight: 900
            cursor: pointer
            color: $blueLightHex
            text-decoration: underline
        .btn-primary-link
          text-decoration: underline
          color: $blueLightHex
          margin-left: .4em !important
          font-weight: 700
</style>
