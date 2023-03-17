<template lang="pug">
    //Benefits Purchase
    section#sectionBenefits.py__section
        b-container()
            b-row.mb-5
              b-col(sm='12', md='12', lg='12', xl='12')
                h3.section--title Compra con amigos
            b-row
              b-col(sm='12', md='12', lg='12', xl='12')
                div.wrapper-block.d-flex
                  div.wrapper-products
                    div.item-product
                      input#check01(type='checkbox', name='check', value='1')
                      label.w-100.wrapper-card.radio(for='check01')
                        img(src='@/assets/data-item.png', alt='Data', width='100%')
                        p Lorem Ipsum
                    div.item-product
                      input#check02(type='checkbox', name='check', value='2')
                      label.w-100.wrapper-card.radio(for='check02')
                        img(src='@/assets/data-item.png', alt='Data', width='100%')
                        p Lorem Ipsum
                    div.item-product
                      input#check03(type='checkbox', name='check', value='3')
                      label.w-100.wrapper-card.radio(for='check03')
                        img(src='@/assets/data-item.png', alt='Data', width='100%')
                        p Lorem Ipsum


</template>

<script>
    import VueMaterial from 'vue-material'
    import { TabsPlugin } from 'bootstrap-vue'

    export default {
        name: "categories-two",
        components: { VueMaterial, TabsPlugin },
        data: () => ({

        }),
        mounted() {

        },
        methods: {

        },
    }
</script>

<style scoped lang="sass">
  @import "../../../scss/utilities/variables"
  #sectionBenefits

    input[type=checkbox]:checked ~ label
      img
        border: 2px solid $blueLightHex
      p
        font-weight: 700

    input
      display: none
    label
      cursor: pointer
    .bg-dark__PLP
        background: $greenDarkHex
    h2
      font-size: 3em
      font-weight: 600
      text-align: left
      margin-left: 1em
      @media all and (max-width: 991px)
        text-align: center
        margin: 0 0 1em 0
        @media all and (max-width: 500px)
          font-size: 1.7em !important

    p
      color: #1C2030
  .text-left
    text-align: left
    font-size: 1.8em
    font-weight: 700
    @media all and (max-width: 991px)
      text-align: center
      margin: 0 0 0 0
  .wrapper-block
    display: flex
    align-items: center
    @media all and (max-width: 991px)
      flex-direction: column-reverse
    > div
      width: 50%
      @media all and (max-width: 991px)
        width: 100%
    .wrapper-products
      display: flex
      justify-content: space-between
      label
        cursor: pointer
      @media all and (max-width: 991px)
        flex-direction: column
        img
          width: 120px
          margin: auto
      .item-product
        display: flex
        flex-direction: column
        img
          background: #F8F8F9
          border-radius: 20px
          transition: .3s !important
          &:hover
            transform: translate3d(0, -2px, 0) !important
            box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgb(0 0 0 / 7%) !important
            transition: .3s !important
        p
          color: #1C2030
          margin-top: 1em
          font-size: 1.3em
    .text-intro
      display: flex

</style>

<style lang="sass">
    @import "../../../scss/utilities/variables"
    #sectionBenefits
        .line--top
            border-top: 3px solid $blueLightHex
            margin-right: -15px
            margin-left: -15px
        .card-header
            background-color: rgb(255, 255, 255, 1)!important
        p
            color: #ffffff
        a
            text-decoration: none
            text-transform: uppercase
            opacity: 0.8
            filter: grayscale(1)
            transition-property: filter
            transition-duration: .3s
            padding-bottom: 3rem
            padding-top: 3rem
        h5
            font-size: 1rem
        .tabs
            .card-header
                margin-bottom: -3px
                padding-left: 0
                padding-right: 0
        .nav-tabs
            .nav-link.active, .nav-item.show .nav-link
                color: $blueLightHex
                background-color: #ffffff
                border-color: #ffffff #ffffff #ffffff
                border-bottom: 3px solid $OrangeHex
                box-shadow: 0 17px 30px rgba(0,0,0,.07)
                opacity: 1
                box-shadow: 0 15px 45px rgba(16,30,54,.15)
                filter: grayscale(0)
                transition-property: filter
                transition-duration: .3s
                h6
                    font-weight: 500
                    transition: .3s
    .md-theme-default a:not(.md-button)
        color: $greenDarkHex
    .md-theme-default a:not(.md-button):hover
        color: $greenDarkHex
        border-color: #ffffff #ffffff #ffffff
        transition: transform 0.2s
    .md-tab
        background: #0c3440
    .tab-content > .active
        transition: opacity .3s ease
        opacity: 1
        transform: translateY(0rem)
</style>
