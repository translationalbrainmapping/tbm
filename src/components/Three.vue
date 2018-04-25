<template lang="html">
  <div id="three" :class="{ right: threeOnRight, middle: threeInMiddle }"></div>
</template>

<script>
import World from '@/assets/js/world'

export default {
  name: 'Three',
  computed: {
    threeOnRight() {
      return this.$route.meta.side == 'left'
    },
    threeInMiddle() {
      return this.$route.meta.side == 'full'
    }
  },
  mounted() {
    World.build(window, document, 'three')
  },
  watch: {
    '$route' (to, from) {
      if (to.meta.side == from.meta.side || to.meta.side == 'full') return // don't update if on same side or full page

      console.log(from.name + " " + to.name)
      // refresh scene after a second (bring back 2d targets)
      setTimeout(() => {
        World.render()
        let targets = document.getElementsByClassName('targetbox')
        for (let t of targets) {
          t.classList.remove('hidden')
        }
      }, 1000)
    }
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
    &.middle {
      left: 25%;
    }
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
