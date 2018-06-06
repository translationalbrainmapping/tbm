<template>
  <transition name="fade-up" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div class="page">
      <div class="container">
        <CloseButton side="right" closeto="Home" color="primary" on="white" />

        <h1 class="big-title">TBM In The Spotlight</h1>

        <!-- Saxophone Brain Surgeory -->
        <div class="person left">
          <div class="info lg-img">
            <a class="img" href="https://www.urmc.rochester.edu/neurosurgery/news.aspx?start=01-01-2017&amp;end=12-31-2017#newsItem2196" target="_blank" rel="noopener">
              <img src="/images/sax.jpg" alt="Dan Fabbio Surgery" />
              <div class="triangle big white tr"></div>
              <div class="triangle small white bl"></div>
            </a>
            <p class="name blk"><a href="https://www.urmc.rochester.edu/neurosurgery/news.aspx?start=01-01-2017&amp;end=12-31-2017#newsItem2196" target="_blank" rel="noopener">Music Teacher Played His Saxophone While In Brain Surgery</a></p>
            <p class="title blk">When music teacher Dan Fabbio played a simple melody on his saxophone as he laid on the operating table after his brain tumor had been removed, music never sounded so sweet.</p>
            <div style="display: flex">
              <ul class="description" style="display: inline-block">
                <li><a href="https://www.npr.org/sections/health-shots/2017/08/25/545710598/this-music-teacher-played-his-saxophone-while-in-brain-surgery" target="_blank" rel="noopener">NPR Health News</a></li>
                <li><a href="https://people.com/bodies/music-teacher-plays-saxophone-during-brain-surgery/" target="_blank" rel="noopener">People Magazine</a></li>
                <li><a href="https://www.nbcnews.com/health/health-news/musician-plays-sax-during-brain-tumor-surgery-n796971" target="_blank" rel="noopener">NBC News Health</a></li>
                <li><a href="https://www.urmc.rochester.edu/neurosurgery/news.aspx?start=01-01-2017&amp;end=12-31-2017#newsItem2196" target="_blank" rel="noopener">University of Rochester Neurosurgery</a></li>
              </ul>
              <ul class="description" style="display: inline-block">
                <li><a href="https://www.democratandchronicle.com/story/news/2017/09/02/saxophone-solo-after-brain-surgery-signal-success-rochester/626876001/" target="_blank" rel="noopener">Democrat and Chronicle</a></li>
                <li><a href="https://newatlas.com/patient-plays-saxophone-brain-surgery/51094/" target="_blank" rel="noopener">New Atlas</a></li>
                <li><a href="https://www.facebook.com/SeekerMedia/videos/10155327361953387/" target="_blank" rel="noopener">Seeker Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        <h4 class="more-title">More News:</h4>
        <h3><a href="https://www.whec.com/news/university-of-rochester-medical-center-student-research-scientist/4559749/" target="_blank" rel="noopener">Greece native defends thesis in cognitive neuroscience 12 years after aneurysm »</a></h3>
        <h3><a href="https://www.urmc.rochester.edu/news/story/5107/surviving-a-stroke-propels-career-in-brain-research.aspx" target="_blank" rel="noopener">Surviving a Stroke Propels Career in Brain Research »</a></h3>
        <h3><a href="https://www.rochester.edu/newscenter/student-work-opens-brain-surgeons-remove-tumors-262152/" target="_blank" rel="noopener">Student work opens the brain to help surgeons remove tumors »</a></h3>
        <h3><a href="https://www.urmc.rochester.edu/news/story/4450/smd-student-david-paul-m.d.-16-wins-national-cadbury-award--for-academic-and-volunteer-achievements.aspx" target="_blank" rel="noopener">Pilot research offers new insights about how the brain fixes itself »</a></h3>
        <h3><a href="https://www.rochester.edu/newscenter/myelin-linked-to-speedy-recovery-of-human-visual-system-after-tumor-removal-82512/" target="_blank" rel="noopener">New imaging technique helps predict how vision recovers after brain tumor removal »</a></h3>
        <h3><a href="https://www.futurity.org/pituitary-brain-tumor-vision-817882/" target="_blank" rel="noopener">Images show how brain heals itself after tumor »</a></h3>
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

<style lang="scss" scoped>
  .more-title {
    font-size: 3rem;
    margin-top: 7rem;
  }
</style>
