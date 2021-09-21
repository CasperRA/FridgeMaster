<template>
<!-- Simple input that loads 2 function on change -->
  <h1>Upload eller tag et billede</h1>
  <form id="uploadForm">
    <label id="labelUpload" for="fileToUpload">
      <div id="uploadButton">
        <img src="@/components/photos/upload.svg" alt="" />
      </div>
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

<style scoped>
#uploadedImage {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 72.5vh;
  margin-top: 1rem;
}

h1 {
  margin: 0;
  padding-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  color: whitesmoke;
}

#uploadForm {
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;
  height: 75vh;
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
}

#uploadForm::after {
  content: "";
  background: url("photos/foodicons025.png");
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;
}

#uploadForm input {
  display: none;
}

#labelUpload {
  display: flex;
  width: 100%;
}

#uploadButton {
  width: 5.5rem;
  height: 5.5rem;
  max-width: 5.5rem;
  max-height: 5.5rem;
  background-color: whitesmoke;
  border-radius: 100%;
  margin: auto;
  border-style: solid;
  border-color: #394c4f;
  padding: auto;
}

#uploadButton img {
  margin: auto;
  width: 75%;
  padding: 12.5%;
}
</style>
