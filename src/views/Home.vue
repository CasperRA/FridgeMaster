<template>
  <button @click="activeMethod = 'methodUpload', backToMethod = 'enabled'" v-if="backToMethod === 'disabled'">Upload billede</button>
  <button @click="activeMethod = 'methodCam', backToMethod = 'enabled'" v-if="backToMethod === 'disabled'">Brug cam</button>
  <button @click="activeMethod = 'none', backToMethod = 'disabled'" v-if="backToMethod === 'enabled'">Tilbage</button>
  <Upload v-if="activeMethod === 'methodUpload'" />
  <Cam v-if="activeMethod === 'methodCam'" />
</template>

<script>
// @ is an alias to /src
import Cam from '@/components/Camera.vue'
import Upload from '@/components/Upload.vue'

export default {
  name: 'Home',
  components: {
    Cam,
    Upload
  },
  data() {
    return {
      activeMethod: 'none',
      backToMethod: 'disabled'
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
