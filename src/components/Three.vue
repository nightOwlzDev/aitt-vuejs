<template>
  <div class="box">
    <h1 class="title">Three</h1>
    <progress class="progress is-warning" :value="counter" max="20"></progress>
    <hr />
    <button @click="resetCounter()" class="button is-danger">
      Reset
    </button>
  </div>
</template>
<script>
import EventBus from "../EventBus";
export default {
  props: ["counter"],
  methods: {
    resetCounter() {
      console.log("resetCounter()");
      EventBus.$emit("resetCounter");
    }
  }
};
</script>
