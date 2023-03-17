<template lang="pug">
    // Button Component Slot
    button(type='button', @click='eventClick', :id="id")
        slot(name='general-text-btn') Texto por defecto
</template>

<script>
    export default {
        name: "buttonComp",
        props: {
            eventClick: {
                type: Function,
                required: false
            },
            id: {
                type: String
            }
        }
    }
</script>

<style scoped>
    button:hover {
        transform: translate3d(0, -2px, 0) !important;
        box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgba(0, 0, 0, 0.07) !important;
        transition: .3s !important;
    }
</style>
