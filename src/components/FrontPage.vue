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
      <ul id="groceryList" style="height: 70%">
        <li class="is-flex is-align-items-center">
          <div
            class="
              is-flex is-justify-content-center
              button-circle
              has-background-danger
              p-2
              ml-5
            "
            style="height: 60px; width: 60px"
          >
            <img
              src="@/components/photos/milk.svg"
              alt="category"
              style="height: 100%"
            />
          </div>
          <div id="item1" class="ml-3">
            <div id="">Example Title</div>
            <div class="has-text-danger" id="">Example Date</div>
          </div>
        </li>
      </ul>
      <div class="is-flex is-justify-content-space-around" style="height: 30%">
        <div style="width: 30%;">
          <button
            class="has-background-primary button main-button-rounded"
            style="width: 100%; height: 30vw"
          >
            <img src="@/components/photos/fridge.svg" alt="fridge" />
          </button>
          <h3 class="has-text-centered has-text-weight-bold">Min Liste</h3>
        </div>
        <div style="width: 30%;">
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
export default {
  name: "FrontPage",
  data() {
    return {};
  },
  mounted: function () {},
  methods: {
      goRecipe() {
          this.$parent.recipe = "yes";
      }
  },
};
</script>

