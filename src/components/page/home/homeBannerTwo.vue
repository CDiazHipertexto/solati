<template lang="pug">
  div#sectionBanner
    //b-col(sm='12', md='12', lg='12', xl='12')
      div()
        img(src='@/assets/arrrow-up.png', alt='up', width='15px')
    vueper-slides.slide-image-inside(
      :dragging-distance="50",
      :fixed-height="true",
      :always-refresh-clones="true",
      duration=7000,
      :autoplay="true",
      :pause-on-hover='pauseOnHover',
      @autoplay-pause='internalAutoPlaying = false',
      @autoplay-resume='internalAutoPlaying = true',
      :bullets='true',
      :touchable="true",
      :infinite='true',
      :transitionSpeed='600',
      prevent-y-scroll)
      vueper-slide(v-for='(slide, i) in slides', :key='slide.id', :title='slide.title', :content='slide.content', style="background-color: #00000")

</template>
<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        components: { VueperSlides, VueperSlide },
        name: 'HomeBannerTwo',
        // In your Vue.js component.
        data: () => ({
          pauseOnHover: true,
          autoPlaying: true,
          internalAutoPlaying: true,
          slides: [
            {
              id: 'slide-1',
              title: '<h2 style="font-size: 1.3em;color: #ef8935;font-weight: 300;">Somos genials</h2>',
              content: '<h1><strong style="">La red social de<br>los ahorradores.</strong></h1><p>El futuro de las compras en línea <span style="font-size: 1em;color: #ef8935">está aquí.</span></p>',

            },
            {
              id: 'slide-2',
              title: '<h2 style="font-size: 1.3em;color: #ef8935;font-weight: 300;">Somos genials</h2>',
              content: '<h1><strong style="">La red social de<br>los ahorradores.</strong></h1><p>El futuro de las compras en línea <span style="font-size: 1em;color: #ef8935">está aquí.</span></p>',

            },
            {
              id: 'slide-3',
              title: '<h2 style="font-size: 1.3em;color: #ef8935;font-weight: 300;">Somos genials</h2>',
              content: '<h1><strong style="">La red social de<br>los ahorradores.</strong></h1><p>El futuro de las compras en línea <span style="font-size: 1em;color: #ef8935">está aquí.</span></p>',

            },
          ],

        }),
        methods: {

        },
        mounted() {

        },
        created() {
        },
        destroyed() {
        }
    }
</script>
<style lang="sass" scoped>
  @import "../../../scss/utilities/variables"


  .line
    background: rgb(28 32 48 / 58%)
    border: 3px solid $blueLightHex
    max-width: 330px
    min-height: 535px
    margin: auto
    color: #ffff
    display: flex
    align-items: flex-end
    justify-content: space-between
    border-radius: 29px
    padding: .5em
    font-size: 14px
    line-height: 1
    @media all and (max-width: 991px)
      min-height: 298px
      margin-top: 1em
      border-radius: 16px
    .wrapper-post
      display: flex
      text-align: left
      align-content: center
      align-items: center
      margin-bottom: .8em
      font-size: .81em
      img.avatar
        margin-right: .5em
    .bg-dark
      background-color: $greenDarkHex !important
      border-radius: 10px
      border: 1px solid rgba(255, 255, 255, 0.32)
      .extra
        color: #00FFA2
      p
        margin: 0
      .text-shop
        font-size: .5em
      .txt-price
        font-size: 1em
      .txt-und
        font-size: .4em
      .dtc
        font-size: 1.5em
      .text-left
        text-align: left
      .line-secon
        border: 1px solid #ffffff61
        border-radius: 5px
        display: flex
        padding: 0.61em .3em
        margin-top: 0.51em
        align-items: center
        justify-content: space-between
        .price
          display: flex
          flex-direction: row
          align-content: center
          justify-content: space-between
          align-items: center
