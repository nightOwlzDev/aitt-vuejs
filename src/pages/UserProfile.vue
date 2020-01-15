<template>
  <div>
    <h1 class="title">UserProfile : {{ $route.params.id }}</h1>
    <hr />
    <pre>{{ userprofile }}</pre>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userprofile: []
    };
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
        );
        this.userprofile = res.data;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>
