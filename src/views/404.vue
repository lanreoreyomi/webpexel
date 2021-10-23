<template>
  <div class="div"></div>

</template>

<script>
export default {
name: "404",

  created: function() {
    // Redirect outside the app using plain old javascript
    window.location.href = "/index.html";
  }
}
</script>

<style scoped>

</style>