</style>
<style lang="sass">
    @import "../../../scss/utilities/variables"
    #sectionBanner
      position: relative
      .vueperslide__content-wrapper
        z-index: 2
      .vueperslides__track-inner > .vueperslide
        &:after
          content: ""
          display: block
          width: 100%
          height: 100%
          position: absolute
          bottom: 0
          background: rgb(28 32 48 / 37%)
          z-index: 0
      .vueperslides__track:before
        content: ""
        display: block
        width: 30px
        height: 30px
        position: absolute
        background-image: url('../../../assets/arrrow-up.png')
        background-position: center
        background-repeat: no-repeat
        bottom: 3em
        left: 0
        right: 0
        z-index: 9
        margin: auto
    .vueperslides
        &__bullet
            .default
                background-color: rgba(255, 255, 255, 0.3)
                border: none
                box-shadow: none
                transition: 0.3s
                width: 1rem
                height: 1rem
            span
                display: block
                color: #fff
                font-size: 10px
                opacity: 0.8
        &__bullet--active
            .default
                background-color: $blueLightHex
        &--fixed-height
            min-height: 640px
            height: 640px
            z-index: 2
            @media all and (max-width: 991px)
              min-height: 905px
              height: 905px
            @media all and (max-width: 767px)
              min-height: 1025px
              height: 1025px
            .vueperslides__inner
              min-height: inherit !important
        &__arrow
            color: #fff
            svg
                stroke-width: 1
                width: 4.5rem

    /*Styles wysiwyg*/
    .wysiwyg
        font-size: 21px
        line-height: 1.6
        h1, h2, h3, h4, h5, h6, p
            color: #ffffff
            @media all and (max-width: 991px)
              text-align: center !important
        h1
          @media all and (max-width: 500px)
            font-size: 1.6em !important
        .center
            h1, h2, h3, h4, h5, h6, p
                text-align: center
            button
                margin: auto
        .right
            h1, h2, h3, h4, h5, h6, p
                text-align: right
            button
                float: right
        .left
            h1, h2, h3, h4, h5, h6, p
                text-align: left
            button
                float: left
        @media all and (max-width: 640px)
            .right, .left
                h1, h2, h3, h4, h5, h6, p
                    text-align: center
                button
                    float: none
                    margin: auto
        a
            text-decoration: none
            &:hover
                border-bottom: 1px solid
        button
            text-align: center
            vertical-align: middle
            cursor: pointer
            -webkit-user-select: none
            -moz-user-select: none
            -ms-user-select: none
            user-select: none
            border: 1px solid transparent
            padding: 1rem 3rem
            font-size: 1.5rem
            line-height: 1.5
            border-radius: 0.25rem
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
            color: #fff
            background-color: $OrangeHex
            border-color: $OrangeHex //!important
            display: block
            font-weight: 500
            height: 5rem !important
            &:hover
                color: #fff
                background-color: #f58429
                border-color: #e67f2d
        abbr
            border-bottom: 1px dotted
            cursor: help
        cite
            font-style: italic
        hr
            background: #e6e6e6
            border: none
            display: block
            height: 1px
            margin-bottom: 1.4em
            margin-top: 1.4em
        img
            vertical-align: text-bottom
        ins
            background-color: lime
            text-decoration: none
        mark
            background-color: #ff0
        small
            font-size: 0.8em
        strong
            font-weight: 700
        sub, sup
            font-size: 0.8em
        sub
            vertical-align: sub
        sup
            vertical-align: super
        p, dl, ol, ul, blockquote, pre, table
            margin-bottom: 1.4em
        p:last-child, dl:last-child, ol:last-child, ul:last-child, blockquote:last-child, pre:last-child, table:last-child
            margin-bottom: 0
        p:empty
            display: none
        h1, h2, h3, h4, h5, h6
            font-weight: 700
            line-height: 1.2
        h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child
            margin-top: 0
        h1
            font-size: 2.4em
            margin-bottom: 0
            margin-top: .58333em
            line-height: 1.2
        h2
            font-size: 1.6em
            margin-bottom: .3em
            margin-top: 1.75em
            line-height: 1.1
        h3
            font-size: 1.3em
            margin-bottom: 1.07692em
            margin-top: 1.07692em
        h4
            font-size: 1.2em
            margin-bottom: 1.16667em
            margin-top: 1.16667em
        h5
            font-size: 1.1em
            margin-bottom: 1.27273em
            margin-top: 1.27273em
        h6
            font-size: 1em
            margin-bottom: 1.4em
            margin-top: 1.4em
        dd
            margin-left: 1.4em
        ol, ul
            list-style-position: outside
            margin-left: 1.4em
        ol
            list-style-type: decimal
            ol
                list-style-type: lower-alpha
                ol
                    list-style-type: lower-roman
                    ol
                        list-style-type: lower-greek
                        ol
                            list-style-type: decimal
                            ol
                                list-style-type: lower-alpha
        ul
            list-style-type: disc
            ul
                list-style-type: circle
                ul
                    list-style-type: square
                    ul
                        list-style-type: circle
                        ul
                            list-style-type: disc
                            ul
                                list-style-type: circle
        blockquote
            border-left: 4px solid #e6e6e6
            padding: 0.6em 1.2em
            p
                margin-bottom: 0
        code, kbd, samp, pre
            -moz-osx-font-smoothing: auto
            -webkit-font-smoothing: auto
            background-color: #f2f2f2
            color: #333
            font-size: 0.9em
        code, kbd, samp
            border-radius: 3px
            line-height: 1.77778
            padding: 0.1em 0.4em 0.2em
            vertical-align: baseline
        pre
            overflow: auto
            padding: 1em 1.2em
            code
                background: none
                font-size: 1em
                line-height: 1em
        figure
            margin-bottom: 2.8em
            text-align: center
            &:first-child
                margin-top: 0
            &:last-child
                margin-bottom: 0
        figcaption
            font-size: 0.8em
            margin-top: 0.875em
        table
            width: 100%
            pre
                white-space: pre-wrap
        th, td
            font-size: 1em
            padding: .7em
            border: 1px solid #e6e6e6
            line-height: 1.4
        thead tr, tfoot tr
            background-color: #f5f5f5
        thead
            th, td
                font-size: .9em
                padding: 0.77778em
        tfoot
            th, td
                font-size: .9em
                padding: 0.77778em
        thead
            th code, td code
                background-color: #fff
        tfoot
            th code, td code
                background-color: #fff
        tbody tr
            background-color: #fff
</style>
