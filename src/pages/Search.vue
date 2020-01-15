<template>
  <div>
    <h1 class="title">Search</h1>
    <div class="field">
      <input
        @keyup="searchUsers($event.target.value)"
        type="text"
        class="input"
      />
    </div>
    <table class="table">
      <tr v-for="{ id, name, username, email } in users" :key="id">
        <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td>{{ username }}</td>
        <td>{{ email }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import _ from "lodash";

const url = "https://jsonplaceholder.typicode.com/users";
export default {
  created() {
    this.searchUsers = _.debounce(this.searchUsers, 1000);
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    async searchUsers(value) {
      let { data } = await axios.get(`${url}?q=${value}`);
      this.users = data;
    }
  }
};
</script>
