<template>
  <div class="component-container">
    <img :src="logoSrc" alt="Logo" class="component-logo" />
    <h1>AppCalender</h1>
  </div>
</template>

<script>
export default {
  name: "AppCalender.vue",
  data() {
    return {
      activeComponent: null,
      // ... your existing data ...
      leftComponents: [
        // ... 你的代码
      ],
      rightComponents: [
        // ... 你的代码
      ]
    }
  },
  computed: {
    logoSrc() {
      return require("@/assets/logo.png");
    }
  }
}
</script>

<style scoped>
.component-container {
  display: flex;
  align-items: center;
}
.component-logo {
  /* Add any styling you want for your logo here */
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
