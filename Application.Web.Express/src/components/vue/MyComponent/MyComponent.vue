<template>
  <div
    :style="{
      backgroundColor: 'green',
      color: 'white',
      padding: '1em'
    }"
  >
    Hello, {{ name }} from Vue!
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
};
</script>

<style></style>
