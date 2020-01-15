<template>
  <div>
    <h1 class="title">Pagination</h1>

    <nav class="pagination">
      <ul class="pagination-list">
        <li v-for="each in totalPage" :key="each">
          <router-link :class="className(each)" :to="'/pagination?p=' + each">{{
            each
          }}</router-link>
        </li>
      </ul>
    </nav>

    <table class="table">
      <tr v-for="{ id, title, body } in posts" :key="id">
        <td>{{ id }}</td>
        <td>{{ title }}</td>
        <td>{{ body }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
const limit = 9;
const url = "https://jsonplaceholder.typicode.com/posts";
export default {
  watch: {
    "$route.query"(value) {
      const page = parseInt(value.p);
      this.getPosts(page);
    },
    totalPage() {}
  },
  data() {
    return {
      posts: [],
      totalPage: 0
    };
  },
  mounted() {
    const currentPage = this.$route.query.p ? parseInt(this.$route.query.p) : 1;
    this.getPosts(currentPage);
  },
  methods: {
    async getPosts(page = 1) {
      let { data, headers } = await axios.get(
        `${url}?_limit=${limit}&_page=${page}`
      );
      const totalPosts = parseInt(headers["x-total-count"]);
      this.totalPage = Math.ceil(totalPosts / limit);

      this.posts = data;
    },
    className(page) {
      const currentPage = this.$route.query.p
        ? parseInt(this.$route.query.p)
        : 1;
      return currentPage === page
        ? "pagination-link is-current"
        : "pagination-link";
    }
  }
};
</script>
