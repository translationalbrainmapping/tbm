<template lang="html">
  <div id="app">
    <Header :links="links" />

    <div id="content">
      <Three />
      <main id="pages">
        <transition>
          <router-view />
        </transition>
      </main>
    </div>

    <Footer />
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
    data() {
      return {
        links: [
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/app";
</style>
