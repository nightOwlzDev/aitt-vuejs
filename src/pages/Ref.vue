<template>
  <div>
    <h1 class="title">Ref</h1>
    <input ref="el" type="text" />
    <p>{{ date }}</p>
  </div>
</template>
<script>
import "pikaday/css/pikaday.css";
import Pikaday from "pikaday";

export default {
  data() {
    return {
      date: new Date()
    };
  },
  mounted() {
    new Pikaday({
      field: this.$refs.el,
      onSelect: date => {
        this.date = date;
      }
    });
  },
  beforeDestroy() {
    if (this.ref) {
      this.ref.destroy();
    }
  }
};
</script>
