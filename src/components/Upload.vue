<template>
    <form id="uploadForm">
        <div class="row">
            <label for="fileToUpload">Vælg et billede at uploade</label><br />
            <input accept="image/*" type="file" id="fileToUpload" v-on:change="uploadImage()" />
        </div>
    </form>
    <div class="imageContainer">
    <img id="uploadedImage" src="" alt="uploaded image" >
    </div>
</template>

<script>
export default {
  name: 'methodUpload',
  methods: {
      uploadImage() {
          const [file] = document.getElementById("fileToUpload").files
          if (file) {
              document.getElementById("uploadedImage").src = URL.createObjectURL(file)
          }

      }
  }
}
</script>

<style scoped>
#uploadedImage {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 100%;
}
</style>
