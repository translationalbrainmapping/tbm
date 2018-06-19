<template>
  <transition name="fade-left" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
    <div class="popup right">
      <div class="wrapper dark">
        <CloseButton side="left" closeto="Explore" color="white" on="dark" />

        <div class="text-container">
          <div class="content">
            <h1>Left Inferior Temporal Gyrus.</h1>
            <p class="description">Information coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'LeftInferiorTemporalGyrus',
    components: {
      CloseButton
    }
  }
</script>
