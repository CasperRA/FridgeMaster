<template>
<!-- Simple input that loads 2 function on change -->
  <h1>Upload eller tag et billede</h1>
  <form id="uploadForm">
    <label id="labelUpload" for="fileToUpload">
      <div class="auto"></div>
      <div id="uploadButton" class="button image is-square is-primary is-rounded is-96x96">
        <img class="image is-square is-96x96" src="@/components/photos/upload.svg" alt="" />
      </div>
      <div class="auto"></div>
    </label>
    <input
      accept="image/*"
      type="file"
      id="fileToUpload"
      v-on:change="uploadImage(), readData()"
      style="visibility: hidden"
    />
  </form>
  <div class="imageContainer">
    <img v-if="dataImage !== 0" id="loading" src="@/components/photos/Loading.svg" alt="">
    <img id="uploadedImage" src="" />
  </div>
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

