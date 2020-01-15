<template>
  <div class="box">
    <!-- <h1 class="title">Timer</h1>
    <p>{{ now }}</p> -->
    <slot :now="now" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      now: null
    };
  },
  mounted() {
    this.ref = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.ref);
  }
};
</script>
