<template>
  <body class="has-background-black is-fullscreen is-family-primary has-text-white">
    <!-- <button @click="writeFoodData('item2', 'spegepølse', '15-10-2021')">Send DATA</button> -->
    <FrontPage v-if="this.scanning === 'no' && this.recipe === 'no'"/>
    <Upload ref="uploadComponent" v-if="this.scanning === 'yes'" />
    <AfterScan v-if="this.scanning === 'complete'" />
    <Recipe v-if="this.recipe === 'yes'" />
    <Footer />
  </body>
</template>

<script>
import FrontPage from "@/components/FrontPage.vue";
import Recipe from "@/components/Recipe.vue";
import Cam from "@/components/Camera.vue";
import Upload from "@/components/Upload.vue";
import Footer from "@/components/Footer.vue";
import AfterScan from "@/components/AfterScan.vue";
import Tesseract from "tesseract.js";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.js";
import { getDatabase, ref, set, push } from "firebase/database";

export default {
  name: "Home",
  components: {
    FrontPage,
    Recipe,
    Cam,
    Upload,
    Footer,
    AfterScan,
  },

  data() {
    return {
      scanning: "no",
      scannedArray: "",
      recipe: "no"
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
        let combinedArray = [];
        let testNumbers = /\d/;
        // search for certain items containing numbers or specific words, cut out those irrelevant
        const filterSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        for (let c = 0; c < itemsArray.length; c++) {
          if (testNumbers.test(itemsArray[c].toString()) == false) {
            console.log(
              "removing " + itemsArray[c] + " because of no numbers " + c
            );
            itemsArray.splice(c, 1);
          }
        }

        for (let b = 0; b < itemsArray.length; b++) {
          if (testNumbers.test(itemsArray[b].toString()) == false) {
            console.log(
              "removing " + itemsArray[b] + " because of no numbers " + b
            );
            itemsArray.splice(b, 1);
          }
        }

        for (let a = 0; a < itemsArray.length; a++) {
          if (
            itemsArray[a].includes("RABAT") == true ||
            itemsArray[a].includes("PANT") == true ||
            itemsArray[a].includes("Pant") == true ||
            itemsArray[a].includes("Rabat") == true ||
            itemsArray[a].includes("pant") == true ||
            itemsArray[a].includes("rabat") == true
          ) {
            itemsArray.splice(a, 1);
          }
        }

        for (let i = 0; i < itemsArray.length; i++) {
          console.log(i);
          if (
            itemsArray[i].includes("RABAT") == true ||
            itemsArray[i].includes("PANT") == true ||
            itemsArray[i].includes("Pant") == true ||
            itemsArray[i].includes("Rabat") == true ||
            itemsArray[i].includes("pant") == true ||
            itemsArray[i].includes("rabat") == true ||
            itemsArray[i] == null
          ) {
            itemsArray.splice(i, 1);
          } else {
            let arrayString = itemsArray[i].toString();
            arrayString = arrayString.split(" ");
            let arrayStringPopped = arrayString.pop();
            arrayString = arrayString.join(" ");
            if (arrayString === null) {
            } else {
              console.log(arrayString);
              combinedArray = combinedArray.concat(arrayString);
            }
          }

          if (i == itemsArray.length - 1) {
            this.scannedArray = combinedArray;
            this.scanning = "complete";
            this.uploadArray();
          }
        }
      });
    },
    writeFoodData(itemId, itemName, itemDate) {
      const db = getDatabase();
      set(ref(db, "users/user1/food/" + itemId), {
        name: itemName,
        expiration: itemDate,
      });
    },
    uploadArray() {
      let itemNumber = 0;
      let date = "ingen dato";
      let self = this;
      this.scannedArray.forEach(function (i) {
        self.writeFoodData("item"+itemNumber, i , date);
        itemNumber++
      });
    },
  },
};
</script>

