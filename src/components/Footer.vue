<template>
  <footer
    class="
      is-flex is-justify-content-space-evenly
      mb-0
      has-background-primary-dark
      footer-max
    "
  >
    <!-- Our footer buttons, that will be used for navigating important pages -->
    <button id="footerButtonLeft" class="button button-circle is-large">
      <span class="icon"
        ><img src="@/components/photos/user.svg" alt="User Icon"
      /></span>
    </button>
    <button
      id="footerButtonCenter"
      class="button-circle is-xlarge is-outlined has-background-white"
      @click="goScan()"
      v-if="this.$parent.scanning === 'no'"
    >
      <img src="@/components/photos/cam.svg" alt="Scan Icon" />
    </button>
    <button
      id="footerButtonCenter2"
      class="button-circle is-xlarge is-outlined has-background-white"
      style="visibility:hidden;"
      @click="accept()"
      v-if="this.$parent.scanning !== 'no'"
    >
      <img src="@/components/photos/checkmark.svg" alt="Scan Icon" />
    </button>
    <button
      id="footerButtonRight"
      class="button-circle button is-large"
      @click="goBack()"
      v-if="this.$parent.scanning !== 'no' || this.$parent.recipe !== 'no'"
    >
      <span class="icon is-large"
        ><img src="@/components/photos/back.svg" alt="Camera"
      /></span>
    </button>
    <button
      id="footerButtonRight"
      class="button-circle button is-large"
      style="visibility: hidden"
      v-if="this.$parent.scanning === 'no' && this.$parent.recipe === 'no'"
    >
      <span class="icon is-large"
        ><img src="@/components/photos/back.svg" alt="Camera"
      /></span>
    </button>
  </footer>
  <div id="accepted-modal" class="modal" @click="closeModal()">
    <div class="modal-background"></div>
    <div class="modal-content acceptModal">
      <div class="has-background-primary acceptModalContent">
        <h2 class="has-text-white px-2 has-text-weight-bold is-size-4">
          Dine varer er blevet tilføjet
        </h2>
        <img src="@/components/photos/checkmark.svg" alt="Checkmark" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  methods: {
    // Swaps between pages by changing data values (v-if is on the components)
    goBack() {
      this.$parent.scanning = "no";
      this.$parent.recipe = "no";
    },
    goScan() {
      this.$parent.scanning = "yes";
      this.$parent.recipe = "no";
    },
    //Opens and closes the modal
    accept() {
      document.getElementById("accepted-modal").classList.add("is-active");
    },
    closeModal() {
      document.getElementById("accepted-modal").classList.remove("is-active");
      this.$parent.scanning = "no";
    },
  },
};
</script>
