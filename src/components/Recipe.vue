<template>
<div id="recipe-mainview" class="is-fulltofooter" style="display: block;">
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
            <img src="@/components/photos/FoodTemplate.png" alt="Recipe Thumbnail" @click="GetRecipeDetails()">
          </div>
        </div>
        <div class="media-content">
          <h2 class="is-size-4" id="recipe-title">Example title</h2>
          <p class="is-size-6" id="recipe-description">Example description</p>
          <div class="is-flex">
            <p class="mt-1">X Personer</p>
            <img class="image is-32x32 ml-3" src="@/components/photos/people_black_24dp.svg">
          </div>
          <div class="is-flex">
            <p class="mt-1">X kcal pr. person</p>
            <img id="top-expand" class="image is-32x32 ml-3" src="@/components/photos/expand.svg"  @click="ShowInfo('recipe-toplist')">
          </div>
        </div>
      </div>
      <article id="toprecipe" style="display: none;">
        <div class="is-flex mt-4">
          <div>
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
          </div>
          <div class="ml-3">
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </article>
    <article id="recipe-box" class="box">
      <div class="media">
        <div class="media-left">
          <div class="image is-128x128">
            <img src="@/components/photos/FoodTemplate.png" alt="Recipe Thumbnail" @click="GetRecipeDetails()">
          </div>
        </div>
        <div class="media-content">
          <h2 class="is-size-4" id="recipe-title">Example title</h2>
          <p class="is-size-6" id="recipe-description">Example description</p>
          <div class="is-flex">
            <p class="mt-1">X Personer</p>
            <img class="image is-32x32 ml-3" src="@/components/photos/people_black_24dp.svg">
          </div>
          <div class="is-flex">
            <p class="mt-1">X kcal pr. person</p>
            <img id="bottom-expand" class="image is-32x32 ml-3" src="@/components/photos/expand.svg"  @click="ShowInfo('recipe-bottomlist')">
          </div>
        </div>
      </div>
      <article id="bottomrecipe" style="display: none;">
        <div class="is-flex mt-4">
          <div>
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
          </div>
          <div class="ml-3">
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
            <div class="is-flex">
              <img class="image is-32x32 mt-2" src="@/components/photos/katagori-tom.png">
              <div class="ml-3">
                <p>Ingredient</p>
                <p class="has-text-danger">XX/XX - 20XX</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </article>
  </section>
</div>
<div id="recipe-showdetails" class="is-fulltofooter" style="display: none;">
  <h1 class="has-text-white is-size-3 has-text-centered has-text-weight-bold pt-3 pb-3">Example Recipe</h1>
    <section class="ml-6">
      <div class="media">
        <div class="media-left">
          <div class="image is-128x128">
            <img src="@/components/photos/FoodTemplate.png" alt="Recipe Thumbnail" @click="GetRecipeDetails()">
          </div>
        </div>
        <article id="recipe-ingredients" class="media-content is-flex">
          <div>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
          </div>
          <div class="ml-4">
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
            <p class="has-text-white is-size-6">Example</p>
          </div>
        </article>
      </div>
      <article>
        <img class="image mt-4" src="@/components/photos/RecipeStep1.png">
        <p class="has-text-white mt-2 pb-3">
          Du starter med at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl nibh, porttitor id velit quis, ullamcorper
          efficitur quam. Vivamus efficitur facilisis enim vel tempor. Phasellus laoreet, ex nec vulputate tempus, nisi nisl maximus ipsum,
          vel auctor neque lacus eu tellus.
        </p>
        <img class="image mt-4" src="@/components/photos/RecipeStep2.png">
        <p class="has-text-white mt-2 pb-3">
          Du starter med at Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl nibh, porttitor id velit quis, ullamcorper
          efficitur quam. Vivamus efficitur facilisis enim vel tempor. Phasellus laoreet, ex nec vulputate tempus, nisi nisl maximus ipsum,
          vel auctor neque lacus eu tellus.
        </p>
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
      },
      ShowInfo(recipeid) {
        const topid = document.getElementById('toprecipe');
        const bottomid = document.getElementById('bottomrecipe');
        const topidexpand = document.getElementById('top-expand');
        const bottomidexpand = document.getElementById('bottom-expand');

        //Toggles between display none/block
        if (recipeid == 'recipe-toplist'){
          if (topid.style.display === "none") {
            topid.style.display = "block";
            console.log('show')
          } else {
            topid.style.display = "none";
            console.log('hide')
          }
        }
        if (recipeid == 'recipe-bottomlist'){
          if (bottomid.style.display === "none") {
            bottomid.style.display = "block";
            console.log('show')
          } else {
            bottomid.style.display = "none";
            console.log('hide')
          }
        }
      },
      GetRecipeDetails() {
        document.getElementById("recipe-showdetails").style.display = "block"
        document.getElementById("recipe-mainview").style.display = "none"
      }
    }
  };
</script>