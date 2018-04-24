<template lang="html">
  <div id="three"></div>
</template>

<script>
import World from '@/assets/world'

export default {
  name: 'Three',
  mounted() {
    World.build(window)
    document.getElementById('three').appendChild(World.getDomElement())
    World.create()

    window.addEventListener('resize', World.onWindowResize)
    World.animate()
  },
  beforeDestroy() {
    window.removeEventListener('resize', World.onWindowResize)
  }
}
</script>

<style lang="scss">
  #three {
    z-index: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
</style>
