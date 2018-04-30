<template>
  <transition name="fade-left" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
    <div class="popup right">
      <div class="wrapper dark">
        <div class="text-container">
          <div class="content">
            <h1>Broca's Area.</h1>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Brocas'
  }
</script>
