<template lang="html">
  <div id="app">
    <!-- <Header /> -->

    <div id="content">
      <Three /> <!-- Render 3D World -->

      <router-view /> <!-- Render Page -->
    </div>

    <Footer />
  </div>
</template>

<script>
  // import Header from '@/components/Header.vue'
  import Three from '@/components/Three.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      // Header,
      Three,
      Footer,
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/app";
  @import "./assets/scss/animate.css";
</style>
