<template lang="html">
  <div id="footer" class="bar">
    <ul class="navbar">
      <router-link v-for="link in links" :key="link" :to="{ name: link }"><li>{{ link }}</li></router-link>
    </ul>
    <div class="copy">&copy; 2018 CAOS LAB</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [ 'Home', 'Team', 'News' ]
    }
  }
}
</script>

<style lang="scss">
  #footer {
    bottom: 0;
    height: 3.8rem;
    font-size: 1.17rem;
    text-transform: uppercase;

    .copy {
      margin-left: auto;
    }
  }
</style>
