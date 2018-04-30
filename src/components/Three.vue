<template lang="html">
  <div id="three" :class="{ right: threeOnRight, middle: threeInMiddle }">
    <!-- 2D Target box to intercept mouseclicks on the 3D targets -->
    <div id="targetBox" @click="goto" @mouseenter="hover" @mouseleave="unhover"></div>

    <!-- Details Popup -->
    <div v-show="tShow" id="contextPopup">
      <h3 class="name">{{ tName }}</h3>
      <hr>
      <ul class="functions">
        <li v-for="func of tFunctions">{{ func }}</li>
      </ul>
      <div :class="[ 'triangle', tCorner ]"></div>
      <div :class="[ 'pointer', tCorner ]"></div>
    </div>
  </div>
</template>

<script>
import World from '@/assets/js/world'

export default {
  name: 'Three',
  data() {
    return {
      tShow: false,
      tName: '',
      tFunctions: [],
      tCorner: ''
    }
  },
  computed: {
    threeOnRight() { return this.$route.meta.side == 'left' },
    threeInMiddle() { return this.$route.meta.side == 'full' }
  },
  methods: {
    goto() {
      let target = document.getElementById('targetBox').dataset.dest
      if (target == this.$route.name) return
      this.$router.push({ name: target })
      this.tShow = false
    },
    hover() {
      let target = document.getElementById('targetBox')
      let popup = document.getElementById('contextPopup')

      // Update context popup info
      this.tName = target.dataset.name
      this.tFunctions = target.dataset.functions.split(';')

      let l = (target.dataset.l == 'true') ? 'l' : 'r'
      let t = (target.dataset.t == 'true') ? 't' : 'b'
      this.tCorner = t + l

      // Position in a corner
      popup.style.left = target.dataset.popLeft + 'px'
      popup.style.top = target.dataset.popTop + 'px'

      // Render the popup
      this.tShow = true
    },
    unhover() { this.tShow = false }
  },
  mounted() { World.build(window, document, 'three') }
}
</script>
