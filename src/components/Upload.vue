<template>
<!-- Simple input that loads 2 function on change -->
<section class="bg-image" style="height: 88%;">
  <div class="is-flex is-justify-content-center is-align-items-center" style="height: 15%;">
<h1 class="has-text-white is-size-3 has-text-weight-bold has-text-centered pt-3">Upload eller tag et billede</h1>
  </div>
  <form id="uploadForm" class="is-clipped" style="height: 85%;">
    <label id="labelUpload" class="is-flex is-justify-content-center" for="fileToUpload" style="height: 100%; Align-items: center;">
        <img class="image button is-rounded is-outlined is-96x96 " src="@/components/photos/upload.svg" alt="" style="margin-bottom:17%;"/>
    </label>
    <input
      accept="image/*"
      type="file"
      id="fileToUpload"
      v-on:change="uploadImage(), readData()"
      style="visibility: hidden"
    />
  </form>
  <div id="scanImageContainer" style="display:none">
    <img v-if="dataImage !== 0" id="loading" src="@/components/photos/Loading.svg" alt="" style="width: 50%; position: absolute" class="image">
    <img id="uploadedImage" src=""/>
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
        document.getElementById("scanImageContainer").style.display = "flex"
        document.getElementById("footerButtonCenter").style.display = "none"
        document.getElementById("footerButtonCenter2").style.display = "block"
      }
    },
    // Launches the readData function in Home.vue 
    readData() {
        this.$parent.readData();
    }
  },
};
</script>

