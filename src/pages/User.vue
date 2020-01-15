<template>
  <div>
    <h1 class="title">User</h1>

    <div :class="`modal ${isLoaded ? 'is-active' : ''}`">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
      </div>
      <!-- <button class="modal-close is-large" aria-label="close"></button> -->
    </div>

    <p>
      <button class="button" @click="getUsers()">getuser</button>
    </p>
    <hr />
    <div class="list is-hoverable">
      <user-list-item v-for="(each, idx) in users" :key="idx" :user="each" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import UserListItem from "../components/UserListItem";

const url = "https://jsonplaceholder.typicode.com/users";

export default {
  data() {
    return { users: [], isLoaded: false };
  },
  components: {
    "user-list-item": UserListItem
  },
  methods: {
    async getUsers() {
      try {
        this.isLoaded = true;
        const res = await axios.get(url);
        this.users = res.data;
        this.isLoaded = false;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>
