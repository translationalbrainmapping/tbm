<template>
  <transition name="fade-up" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <div class="page">
      <div class="container">
        <h1 class="big-title">News!</h1>
        <p>Preserving the mind through personalized brain mapping.</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'News',
  }
</script>
