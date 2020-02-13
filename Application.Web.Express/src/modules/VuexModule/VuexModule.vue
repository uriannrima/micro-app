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
import { mapState, mapMutations } from "vuex";
import store from "./store";

export default {
  /** Direct access to the store example:
  computed: {
    counter: () => store.state.counter
  },
  methods: {
    decrement: () => store.commit("decrement"),
    increment: () => store.commit("increment")
  }
  */

  // You may also inject in the "root" component of the module
  // And mappers work as expected
  store,
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    ...mapMutations(["increment", "decrement"])
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
