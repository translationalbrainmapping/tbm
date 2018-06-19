<template>
  <transition name="fade-right" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
    <div class="popup left">
      <div class="wrapper dark">
        <CloseButton side="right" closeto="Explore" color="white" on="dark" />

        <div class="text-container">
          <div class="content">
            <h1>
              Motor Cortex.
              <br><small style="font-size: 45%;font-weight: 100">Right Pre-Central Gyrus.</small>
            </h1>
            <p class="description">
              Primary motor cortex controls movements of the opposite side of the body. Tumors in motor cortex present special challenges. Our mapping program uses high resolution functional mapping and intraoperative stimulation to confirm the location of motor cortex and to preserve those critical functions during tumor removal.
            </p>
            <div class="section">
              <h3>Mapping of Motor Functions</h3>
              <img class="medium" src="/regions/rpcg/motormapping.gif" alt="Mapping of the Motor Cortex" />
            </div>
            <h3 style="margin-bottom:-4rem">DTI Scans of the Motor Cortex</h3>
            <div class="section">
              <img class="medium" src="/regions/rpcg/Coronal5.png" alt="DTI cutaway back" />
              <img class="medium" src="/regions/rpcg/Sagittal5.png" alt="DTI cutaway side" />
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
    name: 'RightPreCentralGyrus',
    components: {
      CloseButton
    }
  }
</script>
