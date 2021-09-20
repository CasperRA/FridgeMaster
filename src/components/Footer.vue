<template>
  <footer>
    <button id="footerButtonLeft" class="footerButton">
      <img src="@/components/photos/user.svg" alt="" />
    </button>

    <button id="footerButtonCenter" class="footerButton footerCenterButton" style="visibility: hidden">
      <img src="@/components/photos/cam.svg" alt="" />
    </button>

    <button id="footerButtonRight" class="footerButton" @click="goBack()">
      <img src="@/components/photos/back.svg" alt="" />
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

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  background-color: #4fb578;
  width: 100vw;
  height: 12.5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.footerButton {
  width: 3.25rem;
  height: 3.25rem;
  max-width: 3.25rem;
  max-height: 3.25rem;
  background-color: whitesmoke;
  border-radius: 5rem;
  margin: auto;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-style: solid;
  border-color: #394c4f;
  padding: auto;
}

#footerButtonCenter {
  width: 4.5rem;
  height: 4.5rem;
  max-width: 4.5rem;
  max-height: 4.5rem;
}

#footerButtonCenter img {
  width: 75%;
}

#footerButtonLeft img {
  width: 90%;
}

#footerButtonRight {
  padding: 4px;
}

#footerButtonRight img {
  width: 100%;
}
</style>