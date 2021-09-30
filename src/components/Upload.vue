<template>
<!-- Simple input that loads 2 function on change -->
<section style="height: 85%;">
  <h1 class="has-text-white is-size-3 has-text-centered has-text-weight-bold py-4">Upload eller tag et billede</h1>
  <form id="uploadForm" class="bg-image is-clipped" style="height: 100%;">
    <label id="labelUpload" class="is-flex is-justify-content-center is-fullheight" for="fileToUpload">
        <img class="image button is-rounded is-outlined is-96x96 " src="@/components/photos/upload.svg" alt="" />
    </label>
    <input
      accept="image/*"
      type="file"
      id="fileToUpload"
      v-on:change="uploadImage(), readData()"
      style="visibility: hidden"
    />
  </form>
  <div class="imageContainer"  style="height: 0;">
    <img v-if="dataImage !== 0" id="loading" src="@/components/photos/Loading.svg" alt="">
    <img id="uploadedImage" src="" />
  </div>
  </section>
</template>

<script>
export default {
  name: "methodUpload",
  data() {
    return {
      dataImage: 0,
    };
  },
  // UploadImage gets the uploaded file and sets the source of our image tag to the uploaded file, as an URL
  methods: {
    uploadImage() {
      const [file] = document.getElementById("fileToUpload").files;
      if (file) {
        document.getElementById("uploadedImage").src =
          URL.createObjectURL(file);
        this.dataImage = document.getElementById("uploadedImage").src;
        console.log(this.dataImage);
        document.getElementById("uploadForm").style.display = "none"
      }
    },
    // Launches the readData function in Home.vue 
    readData() {
        this.$parent.readData();
    }
  },
};
</script>

