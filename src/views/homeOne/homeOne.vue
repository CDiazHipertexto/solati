<template lang="pug">
  //Layout
  #content
    navigation
    main.prehome
      article
        home-banner
        categories
        choose-product
        pay-share
        immedi-delivery
        //cta-home-two
</template>

<script>

import navigation from '@/components/layout/nav/navigation';
import homeBanner from "@/components/page/home/homeBanner";
import categories from "@/components/page/home/categories";
import chooseProduct from "@/components/page/home/choose-product";
import payShare from "@/components/page/home/pay-share";
import immediDelivery from "@/components/page/home/immedi-delivery";
import ctaHomeTwo from "@/components/page/home/cta-home-two";

export default {
  name: 'home-one',
  components: {navigation, homeBanner, categories, chooseProduct, payShare, immediDelivery, ctaHomeTwo},
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  }
}
</script>
<style lang="sass" scoped>
  h1
    background-color: blue
</style>
