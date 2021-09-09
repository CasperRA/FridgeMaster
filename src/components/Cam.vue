<template>
<h1>Velkommen til FridgeMasters!</h1>

<div class="cameraBox">
    <video ref="camera" width="450" height="650" autoplay></video>
</div>

</template>

<script>
export default {
  name: 'Cam',
  props: {
    msg: String
  }
}

function enableCam () {
  const camConstraints = (window.camConstraints = {
    audio: false,
    video: true
  })

  navigator.mediaDevices
    .getUserMedia(camConstraints)
    .then(stream => {
      this.$refs.camera.srcObject = stream
    })
    .catch(error => {
      console.log(error)
      alert('Camera Error')
    })
};
enableCam()
</script>
