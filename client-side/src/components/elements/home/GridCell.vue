<template>
  <div
    class="page"
    ref="page"
    :style="{
      'grid-template-columns': `repeat(${cellWidth}, ${side / 10}rem)`
    }"
  ><div
    class="page-item"
    v-for="i in cells"
    :key="i"
    :style="{
      'width': '${side / 10}rem',
      'height': '${side / 10}rem'
    }"
  ></div></div>
</template>

<script lang='ts'>
  import { defineComponent, onMounted, PropType, ref } from "vue";

  export default defineComponent({
    name: 'GridCell',
    props: {
      side: {
        type: Number as PropType<number>,
        required: true
      }
    },
    setup({ side }) {
      const page = ref<HTMLDivElement | null>(null);
      const cells = ref<number[]>([]);
      const cellWidth = ref<number>(0);

      onMounted(() => {
        if (page.value) {
          cellWidth.value = Math.ceil(page.value.clientWidth / side);
          const height = Math.ceil(page.value.clientHeight / side);
          const cellsNumber = cellWidth.value * height;

          cells.value = Array.from(Array(cellsNumber).keys());
        }
      });
      return {
        page,
        cells,
        cellWidth
      }
    }
  });
</script>

<style lang='scss' scoped>
  .page {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: .1rem;
    background-color: var(--secondary);
    border: .1rem solid var(--secondary);
    overflow: hidden;
    &-item {
      background-color: var(--primary);
    }
  }
</style>
