<template>
  <h1 class="has-text-white is-size-3 has-text-centered has-text-weight-bold pt-3 pb-3">Opskrifter</h1>
  <section class="is-flex is-justify-content-space-around">
      <div class="box has-background-warning">
            <img src="@/components/photos/restaurant_black_24dp.svg" alt="Recipe Thumbnail">
      </div>
      <div class="box has-background-success">
            <img src="@/components/photos/cake_black_24dp.svg" alt="Recipe Thumbnail">
      </div>
      <div class="box has-background-success">
            <img src="@/components/photos/breakfast.svg" alt="Recipe Thumbnail">
      </div>
  </section>
  <h2 class="has-text-white is-size-4 ml-5 mt-4 mb-4">Aftensmad du kan lave:</h2>
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
        </div>
      </div>
    </article>
  </section>
</template>
