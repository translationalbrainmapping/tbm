<template lang="html">
  <div id="footer" class="bar">
    <ul class="navbar">
      <router-link v-for="link in links" :key="link.link" :to="{ name: link.link }"><li>{{ link.name }}</li></router-link>
    </ul>
    <div class="copy">&copy; 2018 CAOS LAB</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        { name: 'Home', link: 'Home'},
        { name: 'Team', link: 'Team'},
        { name: 'News', link: 'News'},
        { name: 'Patient Resources', link: 'PatientResources'}
      ]
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
