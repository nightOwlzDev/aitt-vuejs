<template>
  <div>
    <h1 class="title">
      DataTables
    </h1>
    <p :style="{ marginBottom: '15px' }">
      <button @click="initDataTables()" class="button">
        Initialize
      </button>
    </p>
    <hr />
    <table ref="el" class="table">
      <thead>
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";

import $ from "jquery";
import DataTables from "datatables";
import "datatables/media/css/jquery.dataTables.min.css";

const url = "https://jsonplaceholder.typicode.com/posts";

export default {
  methods: {
    async initDataTables() {
      let { data } = await axios.get(url);
      if (this.datatableRef) {
        this.datatableRef.destroy();
      }
      this.datatableRef = $(this.$refs.el).DataTable({
        data: data,
        columns: ["id", "userId", "title", "body"].map(each => ({ data: each }))
      });
    }
  },
  beforeDestroy() {
    if (this.datatableRef) {
      this.datatableRef.destroy();
    }
  }
};
</script>
