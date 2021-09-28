<template>
  <h1>Dine Scannet varer</h1>
  <section class="overFooter">
    <ul id="dataList"></ul>
  </section>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  // On load, gets the scanned array, from Home.vue and makes list items for each item in the array
  mounted: function () {
    let scannedArray = this.$parent.scannedArray;
    console.log(scannedArray);
    let ul = document.getElementById("dataList");
    scannedArray.forEach(function (i) {
      ul.innerHTML += "<li>" + i + "</li>";
    });
  },
};
</script>
