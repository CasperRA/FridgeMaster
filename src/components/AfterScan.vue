<template>
  <section class="overFooter" style="height: 88%">
    <h1
      class="
        has-text-white
        is-size-3
        has-text-centered has-text-weight-bold
        pt-3
      "
      style="height: 10%"
    >
      Dine Scannet varer
    </h1>
    <div style="height: 90%; overflow: scroll">
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
    let x = 0;
    let y = 0;
    scannedArray.forEach(function (i) {
      ul.innerHTML +=
        '<li id="scannedItem'+x+'" class="varer py-1.5 px-4 has-text-white is-flex is-justify-content-space-between is-align-items-center">' +
        i +
        '<button id="delete'+x+'" class="button button-circle" style="position: relative; right: 0rem;">' +
        '<span class="icon is-small">' +
        '<img src="@/component/photos/delete.svg">' +
        '</span>' +
        '</button>' +
        '</li>';
        x++
    });
    for (y = 0; y < x; y++) {
      document.getElementById("delete"+y).addEventListener("click", () => 
      document.getElementById("scannedItem"+y).remove(),
      scannedArray.splice(y, 1))
    }
  },
  methods: {
    delete: function(x) {
      console.log("I just got clicked!")
      document.getElementById("scannedItem"+x).remove();
      this.scannedArray.splice(x, 1)
    },
    
  }
};
</script>
