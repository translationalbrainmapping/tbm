<template>
  <transition name="fade-up" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div class="page">
      <div class="container">
        <CloseButton side="right" closeto="Home" color="primary" on="white" />

        <h1 class="big-title">Meet Our Team</h1>
        <h4>The program for translational brain mapping brings together clinicians and scientists at the Universtiy of Rochester committed to the vision of advancing patient care through personalized brain mapping.</h4>

        <!-- Dr. Pilcher -->
        <div class="person left">
          <div class="info">
            <a class="img" href="https://www.urmc.rochester.edu/people/20554798-webster-h-pilcher" target="_blank" rel="noopener">
              <img src="/images/pilcher.jpg" alt="Dr. Pilcher" />
              <div class="triangle big white tr"></div>
              <div class="triangle small white bl"></div>
            </a>
            <p class="name blk"><a href="https://www.urmc.rochester.edu/people/20554798-webster-h-pilcher" target="_blank" rel="noopener">Webster Pilcher, M.D., Ph.D.</a></p>
            <p class="title blk">Clinical Director, Program for Translational Brain Mapping</p>
            <p class="title blk">Ernest &amp; Thelma Del Monte Distinguished Professor of Neuromedicine</p>
            <p class="title blk">Chairman of <a href="https://www.urmc.rochester.edu/neurosurgery" target="_blank" rel="noopener">Neurosurgery</a></p>
            <p class="description">
              Dr. Webster Pilcher is the Ernest and Thelma Del Monte Distinguished Professor of Neuromedicine and Chairman of Neurosurgery at the University of Rochester Medical Center. He is a graduate of Colgate University and the University of Rochester Medical School where he received his MD/PhD. Following neurosurgery training at the University of Rochester, he was awarded the Charles A. Ellsberg fellowship to study epilepsy and brain tumor surgery with George Ojemann, MD, at the University of Washington in Seattle. In 1990, Dr. Pilcher joined the faculty at the University of Rochester and with colleagues in the Department of Neurology, developed a large epilepsy monitoring and surgery program. Appointed to the Chair position in 2002, Dr. Pilcher embarked upon growing a small clinical service consisting of 5 neurosurgeons into a nationally recognized academic and clinical enterprise. A community-wide Neurosurgery initiative (Rochester Neurosurgery Partners) now provides care in all health systems in Rochester and 10 regional clinics. In 2007, Dr. Pilcher was appointed head of the URMC Neuromedicine Integrated Disease Program and more recently was instrumental in the creation of the Del Monte Neuromedicine Institute. This Institute will be charged with developing translational research programs focused on stroke, neuro-oncology, brain and spinal cord injury, neurodegenerative disorders and other neurological disorders. Dr. Pilcher’s clinical focus includes epilepsy surgery, brain tumors and general neurosurgery.
            </p>
          </div>
        </div>

        <!-- Dr. Mahon -->
        <div class="person right" style="margin-bottom: 10rem">
          <div class="info">
            <a class="img" href="https://www.urmc.rochester.edu/people/27337790-bradford-mahon" target="_blank" rel="noopener">
              <img src="/images/mahon.jpg" alt="Dr. Mahon" />
              <div class="triangle big white tl"></div>
              <div class="triangle small white br"></div>
            </a>
            <p class="name blk"><a href="https://www.urmc.rochester.edu/people/27337790-bradford-mahon" target="_blank" rel="noopener">Bradford Z. Mahon, Ph.D.</a></p>
            <p class="title blk">Scientific Director, Program for Translational Brain Mapping</p>
            <p class="title blk">Associate Professor <a href="https://www.sas.rochester.edu/bcs/" target="_blank" rel="noopener">Dept of Brain and Cognitive Sciences</a> and Department of <a href="https://www.urmc.rochester.edu/neurosurgery" target="_blank" rel="noopener">Neurosurgery</a></p>
            <p class="title blk">Department of <a href="https://www.urmc.rochester.edu/neurology" target="_blank" rel="noopener">Neurology</a>, <a href="https://www.cvs.rochester.edu/" target="_blank" rel="noopener">Center for Visual Sciences</a>, <a href="https://www.sas.rochester.edu/cls/">Center for Language Sciences</a></p>
            <p class="description">
              Dr. Brad Mahon is a cognitive neuroscientist who studies how the brain recovers from injury, and how state-of-the-art brain mapping technologies can be optimized and interfaced with neurosurgical interventions. His research uses functional and structural MRI and behavioral analysis to study disruption and recovery of neural systems in patients with various types of brain disease, including tumor, epilepsy, stroke and traumatic brain injury. Dr. Mahon received his PhD from Harvard University in 2009. His research is supported by grants from the National Science Foundation and the the National Institute for Health.
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'Team',
    components: {
      CloseButton
    }
  }
</script>
