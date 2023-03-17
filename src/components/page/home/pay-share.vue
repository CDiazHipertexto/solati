<template lang="pug">
  //Portfolio
  section#sectionShare.py__section
    b-container.text-left
      b-row(align-v='left')#sectionTitle.reverse
         b-col(xl='6', lg='6', md='12', sm='12', cols='12')
            div.w-100.wrapper-card
              b-container.container-fluid.p-1
                b-row.justify-content-between.align-items-center.p-2
                  b-col(sm='12', md='6', lg='6', xl='6')
                    div.col-data-product
                      div.wrapper-towishlist
                        img(src='@/assets/img-data.jpg', alt='data image', width='100%')
                        a.towishlist
                          img.avatar(src='@/assets/like.png', alt='up', width='100%')
                      p.txt-title Lorem ipsum dolor
                      p.txt-uni 24 USD
                      div.line
                        div.box-item
                          p.text-intro Lorem ipsum dolor
                          p.txt-price
                            strong $8.750
                          p.txt-uni LOREM: $ 244
                        div
                          p.txt-dtc -35%
                  b-col.text-left(sm='12', md='6', lg='6', xl='6')
                    div.line-secon.p-2
                      div.wrapper-perfil
                        div.wrapper-img
                          img.avatar(src='@/assets/user-luis.jpeg', alt='up', width='100%')
                        div.box-twitt
                          p.text-uppercase.text-name @LuisKMart
                          p.price-pack ¿Lorem ipsum dolor is?
                    div.line-secon.p-2.mt-1
                      div.wrapper-perfil
                        div.wrapper-img
                          img.avatar(src='@/assets/user-maria.jpeg', alt='up', width='100%')
                        div.box-twitt
                          p.text-uppercase.text-name @LuisKMart
                          p.price-pack Lorem ipsum dolor Lorem ipsum dolor
                    div.line-secon.p-1
                      div.wrapper-perfil
                        div.wrapper-img
                          img.avatar(src='@/assets/user-luis.jpeg', alt='up', width='100%')
                        div.box-twitt
                          p.text-uppercase.text-name @LuisKMart
                          p.price-pack ¿Lorem ipsum dolor is?
                    div.line-secon.p-2.mt-1
                      div.wrapper-perfil
                        div.wrapper-img
                          img.avatar(src='@/assets/user-arbolito.jpeg', alt='up', width='100%')
                        div.box-twitt
                          p.text-uppercase.text-name @LuisKMart
                          p.price-pack Lorem ipsum dolor ❤️
                    div.social-share.p-2.mt-3
                      div.wrapper-social
                        p Compartir en
                        ul
                          li
                            a
                              img.avatar(src='@/assets/wp.png', alt='up', width='10px')
                          li
                            a
                              img.avatar(src='@/assets/fb.png', alt='up', width='10px')
                          li
                            a
                              img.avatar(src='@/assets/ms.png', alt='up', width='10px')
         b-col(xl='6', lg='6', md='12', sm='12', cols='12').flex-column.d-flex.justify-content-center
          section-heading
            template(slot='text-heading')
              h2 Inteligencia artificial
          p.text-prg.m-0.mt-4.text-intro
            strong.d-block.mb-3 Lorem ipsum dolor.
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus sapien.

</template>

<script>
import ButtonComp from "../../elements/Ui/Button/buttonComp"
import SectionHeading from "../../layout/heading/sectionHeading";


export default {
  name: 'pay-share',
  components: {ButtonComp, SectionHeading,},
  data: () => ({

  }),

  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="sass" scoped>
@import "../../../scss/utilities/variables"
#sectionShare
  @media all and (max-width: 991px)
    .reverse
      flex-direction: column-reverse
    .sectionTitle__block
      h2
        text-align: center
    p.text-intro
      text-align: center
      margin-left: auto !important
      margin-right: auto !important
  @media all and (max-width: 500px)
    .sectionTitle__block
      h2
        font-size: 1.8em
  .col-data-product
    .wrapper-towishlist
      height: 160px
      border-radius: 5px
      overflow: hidden
    p
      margin: 0
    .txt-title
      margin-top: .5em
      font-size: 1.2em
      font-weight: 700
    .txt-uni
      color: #808080
    .line
      border: 1px solid #c1c1c1
      padding: .41em
      border-radius: 10px
      margin-top: .5em
      display: flex
      align-items: center
      justify-content: space-between
      .text-intro
        font-size: .7em
        text-transform: uppercase
      .txt-price
        font-size: 1.2em
      .txt-uni
        font-size: .7em
        text-transform: uppercase
      .txt-dtc
        font-size: 1.3em
        font-weight: 700
        color: $blueLightHex

  .text-left
    text-align: left
  .text-prg
    margin-top: 2em
    max-width: 400px
  .wrapper-card
    border: 1px solid #606874
    border-radius: 10px
    padding: .6em
    max-width: 490px
    @media all and (max-width: 991px)
      text-align: center
      margin: 1.5em auto 3em
    p.title
      font-size: 1.2em
      font-weight: 800
      margin: 0
    .txt-und
      font-size: .9em
      font-weight: 300
    .line-secon
      margin-top: 1em
      .wrapper-perfil
        display: flex
        align-items: center
        p
          margin: 0
        .box-twitt
          font-size: 12px
          .text-name
            font-size: 1em
            font-weight: 800
          .price-pack
            font-size: 1em
          .price-uni
            font-size: .6em
      .wrapper-img
        img
          width: 36px
          margin-right: .5em
    .social-share
      p
        font-size: 1em
      ul
        list-style-type: none
        display: flex
        align-items: center
        justify-content: space-around
        margin: 0
        padding: 0
      img
        width: 30px

  img
    display: block
    width: 100%
    height: 100%
    object-fit: cover
</style>

<style lang="sass">
@import "../../../scss/utilities/variables"
@import "../../../scss/utilities/mixins"
$gap: 20px
#sectionShare
  @media all and (max-width: 1280px)
    .pry
      padding-top: 0 !important
  #app
    font-family: sans-serif
    .h1
      text-align: center
      color: #34495e
    p
      text-align: center
    .videos
      &__list
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        padding-left: 0
        margin:
          top: 0
          bottom: 0
        list-style: none
        box-shadow: 0 50px 75px rgba(0,0,0,.2)
      &__item
        width: calc(100% - #{$gap / 2})
        &:nth-child(n + 3)
          margin-top: $gap
</style>
