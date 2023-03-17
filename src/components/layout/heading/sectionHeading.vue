<template lang="pug">
    //Heading Text
    b-row(align-v='left')#sectionTitle
        b-col(xl='12', lg='12', md='12', sm='12', cols='12').sectionTitle--text
            .sectionTitle__block
                slot(name='text-heading')
                    h4 Texto
</template>

<script>
    import ButtonComp from "../../elements/Ui/Button/buttonComp";
    export default {
        name: "section-heading",
        components: {ButtonComp},
        data: () => ({

        }),
        methods: {
            acces () {
                console.log ( "Acces home")
            }
        },
        mounted() {
            //console.log(this.$i18n.messages.es)
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../scss/utilities/variables"
    h2
      font-size: 2.8em
</style>
