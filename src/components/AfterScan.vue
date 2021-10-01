<template>
<section class="overFooter" style="height: 88%;">
  <h1 class="has-text-white is-size-3 has-text-centered has-text-weight-bold pt-3" style="height: 10%;">Dine Scannet varer</h1>
  <div style="height: 90%; overflow: scroll;" >
    <ul id="dataList"></ul>
  </div>
    
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
      ul.innerHTML += "<li class='varer p-1 pl-4 has-text-white'>" + i + "</li>";
    });
  },
};
</script>
