<template lang="pug">
    // Button href Component Slot
    a(:href='href').btn.btn-primary
        slot(name='txt') Click Aquí
</template>

<script>
    export default {
        name: "button-href-comp",
        props: ['href']
    }
</script>

<style scoped>
    a {
      color: #ffffff !important;
      width: auto;
      background: #1c2030;
      border: #1c2030;
      max-width: 300px;
      margin: auto;
    }
    a:hover {
        color: #fff !important;
        background: #000000 !important;
        border: #1c2030;
        transform: translate3d(0, -2px, 0) !important;
        box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgba(0, 0, 0, 0.07) !important;
        transition: .3s !important;
    }
</style>
