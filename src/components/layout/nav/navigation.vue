<template lang="pug">
    // Navigation
    nav#mainNav(:class='{sticky:active}').navbar-light.navbar-expand-lg.navbar
        #nav-container.container(:class='toggleNavClass()')
            .container.d-flex.justify-content-between
                a.navbar-brand.js-scroll-trigger(href='page-top')
                  logoSolati
                form#search(action='#')
                  label.search-label(data-state='open', for='search')
                    input(type='text', placeholder='Busca en Solati')
                    img(src='@/assets/search.png', alt='up', width='20px')
                button.navbar-toggler.navbar-toggler-right
                    span.navbar-toggler-icon
                #navbarResponsive.collapse.navbar-collapse.text-right.justify-content-end(type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation')
                    ul.navbar-nav.ml-auto.my-2.my-lg-0
                        li.nav-item.item-user
                          a(href="/auth")
                            img.user(src='@/assets/user.svg', alt='up', width='25px')
                            span Login
                          //ul.submenu
                            li
                              a LOGIN

</template>

<script>

    import logoSolati from "../../elements/icons/logoSolati";
    import ButtonComp from "../../elements/Ui/Button/buttonComp";
    import ButtonHrefComp from "../../elements/Ui/Button/buttonHrefComp";
    export default {
        components: {ButtonHrefComp, ButtonComp, logoSolati },
        name: 'navigation',
        data() {
            return {
                active: false
            }
        },
        methods: {
            toggleNavClass(){
                if(this.active == false){
                    return 'nav'
                } else {
                    return 'sticky-nav'
                }

            }
        },
        mounted(){
            window.document.onscroll = () => {
                let navBar = document.getElementById('mainNav');
                if(window.scrollY > navBar.offsetTop){
                    this.active = true;
                } else {
                    this.active = false;
                }
            }
        },
        computed: {
        },
    }
</script>
<style scoped  lang="sass">
    @import "../../../scss/utilities/variables"
    #search
      margin: 0
      padding: 0
      display: flex
      align-items: center
      label
        position: relative
        transition: all 1s ease
        border-radius: 0
        margin: 0
        padding: 0
        color: #fff
        display: flex
        align-items: center
        img
          position: absolute
          left: 6px
          width: 16px
          z-index: 2
        input
          transition: width 1s ease, opacity 0.5s ease 0.5s
          opacity: 1
          width: 180px
          height: 36px
          border: 0
          outline: none
          color: #ffffff
          margin: 0
          top: auto
          z-index: 1
          padding: 0 0 0 2em
          background: rgba(28, 32, 48, 0.5)
          border-radius: 10px
          &::placeholder
            color: #ffffff
            font-size: .8em
    #mainNav *
      transition: all .6s ease
      .navbar-nav
        display: flex
        align-items: center
        align-content: center
        li, a, p
          display: flex
          align-items: center
          align-content: center
          margin: 0
          a
            margin: 0 .5em
            padding: 0.5em 1em
            color: #fff
        li.item-cart
          a
            background: rgba(28, 32, 48, 0.4)
            border-radius: 5px
        li.item-user
          position: relative
          a
            background: rgba(28, 32, 48, 0.4)
            border-radius: 15px
            img.user
              background-color: #131620
              border-radius: 50px
              padding: .31em
              margin-left: .4em
          ul.submenu
            background-color: transparent
            z-index: 1
            padding: 10px 0 0 0
            margin: 0
            list-style: none
            position: absolute !important
            bottom: 0
            right: 0
            transform: translateY(110%)
            text-align: right
            opacity: 0
            visibility: hidden
            display: inline
          &:hover
            a
              border: 1px solid #1C2030
              background-color: $greenDarkHex !important
            ul.submenu
              transform: translateY(100%)
              visibility: visible
              opacity: 1
              transition: 0.3s all ease

    .navbar-brand
      padding: .8em
      background: $greenDarkHex
      width: auto
      border-radius: 12px
    .nav
        padding: 0
    .sticky-nav
        padding: 0
        svg
            .st1, .st2
                fill: blue !important
    #mainNav
        width: 100%
        position: fixed
        top: 0
        z-index: 9999
        background: rgb(28 32 48 / 30%)
        &.sticky
            box-shadow: 0 0 27px -14px #7b7b7b
            background-color: rgb(255 255 255 / 84%)
            border-bottom: 1px solid #e4e4e4
            .btn-navigation
                background: $blueLightHex
                color: rgb(255, 255, 255, 1)
                border: $blueLightHex 1px solid
                padding: 0.7rem 3rem !important
            .navbar
                &-toggler-icon
                    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 18 16' style='enable-background:new 0 0 18 16;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%230C3440;%7D%0A%3C/style%3E%3Cpath class='st0' d='M3,1c0-0.6,0.4-1,1-1h13c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H4C3.4,2,3,1.6,3,1z M7,15c0-0.6,0.4-1,1-1h9 c0.6,0,1,0.4,1,1s-0.4,1-1,1H8C7.4,16,7,15.6,7,15z M1,7C0.4,7,0,7.4,0,8s0.4,1,1,1h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H1z'/%3E%3C/svg%3E") !important
            #search
              input
                background-color: $greenDarkHex
            .navbar-nav
                a
                  border: 1px solid #1C2030
                  background-color: $greenDarkHex !important
        .btn-navigation
            background: rgba(0, 0, 0, 0.4)
            color: #ffffff
        .navbar
            &-toggler
                border: 0
            &-toggler-icon
                background-image: url("data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 1C3 0.447716 3.44772 0 4 0H17C17.5523 0 18 0.447716 18 1C18 1.55228 17.5523 2 17 2H4C3.44772 2 3 1.55228 3 1ZM7 15C7 14.4477 7.44772 14 8 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H8C7.44772 16 7 15.5523 7 15ZM1 7C0.447723 7 0 7.44772 0 8C0 8.55228 0.447723 9 1 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H1Z' fill='white'/%3E%3C/svg%3E") !important
                width: 2.5rem
                height: 2.5rem
</style>

