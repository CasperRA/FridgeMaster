<template>
  <footer class="footer is-flex is-justify-content-space-evenly mb-0 has-background-primary">
    <!-- Our footer buttons, that will be used for navigating important pages -->
    <button id="footerButtonLeft" class="button button-circle is-large my-1">
      <span class="icon"
        ><img src="@/components/photos/user.svg" alt="User Icon"
      /></span>
    </button>
    <button id="footerButtonCenter" class="button button-circle is-large my-1">
      <span class="icon"
        ><img src="@/components/photos/cam.svg" alt="Scan Icon"
      /></span>
    </button>
    <button
      id="footerButtonRight"
      class="button-circle button is-large my-1"
      @click="goBack()"
    >
      <span class="icon"
        ><img src="@/components/photos/back.svg" alt=""
      /></span>
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
      console.log("went back");
    },
  },
};
</script>
