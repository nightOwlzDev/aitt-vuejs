<template>
  <div class="box">
    <h1 class="title">Layout</h1>
    <div style="color:red">
      <slot name="header" />
    </div>
    <div style="color:blue">
      <slot name="footer" />
    </div>
    <div style="color:green">
      <slot />
    </div>
  </div>
</template>
<script>
export default {};
</script>
