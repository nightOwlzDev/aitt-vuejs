<template>
  <div>
    <h1 class="title has-text-primary">Home</h1>
    <h1 :class="className">Counter : {{ counter }}</h1>
    <p v-if="counter > 5">Counter is too high</p>
    <hr />
    <p v-if="counter <= 5">Counter is OK</p>
    <button class="button" @click="counter += 1">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    };
  },
  computed: {
    className() {
      return this.counter < 5
        ? "title has-text-primary"
        : "title has-text-danger";
    }
  }
};
</script>
