<template>
  <div>
    <slot :isLoading="isLoading" :data="data" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["url"],
  data() {
    return {
      data: [],
      isLoading: false
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      let { data } = await axios.get(this.url);
      this.data = data;
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
    }
  }
};
</script>
