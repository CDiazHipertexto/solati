<template>
  <svg id="logoSolati" width="41" height="40"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
    <g>
      <g>
        <path class="st0" d="M27.8,11.9c-1.3-3.3-3-6.6-7.9-6.5s-7.5,5.2-7.1,7.8c0,0-4.1,1.5-3.9,6.7c0.7,0.7,0.2,0.4,1.3,0.4
          s23.2,0,23.2,0s1.6,0.4,1.6-0.9C35,18.2,33.7,13.7,27.8,11.9z M20.3,16.1c-1.7,0-3.2-1.4-3.2-3.2c0-1.7,1.4-3.2,3.2-3.2
          s3.2,1.4,3.2,3.2C23.5,14.6,22.1,16.1,20.3,16.1z"/>
      </g>
      <g>
        <path class="st1" d="M7.2,17.6c-1-0.7-1.5-1.8-1.6-3.1h4.2c0.1,0.7,0.4,1.1,1,1.1c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5
          c0-0.3-0.2-0.5-0.5-0.7c-0.3-0.2-0.8-0.4-1.5-0.6c-0.8-0.3-1.5-0.6-2-0.8c-0.5-0.3-1-0.7-1.4-1.2c-0.4-0.5-0.6-1.2-0.6-2
          c0-0.8,0.2-1.5,0.6-2.1c0.4-0.6,1-1,1.7-1.3c0.7-0.3,1.6-0.5,2.5-0.5c1.6,0,2.8,0.4,3.7,1.1c0.9,0.7,1.4,1.7,1.4,3h-4.3
          c0-0.4-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.2-0.6-0.2c-0.2,0-0.3,0.1-0.4,0.2C10,9,9.9,9.1,9.9,9.3c0,0.3,0.2,0.5,0.5,0.7
          c0.3,0.2,0.8,0.4,1.5,0.7c0.8,0.3,1.5,0.6,2,0.9c0.5,0.3,1,0.7,1.4,1.2c0.4,0.5,0.6,1.1,0.6,1.9c0,0.8-0.2,1.5-0.6,2.1
          c-0.4,0.6-0.9,1.1-1.7,1.4c-0.7,0.3-1.6,0.5-2.6,0.5C9.4,18.7,8.2,18.3,7.2,17.6z"/>
        <path class="st1" d="M28.4,15.5h3.9v3h-7.8V5.8h4V15.5z"/>
        <path class="st1" d="M14.1,32.6H9.8l-0.6,1.9H5l4.7-12.7h4.6l4.6,12.7h-4.2L14.1,32.6z M13.1,29.6L12,26.1l-1.2,3.5H13.1z"/>
        <path class="st1" d="M29.8,21.8V25h-3.4v9.6h-4V25h-3.3v-3.2H29.8z"/>
        <path class="st1" d="M34.9,21.8v12.7h-4V21.8H34.9z"/>
      </g>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "logoSolati",
        data: () => ({

        }),
        methods: {

        },
    }
</script>


<style scoped  lang="sass">
    @import "../../../scss/utilities/variables"
    #logoSolati
        cursor: pointer
        .st0
          fill: #fff
        .st1
          fill: #DC832E
        #background
            opacity: 0
    .sticky-nav
        transition: .7s
        padding: 0
        svg
            width: 2em !important
            height: 2em
            .st1, .st2
                transition: 1s
                fill: #486898 !important
            .st1-l, st1-a
                transition: 1s
                fill: #fff !important
            #background
                transition: 1s
                opacity: 1
                opacity: 0
    .light
        svg
            .st1, .st2
                fill: $greenDarkHex !important
</style>
