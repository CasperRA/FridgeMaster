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

<style scoped>
h1 {
  background-color: #5cd48c;
  color: whitesmoke;
  margin: 0;
  padding-top: 1.5rem;
}
ul {
  list-style: none;
  padding: 0;
  color: whitesmoke;
}
.overFooter {
  min-height: 80vh;
  max-height: 80vh;
  overflow: scroll;
}
</style>