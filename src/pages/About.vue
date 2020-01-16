<template>
  <div>
    <h1 class="title">About</h1>
    <p>
      <button @click="mutateCounter(10)" class="button">
        Update Counter (Vuex)
      </button>
    </p>
    <figure class="image">
      <img @click="selected = !selected" src="/image.png" :style="style" />
    </figure>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      selected: false
    };
  },
  methods: {
    ...mapMutations(["mutateCounter"])
    // updateCounter() {
    //   this.$store.commit("mutateCounter", 5);
    // }
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
