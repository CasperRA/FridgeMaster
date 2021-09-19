<template>
  <div id="cameraBox" v-show="!isPhotoTaken">
    <video
      id="cameraVideo"
      v-on="enableCam()"
      ref="camera"
      autoplay
      :width="this.camWidth"
      :height="this.camHeight"
      v-show="!isPhotoTaken"
    ></video>
  </div>

  <div id="photoBox">
    <canvas
      v-show="isPhotoTaken"
      id="photoTaken"
      ref="canvas"
      :width="this.camWidth"
      :height="this.camHeight"
    ></canvas>
    <button @click="takePic()">Tag billede</button>
  </div>
</template>

<script>
export default {
  name: "methodCam",

  data() {
    return {
      isPhotoTaken: false,
      camWidth: 640,
      camHeight: 480,
    };
  },

  methods: {
    // Starts cam and uses the constraints to only gather video, then streams the cam to our video object
    enableCam() {
      const camConstraints = (window.camConstraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(camConstraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
          let aspectRatio = stream.getVideoTracks()[0].getSettings().aspectRatio;
          console.log(aspectRatio);
        })
        .catch((error) => {
          alert("Camera Error" + error);
        });
    },

    // Can take a picture by drawing a 2d canvas of the video
    takePic() {
      console.log(this.camWidth, this.camHeight);
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.camera, 0, 0, this.camWidth, this.camHeight);
    },
  },

  // beforeMount(){
  //         this.camHeight = 300,
  //         this.camWidth = 300,
  //         console.log("cam set")
  // }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#cameraBox {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
#cameraVideo {
  max-width: 100%;
  max-height: 90vh;
}
#photoTaken {
  background-color: burlywood;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
}
#photoBox {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
}
</style>