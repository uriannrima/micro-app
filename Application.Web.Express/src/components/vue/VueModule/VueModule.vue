<template>
  <div
    :style="{
      backgroundColor: 'green',
      color: 'white',
      padding: '1em'
    }"
  >
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

<style></style>
