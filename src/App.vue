<template lang="html">
  <div id="app">
    <Header />

    <div id="content">
      <Three /> <!-- Render 3D World -->

      <router-view /> <!-- Render Page -->
    </div>

    <Footer />

    <div id="targetBox" @click="goto"></div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Three from '@/components/Three.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Three,
      Footer,
    },
    methods: {
      goto () {
        let targetbox = document.getElementById('targetBox')
        this.$router.push({ name: targetbox.dataset.target })
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/app";
  @import "./assets/scss/animate.css";

  #targetBox {
    position: fixed;
    z-index: 10000;
    width: 10px;
    height: 10px;
    border: 2px solid black;
  }
</style>
