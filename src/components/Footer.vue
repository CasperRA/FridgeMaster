<template>
  <footer>
    <!-- Our footer buttons, that will be used for navigating important pages -->
    <button id="footerButtonLeft" class="footerButton">
      <img src="@/components/photos/user.svg" alt="User Icon" />
    </button>

    <button id="footerButtonCenter" class="footerButton footerCenterButton" style="visibility: hidden">
      <img src="@/components/photos/cam.svg" alt="Scan Icon" />
    </button>

    <button id="footerButtonRight" class="footerButton" @click="goBack()">
      <img src="@/components/photos/back.svg" alt="Go Back Icon" />
    </button>
  </footer>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  methods: {
      goBack() {
          this.$parent.scanned = false;
          console.log("went back")
      }
  }
};
</script>
