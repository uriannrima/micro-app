<template>
  <div class="App">
    <h4 class="Title">Counter {{ counter }}</h4>
    <div class="Body">
      <span>This is a simple Vue App with Vuex rendered by Hypernova.</span>
    </div>
    <div class="Buttons">
      <button @click="increment">
        Increment
      </button>
      <button @click="decrement">
        Decrement
      </button>
    </div>
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
.App {
  background-color: #41b883;
  color: white;
  padding: 1em;
}

.Title {
  text-align: center;
}

.Body,
.Buttons {
  display: flex;
  justify-content: space-between;
}

.Body {
  margin-bottom: 1em;
}

.Body > span {
  text-align: center;
}
</style>
