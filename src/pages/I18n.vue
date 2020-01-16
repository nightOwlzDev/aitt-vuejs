<template>
  <div>
    <h1 class="title">I18N</h1>
    <p>Home : {{ $t("navbar.home") }}</p>
    <p>About : {{ $t("navbar.about") }}</p>

    <hr />
    <p>
      <button @click="changeLanguage()" class="button">
        Change
      </button>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    changeLanguage() {
      console.log(this.$i18n.locale);
      this.$i18n.locale = "en";
    }
  }
};
</script>
