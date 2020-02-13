<template>
  <div>
    <span>Counter {{ counter }}</span>
    <button @click="increment">
      Increment
    </button>
    <button @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script>
import store from "./store";

export default {
  computed: {
    counter: store.state.counter
  },
  methods: {
    decrement: () => store.commit("decrement"),
    increment: () => store.commit("increment")
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
