<template lang="pug">
  //Portfolio
  section#sectionDelivery.py__section.bg-dark
    b-container.text-white.text-left
      b-row(align-v='left')#sectionTitle
        b-col(xl='12', lg='12', md='12', sm='12', cols='12').flex-column.d-flex.justify-content-center.text-center
          section-heading
            template(slot='text-heading')
              h2 Lorem IpsumIsooo
          p.text-prg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus sapien. Suspendisse potenti.

</template>

<script>
import ButtonComp from "../../elements/Ui/Button/buttonComp"
import SectionHeading from "../../layout/heading/sectionHeading";


export default {
  name: 'immedi-delivery',
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
.bg-dark
  background-color: $greenDarkHex !important
#sectionDelivery
  @media all and (max-width: 991px)
    h2, p
      text-align: center
      margin-left: auto
      margin-right: auto
  @media all and (max-width: 500px)
    h2
      font-size: 1.8em
  .col-data-product
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
        color: $pinkDarkHex

  .text-left
    text-align: left
  .text-prg
    margin: 2em auto 0
    max-width: 400px
  .wrapper-card
    border: 1px solid #606874
    border-radius: 10px
    padding: .6em
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
#sectionDelivery
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
