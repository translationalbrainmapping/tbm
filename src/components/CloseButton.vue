<template lang="html">
  <router-link :to="{ name: closeto }" :class="[ 'btn-close', side, color ]">
    <font-awesome-icon :icon="icon" />
    <div :class="[ 'bracket', 'tl', on ]"></div>
    <div :class="[ 'bracket', 'tr', on ]"></div>
    <div :class="[ 'bracket', 'bl', on ]"></div>
    <div :class="[ 'bracket', 'br', on ]"></div>
  </router-link>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faTimes } from '@fortawesome/fontawesome-free-solid'

  export default {
    name: 'CloseButton',
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        icon: faTimes
      }
    },
    props: {
      side: {
        type: String,
        required: true
      },
      closeto: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      on: {
        type: String,
        required: true
      }
    }
  }
</script>
