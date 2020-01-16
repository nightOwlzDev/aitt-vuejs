<template>
  <div>
    <h1 class="title">User</h1>

    <button @click="isStart = true" class="button">Start</button>
    <hr />
    <!-- <ajax
      v-if="isStart"
      v-slot="{ data, isLoading }"
      :url="'https://jsonplaceholder.typicode.com/users'"
    >
      <div :class="`modal ${isLoading ? 'is-active' : ''}`">
        <div class="modal-background"></div>
        <div class="modal-content">
          <h1 class="title">Loading ...</h1>
        </div>
      </div>
      <div class="list is-hoverable">
        <user-list-item v-for="(each, idx) in data" :key="idx" :user="each" />
      </div>
    </ajax> -->
    <!-- <p>
      <button class="button" @click="getUsers()">getuser</button>
    </p>-->
    <div class="list is-hoverable">
      <user-list-item v-for="(each, idx) in users" :key="idx" :user="each" />
    </div>
  </div>
</template>
<script>
import Ajax from "../components/Ajax";
import { mapState, mapActions } from "vuex";

import UserListItem from "../components/UserListItem";

// const url = "https://jsonplaceholder.typicode.com/users";

export default {
  data() {
    return { isStart: false };
    // users: [],
    // isLoaded: false
  },
  components: {
    "user-list-item": UserListItem,
    ajax: Ajax
  },
  computed: {
    ...mapState(["users"])
  }
  // methods: {
  //   async getUsers() {
  //     try {
  //       this.isLoaded = true;
  //       const res = await axios.get(url);
  //       this.users = res.data;
  //       this.isLoaded = false;
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  // }
};
</script>
