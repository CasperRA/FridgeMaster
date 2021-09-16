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
  <button @click="readData()">Check</button>
</template>

<script>
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
    readData() {
      let copyData = this.$refs.uploadComponent.dataImage;
      console.log(copyData);
      Tesseract.recognize(copyData, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        console.log(text);
        let textToArray = text.split(/\r?\n/);
        console.log(textToArray)
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
