<template>
  <footer>
    <button class="footerButton">
      <img src="@/components/photos/user.svg" alt="" />
    </button>

    <button class="footerButton footerCenterButton">
      <img src="" alt="" />
    </button>

    <button class="footerButton">
      <img src="" alt="" />
    </button>
  </footer>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  background-color: #4fb578;
  width: 100vw;
  height: 12vh;
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
}

.footerCenterButton {
  width: 4.5rem;
  height: 4.5rem;
  max-width: 4.5rem;
  max-height: 4.5rem;
}
</style>