<template>
  <Upload />
  <Cam />
  <component :is="dynamicComponent"></component> 
</template>

<script>
// @ is an alias to /src
import Cam from '@/components/CamTwo.vue'
import Upload from '@/components/Upload.vue'

export default {
  name: 'Home',
  components: {
    Cam,
    Upload
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
