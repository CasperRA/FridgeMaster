<template>
  <button
    @click="(activeMethod = 'methodUpload'), (backToMethod = 'enabled')"
    v-if="backToMethod === 'disabled'"
  >
    Upload billede
  </button>
  <button
    @click="(activeMethod = 'methodCam'), (backToMethod = 'enabled')"
    v-if="backToMethod === 'disabled'"
  >
    Brug cam
  </button>
  <button
    @click="(activeMethod = 'none'), (backToMethod = 'disabled')"
    v-if="backToMethod === 'enabled'"
  >
    Tilbage
  </button>
  <Upload v-if="activeMethod === 'methodUpload'" ref="uploadComponent" />
  <Cam v-if="activeMethod === 'methodCam'" ref="camComponent" />
  <button @click="checkData()">Check</button>
</template>

<script>
// @ is an alias to /src
import Cam from "@/components/Camera.vue";
import Upload from "@/components/Upload.vue";
import Tesseract from "tesseract.js";

export default {
  name: "Home",
  components: {
    Cam,
    Upload,
  },
  data() {
    return {
      activeMethod: "none",
      backToMethod: "disabled",
    };
  },
  methods: {
    checkData() {
      let copyData = this.$refs.uploadComponent.dataImage;
      let reader = new FileReader();
      reader.readAsDataURL(copyData);
      reader.onloadend = function() {
        let base64data = reader.result;
      console.log(base64data);
      }
      
    },
    readData() {
      // let copyData = this.$refs.uploadComponent.dataImage;
      // console.log(copyData);
      Tesseract.recognize("screenshotBon.jpg", "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        console.log(text);
      })
    },
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
