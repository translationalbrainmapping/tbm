<template lang="html">
  <div id="header" class="bar">
    Walrus
    <ul class="navbar">
      <li v-for="link in links"><router-link :to="link.url">{{ link.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    links: {
      type: Array,
      required: true
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
