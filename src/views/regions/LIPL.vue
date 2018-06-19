<template>
  <transition name="fade-right" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <div class="popup left">
      <div class="wrapper dark">
        <CloseButton side="right" closeto="Explore" color="white" on="dark" />

        <div class="text-container">
          <div class="content">
            <h1>Left Inferior Parietal Lobule.</h1>
            <p class="description">
              The left inferior parietal lobe supports many critical functions related to language, memory, attention and skilled use of the hands. Patients with tumors in this brain region undergo functional MRI mapping to identify motor and language areas of the brain.
            </p>
            <div class="section">
              <p>Structural MRI is an important tool for mapping nerve fiber pathways in the inferior parietal lobule, as illustrated by the below image of a patient with a tumor (in black) that surrounded an important nerve fiber pathway called the Arcuate Fasciculus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'LeftInferiorParietalLobule',
    components: {
      CloseButton
    }
  }
</script>
