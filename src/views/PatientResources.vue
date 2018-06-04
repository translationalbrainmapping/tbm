<template>
  <transition name="fade-up" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div class="page">
      <div class="container">
        <CloseButton side="right" closeto="Home" color="primary" on="white" />

        <h1 class="big-title">Resources for Patients</h1>
      </div>
    </div>
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'PatientResources',
    components: {
      CloseButton
    }
  }
</script>
