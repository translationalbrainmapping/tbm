<template lang="html">
  <div id="app">
    <Header />

    <div id="content">
      <Three /> <!-- Render 3D World -->

      <router-view /> <!-- Render Page -->
    </div>

    <Footer />

    <!-- 2D Target panels to hover over 3D Targets -->
    <div id="targetBoxFrontal"    class="targetbox animated" @click="goto('Frontal')"   @mouseenter="hover('Frontal')"    @mouseleave="unhover('Frontal')"></div>
    <div id="targetBoxParietal"   class="targetbox animated" @click="goto('Parietal')"  @mouseenter="hover('Parietal')"   @mouseleave="unhover('Parietal')"></div>
    <div id="targetBoxOccipital"  class="targetbox animated" @click="goto('Occipital')" @mouseenter="hover('Occipital')"  @mouseleave="unhover('Occipital')"></div>
    <div id="targetBoxTemporal_L" class="targetbox animated" @click="goto('Temporal')"  @mouseenter="hover('Temporal_L')" @mouseleave="unhover('Temporal_L')"></div>
    <div id="targetBoxTemporal_R" class="targetbox animated" @click="goto('Temporal')"  @mouseenter="hover('Temporal_R')" @mouseleave="unhover('Temporal_R')"></div>
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
      goto (target) {
        if (target == this.$route.name) return
        this.$router.push({ name: target })
      },
      hover (tbId) {
        let el = document.getElementById('targetBox' + tbId)
        el.classList.add('jello')
      },
      unhover (tbId) {
        let el = document.getElementById('targetBox' + tbId)
        el.classList.remove('jello')
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.meta.side == from.meta.side) return // no need to hide elements if on same side

        // hide targets (for better experience)
        let targets = document.getElementsByClassName('targetbox')
        for (let t of targets) {
          t.classList.add('hidden')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/app";
  @import "./assets/scss/animate.css";

  .targetbox {
    position: fixed;
    z-index: 10000;
    width: 20px;
    height: 20px;
    margin-left: -12px;
    margin-top: -11px;
    border: 2px solid black;
    border-radius: 25%;
    cursor: pointer;
    transition: opacity 0.5s ease-out;

    &.hidden {
      transition: opacity 0.05s;
      opacity: 0;
    }
  }
</style>
