<template>
  <fragment>
    <router-link class="list-item" :to="'/user/' + user.id">
      {{ user.name }}
    </router-link>
  </fragment>
</template>
<script>
export default {
  props: ["user"]
};
</script>
