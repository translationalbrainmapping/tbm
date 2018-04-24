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
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway');
  @import './assets/scss/variables';
  @import './assets/scss/reboot';
  @import './assets/scss/nav';
  @import './assets/scss/page';
  @import './assets/scss/content';
</style>
