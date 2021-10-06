<template>
<div class="is-fulltofooter">
  <h1 class="has-text-white is-size-3 has-text-centered has-text-weight-bold pt-3 pb-3">Opskrifter</h1>
  <section class="is-flex is-justify-content-space-around">
      <button id="dinner-foods" class="button has-background-warning is-xlarge" style="border: none;" ref="getCatagory" @click="SwapCatagory('dinner')">
            <img class="image is-32x32" src="@/components/photos/restaurant_black_24dp.svg" alt="Recipe Thumbnail">
      </button>
      <button id="breakfast-foods" class="button has-background-success is-xlarge"  style="border: none;" @click="SwapCatagory('breakfast')">
            <img class="image is-32x32" src="@/components/photos/breakfast.svg" alt="Recipe Thumbnail">
      </button>
      <button id="dessert-foods" class="button has-background-success is-xlarge" style="border: none;" @click="SwapCatagory('dessert')" >
            <img class="image is-32x32" src="@/components/photos/cake_black_24dp.svg" alt="Recipe Thumbnail">
      </button>
  </section>
  <h2 id="dinner-text" class="has-text-white is-size-4 ml-5 mt-4 mb-4">Aftensmad du kan lave:</h2>
  <h2 id="breakfast-text" class="has-text-white is-size-4 ml-5 mt-4 mb-4" style="display: none;">Morgenmad/Frokost du<br>kan lave:</h2>
  <h2 id="dessert-text" class="has-text-white is-size-4 ml-5 mt-4 mb-4" style="display: none;">Dessert du kan lave:</h2>
  <section>
    <article id="recipe-box" class="box">
      <div class="media">
        <div class="media-left">
          <div class="image is-128x128">
            <img src="@/components/photos/FoodTemplate.png" alt="Recipe Thumbnail">
          </div>
        </div>
        <div class="media-content">
          <h2 class="is-size-4" id="recipe-title">Example title</h2>
          <p class="is-size-6" id="recipe-description">Example description</p>
          <div class="is-flex">
            <p class="mt-1">X Personer</p>
            <img class="image is-32x32 ml-3" src="@/components/photos/people_black_24dp.svg">
          </div>
          <p>X kcal pr. person</p>
        </div>
      </div>
    </article>
    <article id="recipe-box" class="box">
      <div class="media">
        <div class="media-left">
          <div class="image is-128x128">
            <img src="@/components/photos/FoodTemplate.png" alt="Recipe Thumbnail">
          </div>
        </div>
        <div class="media-content">
          <h2 class="is-size-4" id="recipe-title">Example title</h2>
          <p class="is-size-6" id="recipe-description">Example description</p>
          <div class="is-flex">
            <p class="mt-1">X Personer</p>
            <img class="image is-32x32 ml-3" src="@/components/photos/people_black_24dp.svg">
          </div>
          <p>X kcal pr. person</p>
        </div>
      </div>
    </article>
  </section>
  </div>
</template>

<script>
export default {
  methods: {
      SwapCatagory(category) {
        const dinnercatagory = document.getElementById('dinner-foods');
        const breakfastcatagory = document.getElementById('breakfast-foods');
        const dessertcatagory = document.getElementById('dessert-foods');
        const dinnertext = document.getElementById('dinner-text');
        const breakfasttext = document.getElementById('breakfast-text');
        const desserttext = document.getElementById('dessert-text');

        if (category == 'dinner'){
          // Add highligt colour to pressed button.
          dinnercatagory.classList.add("has-background-warning")
          dinnercatagory.classList.remove("has-background-success")

          // Remove highligt colour from other catagories.
          breakfastcatagory.classList.remove("has-background-warning")
          breakfastcatagory.classList.add("has-background-success")
          dessertcatagory.classList.remove("has-background-warning")
          dessertcatagory.classList.add("has-background-success")

          //Hides/Unhides text
          dinnertext.style.display = "block"
          breakfasttext.style.display = "none"
          desserttext.style.display = "none"
          console.log('Dinner')
        }
        else if (category == 'breakfast'){
          // Add highligt colour to pressed button.
          breakfastcatagory.classList.add("has-background-warning")
          breakfastcatagory.classList.remove("has-background-success")

          // Remove highligt colour from other catagories.
          dinnercatagory.classList.remove("has-background-warning")
          dinnercatagory.classList.add("has-background-success")
          dessertcatagory.classList.remove("has-background-warning")
          dessertcatagory.classList.add("has-background-success")

          //Hides/Unhides text
          dinnertext.style.display = "none"
          breakfasttext.style.display = "block"
          desserttext.style.display = "none"
          console.log('Breakfast/Lunch')
        }
        else if (category == 'dessert'){
          // Add highligt colour to pressed button.
          dessertcatagory.classList.add("has-background-warning")
          dessertcatagory.classList.remove("has-background-success")

          // Remove highligt colour from other catagories.
          breakfastcatagory.classList.remove("has-background-warning")
          breakfastcatagory.classList.add("has-background-success")
          dinnercatagory.classList.remove("has-background-warning")
          dinnercatagory.classList.add("has-background-success")

          //Hides/Unhides text
          dinnertext.style.display = "none"
          breakfasttext.style.display = "none"
          desserttext.style.display = "block"
          console.log('Dessert')
        }
      }
    }
  };
</script>