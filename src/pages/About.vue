<template>
  <div>
    <h1 class="title">About</h1>
    <figure class="image">
      <img @click="selected = !selected" src="/image.png" :style="style" />
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false
    };
  },
  computed: {
    style() {
      return this.selected
        ? { cursor: "pointer", border: "solid red 2px" }
        : { cursor: "pointer" };
    }
  }
};
</script>
