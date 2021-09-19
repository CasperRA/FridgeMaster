<template>
  <!-- <button
    @click="(activeMethod = 'none'), (backToMethod = 'disabled')"
    v-if="backToMethod === 'enabled'"
  >
    Tilbage
  </button> -->
  <Upload ref="uploadComponent" v-if="this.scanned === false" />
  <AfterScan v-if="this.scanned === true" />
  <Footer />
</template>

<script>
import Cam from "@/components/Camera.vue";
import Upload from "@/components/Upload.vue";
import Footer from "@/components/Footer.vue";
import AfterScan from "@/components/AfterScan.vue";
import Tesseract from "tesseract.js";

export default {
  name: "Home",
  components: {
    Cam,
    Upload,
    Footer,
    AfterScan,
  },
  data() {
    return {
      activeMethod: "none",
      backToMethod: "disabled",
      scanned: false,
      scannedArray: "",
    };
  },
  methods: {
    readData() {
      // Copy our data from the upload component
      let copyUploadData = this.$refs.uploadComponent.dataImage;
      console.log(copyUploadData);

      // Use tesseract.js for OCR
      Tesseract.recognize(copyUploadData, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        console.log(text);

        // create an array containing all lines/items
        let itemsArray = text.split(/\r?\n/);
        console.log(itemsArray);
        this.scannedArray = itemsArray;

        // search for certain items containing numbers or specific words, cut out those irrelevant
        const filterSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        for (let i = 0; i < itemsArray.length; i++) {
          if (filterSymbols.test(itemsArray[i])) {
            console.log("Symbol found " + i);

            // I have to make a solution that checks for numbers or words and cuts out those certain items
          } else if ((i = itemsArray.length)) {
            this.scanned = true;
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
  min-height: 100vh;
  max-height: 100vh;
}
</style>
