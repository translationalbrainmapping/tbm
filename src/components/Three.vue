<template lang="html">
  <div id="three" :class="{ right: threeOnRight }"></div>
</template>

<script>
import World from '@/assets/js/world'

export default {
  name: 'Three',
  computed: {
    threeOnRight() {
      return this.$route.name == 'Home'
    }
  },
  mounted() {
    // Build world and append to page
    World.build(window, document, 'three')

    // Call first animation frame
    World.animate()
  }
}
</script>

<style lang="scss">
  #three {
    z-index: 0;
    margin: 0;
    padding: 0;
    width: 50%;
    height: 100%;
    left: 0;
    position: absolute;
    transition: left 1s ease;

    &.right {
      left: 50%;
    }
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
