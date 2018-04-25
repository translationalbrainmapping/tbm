<template lang="html">
  <div id="header" class="bar">
    <router-link :to="{ name: 'Home' }">URMC | Del Monte</router-link>

    <ul class="navbar">
      <router-link v-for="link in links" :key="link" :to="{ name: link }"><li>{{ link }}</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [ 'Home', 'Team', 'News' ]
    }
  }
}
</script>

<style lang="scss">
  #header {
    top: 0;
    height: 5.58rem;
    font-size: 1.58rem;
    text-transform: uppercase;
  }
</style>
