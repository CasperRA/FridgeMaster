<template>
<h1>Velkommen til FridgeMasters!</h1>

<section>
  <div>
  <h3>Email</h3>
  <input type="email">
  </div>

<div>
    <h3>Password</h3>
  <input type="password">
</div>
</section>

</template>

<script>
export default {
  name: 'OurNav',
  props: {
    msg: String
  }
}
</script>
