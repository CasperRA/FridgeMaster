<template>
  <h1>Dine Scannet varer</h1>
  <ul id="dataList"></ul>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  mounted: function() {
      let scannedArray = this.$parent.scannedArray;
        console.log(scannedArray)
        let ul = document.getElementById("dataList")
        scannedArray.forEach(function(i) {
            ul.innerHTML += '<li>'+ i +'</li>'
        });
}
}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
</style>