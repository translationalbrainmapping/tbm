<template>
  <transition name="fade-up" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div class="page">
      <div class="container">
        <CloseButton side="right" closeto="Home" color="primary" on="white" />

        <h1 class="big-title">TBM In The News</h1>

        <!-- Saxophone Brain Surgeory -->
        <h3>This Music Teacher Played His Saxophone While In Brain Surgery</h3>
        <p>When music teacher Dan Fabbio played a simple melody on his saxophone as he laid on the operating table after his brain tumor had been removed, music never sounded so sweet.</p>
        <ul>
          <li><a href="http://www.npr.org/sections/health-shots/2017/08/25/545710598/this-music-teacher-played-his-saxophone-while-in-brain-surgery">NPR Health News Article on Dan Fabbio</a></li>
          <li><a href="https://www.urmc.rochester.edu/neurosurgery/news.aspx?start=01-01-2017&amp;end=12-31-2017#newsItem2196">The Surgeon’s Perspective: A Patient Plays His Saxophone During Brain Surgery</a></li>
          <li><a href="http://www.democratandchronicle.com/story/news/2017/09/02/saxophone-solo-after-brain-surgery-signal-success-rochester/626876001/">He played his saxophone right after brain surgery to signal success</a></li>
          <li><a href="http://people.com/bodies/music-teacher-plays-saxophone-during-brain-surgery/">People Magazine article on Dan Fabbio</a></li>
          <li><a href="https://www.facebook.com/SeekerMedia/videos/10155327361953387/">Watch the saxophone brain surgery video</a></li>
          <li>NBC Health News article: <a href="https://www.nbcnews.com/health/health-news/musician-plays-sax-during-brain-tumor-surgery-n796971">Musician Plays Sax During Brain Tumor Surgery</a></li>
          <li><a href="http://newatlas.com/patient-plays-saxophone-brain-surgery/51094/">New Atlas brain surgery article</a></li>
        </ul>

        <h3><a href="http://www.whec.com/news/university-of-rochester-medical-center-student-research-scientist/4559749/">Greece native defends thesis in cognitive neuroscience 12 years after aneurysm »</a></h3>

        <h3><a href="https://www.urmc.rochester.edu/news/story/5107/surviving-a-stroke-propels-career-in-brain-research.aspx">Surviving a Stroke Propels Career in Brain Research »</a></h3>

        <h3><a href="http://www.rochester.edu/newscenter/student-work-opens-brain-surgeons-remove-tumors-262152/">Student work opens the brain to help surgeons remove tumors »</a></h3>

        <h3>SMD Student David Paul (M.D. ’16) Wins National Cadbury Award for Academic and Volunteer Achievements.</h3>
        <p><a href="https://www.urmc.rochester.edu/news/story/4450/smd-student-david-paul-m.d.-16-wins-national-cadbury-award--for-academic-and-volunteer-achievements.aspx">Pilot research offers new insights about how the brain fixes itself</a></p>

        <h3>New imaging technique helps predict how vision recovers after brain tumor removal.</h3>
        <p><a href="http://www.rochester.edu/newscenter/myelin-linked-to-speedy-recovery-of-human-visual-system-after-tumor-removal-82512/">Understanding recovery process could have implications for many different injuries of the central nervous system</a></p>

        <h3>Health and Medicine</h3>
        <p><a href="http://www.futurity.org/pituitary-brain-tumor-vision-817882/">Images show how brain heals itself after tumor »</a></p>
      </div>
    </div>
  </transition>
</template>

<script>
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'News',
    components: {
      CloseButton
    }
  }
</script>
