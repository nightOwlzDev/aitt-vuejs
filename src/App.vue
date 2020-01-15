<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">App</h1>
        <navbar />
        <hr />
        <router-view />
      </div>
    </section>
  </div>
</template>
<script>
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
export default {
  components: {
    navbar: Navbar
  }
};
</script>
