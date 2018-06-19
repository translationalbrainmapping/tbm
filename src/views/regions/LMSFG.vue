<template>
  <transition name="fade-right" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <div class="popup left">
      <div class="wrapper dark">
        <CloseButton side="right" closeto="Explore" color="white" on="dark" />

        <div class="text-container">
          <div class="content">
            <h1>Left Middle and Superior Frontal Gyrus.</h1>
            <p class="description">The middle and superior frontal gyri in the left hemisphere can support important language and motor function. Functional MRI can be used prior to surgery to assist in determining whether those structures represent language.</p>
            <div class="section">
              <p style="width: 50%">
                Important never fiber pathways connect structures within the left frontal lobe that are important for language processing. Recent research from the Program for Translational Brain Mapping has explored the functions of those pathways and how best to map them using structural MRI and intraoperative cognitive testing.
              </p>
              <img class="medium" src="/regions/lmsfg/output_75Shm0.gif" alt="Mapping the Frontal Lobe">
            </div>
            <div class="section" style="text-align: center">
              <p>Read <a href="/regions/lmsfg/ChernoffColleagues_JOCN2018.pdf" target="_blank" rel="noopener">A Role for the Frontal Aslant Tract in Speech Planning: A Neurosurgical Case Study</a></p>
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
    name: 'LeftMiddleSuperiorFrontalGyrus',
    components: {
      CloseButton
    }
  }
</script>
