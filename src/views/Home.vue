<template>
  <transition name="fade-right" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <div class="popup left home">
      <div class="wrapper white">
        <div class="text-container">
          <div class="content">
            <h3 class="small-title">Program for</h3>
            <h1 class="big-title">Translational Brain Mapping</h1>
            <p class="subtitle">Where personalized medicine meets human brain mapping.</p>

            <!-- Main CTAs -->
            <div class="buttons">
              <router-link v-for="link in links" :key="link" :to="{ name: link }" class="btn btn-dark">
                {{ link }}
                <div class="triangle small white tl"></div>
                <div class="triangle small white br"></div>
              </router-link>

              <router-link :to="{ name: 'Explore' }" class="btn btn-primary cta">
                <span class="wordpad">Explore</span>
                <font-awesome-icon :icon="arrow" />
                <div class="triangle small white tr"></div>
                <div class="triangle small white bl"></div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="triangle big tr"></div>
        <div class="triangle small bl"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faAngleRight } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      arrow: faAngleRight,
      links: [ 'Team', 'News' ]
    }
  }
}
</script>

<style lang="scss">
  .buttons {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 5rem;

    .cta {
      margin-left: auto;
      padding: 2rem 5rem;
      transition: padding-right 0.5s ease, background-color 0.5s ease;

      .wordpad {
        margin-right: 1rem;
        transition: margin-right 0.5s ease;
      }

      &:hover {
        padding-right: 4rem;

        .wordpad {
          margin-right: 2rem;
        }
      }
    }
  }
</style>
