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
      // Copy our data from the upload component
      let copyData = this.$refs.uploadComponent.dataImage;
      console.log(copyData);

      // Use tesseract.js for OCR
      Tesseract.recognize(copyData, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        console.log(text);

        // create an array containing all lines/items
        let textToArray = text.split(/\r?\n/);
        console.log(textToArray);

        // search for certain items containing numbers or specific words, cut out those irrelevant
        const filterSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        for (let i = 0; i < textToArray.length; i++) {
          if (filterSymbols.test(textToArray[i])) {
            console.log("Symbol found " + i);

            // I have to make a solution that checks for numbers or words and cuts out those certain items
            
          }
        }
      });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
