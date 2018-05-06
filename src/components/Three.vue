<template lang="html">
  <div id="three" :class="{ right: threeOnRight, middle: threeInMiddle }" @mouseenter="touchingWorld" @mouseleave="notTouchingWorld"></div>
</template>

<script>
import World from '@/assets/js/world'

export default {
  name: 'Three',
  computed: {
    threeOnRight() { return this.$route.meta.side == 'left' },
    threeInMiddle() { return this.$route.meta.side == 'full' }
  },
  methods: {
    touchingWorld() { World.touching = true },
    notTouchingWorld() { World.touching = false }
  },
  mounted() { World.build(window, document, 'three') }
}
</script>
