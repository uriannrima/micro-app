<template>
  <div>
    Hello, {{ name }} from Vue!
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    handleClick() {
      alert("Hello from Vue!");
    }
  }
};
</script>

<style scoped>
div {
  background-color: limegreen;
  color: white;
  padding: 1em;
}
</style>
