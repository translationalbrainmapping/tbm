<template lang="html">
  <div id="header" class="bar">
    URMC | Del Monte
    <ul class="navbar">
      <router-link v-for="link in links" :key="link.path" :to="link.path"><li>{{ link.name }}</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        { path: '/', name: 'Home' },
        { path: '/team', name: 'Team' },
        { path: '/news', name: 'News' },
      ]
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
