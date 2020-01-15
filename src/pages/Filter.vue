<template>
  <div>
    <h1 class="title">Filter</h1>

    <div class="field">
      <input v-model="query" type="text" class="input" />
    </div>

    <table class="table">
      <tr>
        <th>
          <a @click.prevent="sortUser('name')" href="#">Name</a>
        </th>
        <th>
          <a @click.prevent="sortUser('username')" href="#">Username</a>
        </th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      <tr v-for="({ id,name,username,email,phone,website }) in filterUser" :key="id">
        <td>{{ name }}</td>
        <td>{{ username }}</td>
        <td>{{ email }}</td>
        <td>{{ phone }}</td>
        <td>{{ website }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";

export default {
  async mounted() {
    let res = await axios.get(url);
    this.users = res.data;
  },
  data() {
    return {
      users: [],
      query: "",
      sortField: "name",
      isAsc: true
    };
  },
  computed: {
    filterUser() {
      const pattern = RegExp(this.query, "i");
      return this.users
        .filter(each => {
          return pattern.test(each.name);
        })
        .sort((b, a) => {
          if (this.isAsc) {
            return a[this.sortField] > b[this.sortField] ? -1 : 1;
          } else {
            return a[this.sortField] < b[this.sortField] ? -1 : 1;
          }
        });
    }
  },
  methods: {
    sortUser(sortField) {
      if (this.sortField === sortField) {
        this.isAsc = !this.isAsc;
      } else {
        this.sortField = sortField;
        this.isAsc = true;
      }
    }
  }
};
</script>