<template>
  <div class="box">
    <h1 class="title">One</h1>
    <progress class="progress is-primary" :value="counter" max="40"></progress>
    <two @resetCounter="handleResetCounter()" :counter="counter" />
  </div>
</template>
<script>
import Two from "../components/Two";
export default {
  props: ["counter"],
  components: {
    two: Two
  },
  methods: {
    handleResetCounter() {
      console.log("handleResetCounter at one()");
      this.$emit("resetCounter");
    }
  }
};
</script>
