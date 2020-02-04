<template>
  <div>Hello, {{ name }} from React!</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
