<template>
  <div>
    <h1 class="title">Contact</h1>

    <pre> {{ users }} </pre>
    <button @click="fetchUser" class="button">
      Fetch Users
    </button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  // computed: {
  //   counter() {
  //     return this.$store.state.counter;
  //   }
  // }
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["fetchUser"])
  }
};
</script>
