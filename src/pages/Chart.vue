<template>
  <div>
    <h1 class="title">Chart</h1>
    <hr />
    <button
      @click="type = each"
      v-for="(each, idx) in types"
      :key="idx"
      class="button"
    >
      {{ each }}
    </button>
    <hr />
    <button @click="generateSeries()" class="button">Refresh</button>
    <apex-chart :series="series" :type="type" :options="options" />
  </div>
</template>
<script>
export default {
  mounted() {
    this.generateSeries();
  },
  data() {
    return {
      type: "line",
      series: []
    };
  },
  methods: {
    generateSeries() {
      this.series = ["2019", "2018", "2017e"].map(each => {
        return {
          name: each,
          data: new Array(5).fill().map(each => {
            return Math.round(Math.random() * 50);
          })
        };
      });
    }
  },
  computed: {
    types() {
      return ["line", "bar", "histogram", "area", "scatter", "heatmap"];
    },
    // series() {
    //   return ["2019", "2018"].map(each => {
    //     return {
    //       name: each,
    //       data: new Array(5).fill().map(each => {
    //         return Math.round(Math.random() * 50);
    //       })
    //     };
    //   });
    // },
    options() {
      return {
        xaxis: {
          catagories: ["apple", "mango", "orange", "banana", "grape"]
        }
      };
    }
  }
};
</script>
