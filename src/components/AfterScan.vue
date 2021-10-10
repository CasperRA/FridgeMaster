<template>
  <section class="overFooter" style="height: 88%">
    <div
      class="is-flex is-justify-content-center is-align-items-center"
      style="height: 10%"
    >
      <h1
        class="has-text-white is-size-3 has-text-centered has-text-weight-bold"
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
import { getDatabase, ref, set, remove, update } from "firebase/database";

export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      finalArray: [],
      removedItems: false,
    };
  },
  // On load, gets the scanned array, from Home.vue and makes list items for each item in the array
  mounted: function () {
    this.startup();
  },
  methods: {
    startup() {
      this.finalArray = this.$parent.scannedArray;
      console.log(this.finalArray);
      let ul = document.getElementById("dataList");
      let x = 0;
      let self = this;
      document.getElementById("footerButtonCenter2").style.visibility = "visible";
      this.finalArray.forEach(function (i) {
        ul.innerHTML +=
          '<li id="scannedItem' +
          x +
          '" class="varer py-1.5 pl-4 pr-2 has-text-white is-flex is-justify-content-space-between is-align-items-center"style=" text-overflow: ellipsis; width: 100%;">' +
          '<div class="is-flex pr-2" style="width: 55%; text-overflow: ellipsis; overflow: hidden;">' +
          i +
          "</div>" +
          '<div class="is-flex is-justify-content-space-between" style="width: 45%;">' +
          '<input id="dateInput'+x+'" type="date"  min="2021-05-10" style="width: 68%">' +
          '<div class="is-flex is-justify-content-end" style="width: 30%; text-overflow: ellipsis; overflow: hidden;">' +
          '<button id="delete' +
          x +
          '" class="button button-circle image-delete has-background-danger" style="position: relative; right: 0rem; width:44px; height:44px">' +
          "</button>" +
          "</div>" +
          "</div>" +
          "</li>";
        x++;
      });
      for (let y = 0; y < x; y++) {
        let deleteButton = document.getElementById("delete" + y);
        let item = document.getElementById("scannedItem" + y);
        let date = document.getElementById("dateInput" + y)
        let self = this;
        let remover = function () {
          item.remove(), self.deleteFromDB("item" + y);
        };

        console.log(this.finalArray[y]);
        deleteButton.addEventListener("click", remover);
        date.addEventListener("input", function(){
          const db = getDatabase();
          let expirationDate = date.value;
          let itemId = "item"+y;
          update(ref(db, "users/user1/food/" + itemId), {
        expiration: expirationDate,
      });
        })
      };
    },

  deleteFromDB(itemId) {
          const db = getDatabase();
      remove(ref(db, "users/user1/food/" + itemId));
  },



    // reArrange() {
    //   if (this.removedItems == false) {
    //     let itemCounter = 0;
    //     this.removedItems = true
    //     for (let z = 0; z < this.$parent.scannedArray.length; z++) {
    //       let deleteButton = document.getElementById("delete" + z);
    //       let item = document.getElementById("scannedItem" + z);
    //       let self = this;
    //       let remover = function () {
    //         item.remove(),
    //           self.finalArray.splice(itemCounter, 1),
    //           self.reArrange();
    //       };
    //       console.log(z);
    //       if (typeof item != "undefined" && item != null) {
    //         let clone = deleteButton.cloneNode(true);
    //         deleteButton.replaceWith(clone);
    //         clone.id = "delete" + itemCounter;
    //         clone.addEventListener("click", remover);
    //         itemCounter++;
    //         console.log("yep " + z);
    //       } else {
    //         console.log(z + " Element does not exist!");
    //       }
    //     }
    //   }
    //   else {
    //     let itemCounter = 0;
    //     for (let z = 0; z < this.$parent.scannedArray.length; z++) {
    //       let deleteButton = document.getElementById("delete" + z);
    //       let cloneEvent = document.getElementById("delete" + itemCounter);
    //       let item = document.getElementById("scannedItem" + z);
    //       let self = this;
    //       let remover = function () {
    //         item.remove(),
    //           self.finalArray.splice(itemCounter, 1),
    //           self.reArrange();
    //       };
    //       if (typeof item != "undefined" && item != null && deleteButton != null) {
    //         let clone = cloneEvent.cloneNode(true);
    //         cloneEvent.replaceWith(clone);
    //         clone.id = "delete" + itemCounter;
    //         cloneEvent.addEventListener("click", remover);
    //         itemCounter++;
    //         console.log("yep " + z);
    //       } else {
    //         console.log(z + " Element does not exist!");
    //       }
    //     }
    //   }
    // },
  },
};
</script>
