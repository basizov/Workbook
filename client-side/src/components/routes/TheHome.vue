<template>
  <section class="home">
    <workbook-grid />
  </section>
</template>

<script lang='ts'>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'Home'
  });
</script>

<style lang='scss' scoped>
  .home {
    position: relative;
    flex: 1;
  }
</style>
