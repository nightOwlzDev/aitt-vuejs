<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a
          @click="isActived = !isActived"
          role="button"
          :class="'navbar-burger' + className"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="'navbar-menu' + className">
        <router-link to="/" class="navbar-item">{{
          $t("navbar.home")
        }}</router-link>
        <router-link to="/About" class="navbar-item">{{
          $t("navbar.about")
        }}</router-link>
        <router-link to="/Contact" class="navbar-item">Contact</router-link>
        <router-link to="/User" class="navbar-item">User</router-link>
        <router-link to="/Chart" class="navbar-item">Chart</router-link>
        <router-link to="/Filter" class="navbar-item">Filter</router-link>
        <router-link to="/Search" class="navbar-item">Search</router-link>
        <router-link to="/Pagination" class="navbar-item"
          >Pagination</router-link
        >
        <router-link to="/Props" class="navbar-item">Props</router-link>
        <router-link to="/Form" class="navbar-item">Form</router-link>
        <router-link to="/Ref" class="navbar-item">Ref</router-link>
        <router-link to="/DataTables" class="navbar-item"
          >DataTables</router-link
        >
        <router-link to="/Upload" class="navbar-item">Upload</router-link>
        <router-link to="/I18n" class="navbar-item">I18n</router-link>
        <a @click="$i18n.locale = nextLanguage" class="navbar-item" href="#">{{
          nextLanguage.toUpperCase()
        }}</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActived: false
    };
  },
  computed: {
    className() {
      return this.isActived ? "is-active" : "";
    },
    nextLanguage() {
      return this.$i18n.locale === "th" ? "en" : "th";
    }
  },
  methods: {}
};
</script>
