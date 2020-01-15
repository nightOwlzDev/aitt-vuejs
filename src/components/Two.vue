<template>
  <div class="box">
    <h1 class="title">Two</h1>
    <progress class="progress is-link" :value="counter" max="30"></progress>
    <three @resetCounter="handleResetCounter()" :counter="counter" />
  </div>
</template>
<script>
import Three from "../components/Three";
export default {
  props: ["counter"],
  components: {
    three: Three
  },
  methods: {
    handleResetCounter() {
      console.log("handleResetCounter()");
      this.$emit("resetCounter");
    }
  }
};
</script>
