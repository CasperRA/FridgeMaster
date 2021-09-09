<template>
    <div class="cameraBox">
    <video v-on="enableCam()" ref="camera" autoplay></video>
    </div>

    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
    
    <button @click="takePic()">Take Pic</button>
</template>

<script>
export default {
    name: "OurCamera",

    data() {
        return {
            isPhotoTaken: false
        }
    },

    methods: {
        enableCam() {
            const camConstraints = (window.camConstraints = {
                audio: false,
                video: true
            });

            navigator.mediaDevices
                .getUserMedia(camConstraints)
                .then(stream => {
                    this.$refs.camera.srcObject = stream
                })
                .catch(error => {
                    alert('Camera Error' + error)
                })
        },
        takePic() {
            this.isPhotoTaken = !this.isPhotoTaken;
            const context = this.$refs.canvas.getContext('2d');
            context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
        }
    }
}

</script>

<style scoped>
.cameraBox {
  border: 0.2rem solid #010101;
  background-color: brown;
  border-radius: 12px;
  padding: 2rem;
  max-width: 100%;
  max-height: 100%;
}
.cameraBox video {
    max-width: 100%;
    max-height: 100%;
}

</style>