<template>
  <div class="box">
    <h1 class="title">Props</h1>
    <p>
      <button @click="counter += 1" class="button">Update {{ counter }}</button>
    </p>
    <hr />
    <timer v-slot="slotProps">
      <h1 class="title">{{ slotProps.now }}</h1>
      <pre> {{ JSON.stringify(slotProps) }}</pre>
    </timer>

    <hr />
    <layout>
      <h1 class="title">Content</h1>
      <p>Lorem</p>
      <template v-slot:header> this is red text </template>
      <template v-slot:footer> this is blue text </template>
    </layout>

    <br />
    <one @resetCounter="handleResetCounter()" :counter="counter" />
  </div>
</template>
<script>
import One from "../components/One";
import Layout from "../components/Layout";
import Timer from "../components/Timer";
import EventBus from "../EventBus";

export default {
  created() {
    EventBus.$on("resetCounter", () => {
      console.log("evetBus");
      this.counter = 1;
    });
  },
  components: {
    one: One,
    layout: Layout,
    timer: Timer
  },
  data() {
    return {
      counter: 1
    };
  },
  methods: {
    handleResetCounter() {
      this.counter = 1;
    }
  }
};
</script>
