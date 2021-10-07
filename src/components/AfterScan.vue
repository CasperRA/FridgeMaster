<template>
  <section class="overFooter" style="height: 88%">
    <div class="is-flex is-justify-content-center is-align-items-center" style="height: 10%">
      <h1
        class="
          has-text-white
          is-size-3
          has-text-centered has-text-weight-bold
        "
      >
        Dine Scannet varer
      </h1>
    </div>
    <div class="pb-5" style="height: 90%; overflow: scroll">
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
  data() {
    return {
      finalArray: [],
    };
  },
  // On load, gets the scanned array, from Home.vue and makes list items for each item in the array
  mounted: function () {
    this.finalArray = this.$parent.scannedArray;
    console.log(this.finalArray);
    let ul = document.getElementById("dataList");
    let x = 0;
    let y = 0;
    this.finalArray.forEach(function (i) {
      ul.innerHTML +=
        '<li id="scannedItem' +
        x +
        '" class="varer py-1.5 px-4 has-text-white is-flex is-justify-content-space-between is-align-items-center"style=" text-overflow: ellipsis; width: 100%;">' +
        '<div class="is-flex" style="width: 55%; text-overflow: ellipsis; overflow: hidden;">' +
        i +
        '</div>' +
        '<div class="is-flex is-justify-content-space-between" style="width: 43%;">' +
        '<input type="date"  min="2021-05-10" style="width: 70%">' +
        '<div class="is-flex is-justify-content-end" style="width: 30%; text-overflow: ellipsis; overflow: hidden;">' +
        '<button id="delete' +
        x +
        '" class="button button-circle" style="position: relative; right: 0rem;">' +
        '<span class="icon is-small">' +
        '<img src="@/component/photos/delete.svg">' +
        "</span>" +
        "</button>" +
         "</div>" +
        "</div>" +
        "</li>";
      x++;
    });
    for (let y = 0; y < x; y++) {
      let deleteButton = document.getElementById("delete" + y);
      let item = document.getElementById("scannedItem" + y);
      let self = this;
      console.log(this.finalArray[y]);
      deleteButton.addEventListener("click", function () {
        item.remove(), self.finalArray.splice(y, 1);
      });
    }
  },
  methods: {
    checkArray() {
      console.log(this.finalArray);
    },
  },
};
</script>
