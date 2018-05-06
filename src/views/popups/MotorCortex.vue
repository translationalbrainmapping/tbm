<template>
  <transition name="fade-right" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <div class="popup left">
      <div class="wrapper dark">
        <CloseButton side="right" closeto="Explore" color="white" on="dark" />

        <div class="text-container">
          <div class="content">
            <h1>Motor Cortex.</h1>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'MotorCortex',
    components: {
      CloseButton
    }
  }
</script>
