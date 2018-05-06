<template>
  <transition name="fade-right" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <CloseButton side="left" closeto="Home" color="primary" on="bg" />
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'Explore',
    components: {
      CloseButton
    }
  }
</script>
