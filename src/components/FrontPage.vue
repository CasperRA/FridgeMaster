<template>
  <!-- Simple input that loads 2 function on change -->
  <section style="height: 88%">
    <div
      class="is-flex is-justify-content-center is-align-items-center"
      style="height: 15%"
    >
      <h1
        class="
          has-text-white
          is-size-3
          has-text-weight-bold has-text-centered
          pt-3
        "
      >
        Varer der snart udløber
      </h1>
    </div>
    <div style="height: 85%" class="pt-2">
      <ul class="pb-2" id="groceryList" style="height: 70%; overflow: scroll; overflow-x:hidden;">
        
      </ul>
      <div class="is-flex is-justify-content-space-around is-align-items-center" style="height: 30%">
        <div style="width: 30%">
          <button
            class="has-background-primary button main-button-rounded"
            style="width: 100%; height: 30vw"
          >
            <img src="@/components/photos/fridge.svg" alt="fridge" />
          </button>
          <h3 class="has-text-centered has-text-weight-bold">Min Liste</h3>
        </div>
        <div style="width: 30%">
          <button
            class="has-background-primary button main-button-rounded"
            style="width: 100%; height: 30vw"
            @click="goRecipe()"
          >
            <img src="@/components/photos/recipe.svg" alt="fridge" />
          </button>
          <h3 class="has-text-centered has-text-weight-bold">Opskrifter</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  getDatabase,
  ref,
  set,
  remove,
  update,
  child,
  get,
} from "firebase/database";

export default {
  name: "FrontPage",
  data() {
    return {};
  },
  mounted: function () {
    let ul = document.getElementById("groceryList");
    console.log(ul);
    let itemsAmount = 0;
    let itemName;
    let itemDate;
    let itemsMax = 150;
    const db = getDatabase();
    let dbref = ref(db);
    for (let x = 0; x < itemsMax; x++) {
      get(child(dbref, "users/user1/food/item" + x)).then((snapshot) => {
        if (snapshot.exists()) {
          itemsAmount++;
          itemName = snapshot.val().name;
          itemDate = snapshot.val().expiration;
          console.log(itemName, itemDate);
          ul.innerHTML +=
            "<li class='itemTransition is-flex is-align-items-center mt-2'><div class='is-flex is-justify-content-center button-circle has-background-danger ml-4 image-milk' style='height: 60px; width: 60px'></div>    <div class='ml-3' id='item" +
            x +
            "'>            <div>"+itemName+"</div> <div class='has-text-danger'>"+itemDate+"</div></div> </li>";
        } else {
          console.log("Nothing found on " + x);
        }
      });
    }
  },
  methods: {
    goRecipe() {
      this.$parent.recipe = "yes";
    },
  },
};
</script>

