<template lang="pug">
    //Portfolio
    section#sectionChoose.py__section.bg-dark
        b-container.text-white.text-left
            b-row(align-v='left')#sectionTitle
              b-col(xl='6', lg='6', md='12', sm='12', cols='12').flex-column.d-flex.justify-content-center
                section-heading
                    template(slot='text-heading')
                        h2 Agentes Virtuales
                p.text-prg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus sapien. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vestibulum turpis vitae sem pellentesque.
              b-col(xl='6', lg='6', md='12', sm='12', cols='12')
                .swiper.mySwiper
                  .swiper-wrapper
                    .swiper-slide
                      input#check01(type='checkbox', name='check', value='1')
                      label.w-100.wrapper-card.radio(for='check01')
                        b-container.container-fluid.p-1
                          b-row.justify-content-between.align-items-center.p-2
                            b-col(sm='12', md='6', lg='6', xl='6')
                              img(src='@/assets/img-data-box.png', alt='up', width='100%')
                            b-col.text-left(sm='12', md='6', lg='6', xl='6')
                              p.title Lorem Ipsum is
                              p.txt-und 1 Und
                              div.line-secon.p-2
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p.max-dtc -50%
                              div.line-secon.p-2.mt-1
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p -15%
                        div.check-card-bg
                    .swiper-slide
                      input#check02(type='checkbox', name='check', value='2')
                      label.w-100.wrapper-card.radio(for='check02')
                        b-container.container-fluid.p-1
                          b-row.justify-content-between.align-items-center.p-2
                            b-col(sm='12', md='6', lg='6', xl='6')
                              img(src='@/assets/img-data-box.png', alt='up', width='100%')
                            b-col.text-left(sm='12', md='6', lg='6', xl='6')
                              p.title Lorem Ipsum is
                              p.txt-und 1 Und
                              div.line-secon.p-2
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p.max-dtc -50%
                              div.line-secon.p-2.mt-1
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p -15%
                        div.check-card-bg
                    .swiper-slide
                      input#check03(type='checkbox', name='check', value='3')
                      label.w-100.wrapper-card.radio(for='check03')
                        b-container.container-fluid.p-1
                          b-row.justify-content-between.align-items-center.p-2
                            b-col(sm='12', md='6', lg='6', xl='6')
                              img(src='@/assets/img-data-box.png', alt='up', width='100%')
                            b-col.text-left(sm='12', md='6', lg='6', xl='6')
                              p.title Lorem Ipsum is
                              p.txt-und 1 Und
                              div.line-secon.p-2
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p.max-dtc -50%
                              div.line-secon.p-2.mt-1
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p -15%
                        div.check-card-bg
                    .swiper-slide
                      input#check04(type='checkbox', name='check', value='4')
                      label.w-100.wrapper-card.radio(for='check04')
                        b-container.container-fluid.p-1
                          b-row.justify-content-between.align-items-center.p-2
                            b-col(sm='12', md='6', lg='6', xl='6')
                              img(src='@/assets/img-data-box.png', alt='up', width='100%')
                            b-col.text-left(sm='12', md='6', lg='6', xl='6')
                              p.title Lorem Ipsum is
                              p.txt-und 1 Und
                              div.line-secon.p-2
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p.max-dtc -50%
                              div.line-secon.p-2.mt-1
                                div.wrapper-price
                                  div.box-price
                                    p.text-uppercase.text-shop Lorem Ipsum Is
                                    p.price-pack $4.800
                                    p.price-uni LOREM IP: $4.800
                                  div.wrapper-dtc
                                    p -15%
                        div.check-card-bg
                  //.swiper-pagination
</template>

<script>
    import ButtonComp from "../../elements/Ui/Button/buttonComp"
    import SectionHeading from "../../layout/heading/sectionHeading";


    export default {
        name: 'choose-product',
        components: {ButtonComp, SectionHeading, Swiper,},
        data: () => ({

        }),

        methods: {
            acces () {
                console.log ( "Acces home")
            },
            foo() {
                console.log("bar");
            }
        },
      mounted() {
        let swiper = new Swiper(".mySwiper", {
          slidesPerView: 2+1/3,
          direction: "vertical",
          spaceBetween: 10,
          centeredSlides: false,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }
    }
</script>

<style lang="sass" scoped>
  @import "../../../scss/utilities/variables"
  h2
    @media all and (max-width: 500px)
      font-size: 1.8em !important
  .bg-dark
    background-color: $greenDarkHex !important
  .py__section
    padding-bottom: 0
    padding-top: 0
    @media all and (max-width: 991px)
      padding-top: 5em
  #sectionChoose
    .text-left
      text-align: left
      @media all and (max-width: 991px)
        text-align: center
    .text-prg
      margin-top: 2em
      max-width: 400px
      @media all and (max-width: 991px)
        text-align: center
        margin: 1.5em auto 3em
  .swiper
    width: 100%
    height: 600px
    cursor: grab
    max-width: 500px
  .swiper-slide
    height: auto !important
    .check-card-bg
      position: absolute
      background: #000000
      -webkit-transition: all .3s ease-out
      transition: all .3s ease-out
      -webkit-transform: scale(0)
      transform: scale(0)
      width: 40px
      height: 36px
      top: 10px
      left: 10px
      z-index: -1
    input[type=checkbox]:checked ~ label
      border: 1px solid $blueLightHex
      .line-secon
        border: 0.785729px solid $blueLightHex
      .check-card-bg
        -webkit-transform: scale(25)
        transform: scale(25)

    input
      display: none
    .wrapper-card
      text-align: center
      font-size: 18px
      background: transparent
      display: flex
      -webkit-box-pack: center
      justify-content: center
      align-items: center
      border: 1px solid #606874
      border-radius: 10px
      height: auto !important
      cursor: pointer
      overflow: hidden
      position: relative
      &:hover
        transform: translate3d(0, -2px, 0) !important
        box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgba(0, 0, 0, 0.07) !important
        transition: .3s !important
      > .container
        font-size: 13px
      p.title
        font-size: 1.2em
        font-weight: 800
        margin: 0
      .txt-und
        font-size: .9em
        font-weight: 300
      .line-secon
        border: 0.785729px solid #808080
        border-radius: 10px
        padding: .5em
        .wrapper-price
          display: flex
          align-items: center
          justify-content: space-around
          p
            margin: 0
          .box-price
            .text-shop
              font-size: .81em
            .price-pack
              font-size: 1.5em
            .price-uni
              font-size: .6em
        .wrapper-dtc
          p
            font-size: 1.5em
            &.max-dtc
              color: $blueLightHex
    img
      display: block
      width: 17em
      height: 100%
      object-fit: cover
      @media all and (max-width: 991px)
        text-align: center
        margin: 0 auto .5em
</style>

<style lang="sass">
    @import "../../../scss/utilities/variables"
    @import "../../../scss/utilities/mixins"
    $gap: 20px
    #sectionChoose
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
