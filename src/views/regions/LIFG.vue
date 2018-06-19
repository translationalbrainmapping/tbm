<template>
  <transition name="fade-left" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
    <div class="popup right">
      <div class="wrapper dark">
        <CloseButton side="left" closeto="Explore" color="white" on="dark" />

        <div class="text-container">
          <div class="content">
            <h1>
              Broca's Area.
              <br><small style="font-size: 45%;font-weight: 100">Left Inferior Frontal Gyrus.</small>
            </h1>
            <p class="description">
              Broca’s area is typically located in the left inferior frontal gyrus, and supports language production, especially the production of whole sentences. When working with patients in the lead up to a surgery in the area of this brain region, we pay particular attention to mapping language and motor abilities using functional MRI.
            </p>
            <div class="section">
              <img class="medium" src="/regions/lifg/output_xFmBuI.gif" alt="Mapping of Broca's Area" />
              <p style="width:50%">There are important nerve fibers that project to this region and support important language functions. Those nerve fiber pathways can be identified using structural MRI.</p>
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
    name: 'LeftInferiorFrontalGyrus',
    components: {
      CloseButton
    }
  }
</script>
