<template>
  <div class="component-container">
    <img :src="logoSrc" alt="Logo" class="component-logo" />
    <h1>AppType</h1>
  </div>
</template>

<script>
export default {
  name: "AppType.vue",
  data() {
    return {
      logoSrc: require("@/assets/logo.png"), // This will load the image from the assets folder
    }
  }
}
</script>

<style scoped>
.component-container {
  display: flex;
  align-items: center; /* This vertically centers the icon with the text */
}
.component-logo {
  /* Add any styling you want for your logo here */
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
