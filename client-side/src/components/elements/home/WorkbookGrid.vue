<template>
  <section class="grid">
    <div class="grid__field"></div>
    <div
      class="grid__page grid__left"
      ref="leftPage"
      :style="{
        'grid-template-columns': `repeat(${cellWidthLeft}, ${side / 10}rem)`
      }"
    ><div class="grid__page-item" v-for="i in cellsLeft" :key="i"></div></div>
    <div class="grid__binding"></div>
    <div
      class="grid__page grid__right"
      ref="rightPage"
      :style="{
        'grid-template-columns': `repeat(${cellWidthRight}, ${side / 10}rem)`
      }"
    ><div class="grid__page-item" v-for="i in cellsRight" :key="i"></div></div>
    <div class="grid__field"></div>
  </section>
</template>

<script lang='ts'>
  import { defineComponent, onMounted, ref } from "vue";

  export default defineComponent({
    name: 'WorkbookGrid',
    setup() {
      const leftPage = ref<HTMLDivElement | null>(null);
      const rightPage = ref<HTMLDivElement | null>(null);
      const cellsLeft = ref<number[]>([]);
      const cellsRight = ref<number[]>([]);
      const cellWidthLeft = ref<number>(0);
      const cellWidthRight = ref<number>(0);
      const side = 10;

      onMounted(() => {
        if (leftPage.value) {
          cellWidthLeft.value = Math.ceil(leftPage.value.clientWidth / side);
          const height = Math.ceil(leftPage.value.clientHeight / side);
          const cellsNumber = cellWidthLeft.value * height;

          console.log(cellWidthLeft.value, height);
          cellsLeft.value = Array.from(Array(cellsNumber).keys());
        }
        if (rightPage.value) {
          cellWidthRight.value = Math.ceil(rightPage.value.clientWidth / side);
          const height = Math.ceil(rightPage.value.clientHeight / side);
          const cellsNumber = cellWidthRight.value * height;

          cellsRight.value = Array.from(Array(cellsNumber).keys());
        }
      });
      return {
        leftPage,
        rightPage,
        cellsLeft,
        cellsRight,
        cellWidthLeft,
        cellWidthRight,
        side
      }
    }
  });
</script>

<style lang='scss' scoped>
  .grid {
    position: absolute;
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    max-height: 70vh;
    background-color: var(--primary);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    box-shadow: 0 0 1em var(--black);
    &__field {
      width: 8ch;
      &:first-of-type {
        border-right: .1rem solid var(--failure);
      }
      &:last-of-type {
        border-left: .1rem solid var(--failure);
      }
    }
    &__page {
      flex-grow: 1;
      display: grid;
      grid-auto-rows: auto;
      grid-gap: .1rem;
      background-color: var(--secondary);
      border: .1rem solid var(--secondary);
      overflow: hidden;
      &-item {
        width: 1rem;
        height: 1rem;
        background-color: var(--primary);
      }
    }
    &__binding {
      width: .1ch;
      height: 100%;
      background-color: var(--secondary);
      box-shadow: 0 0 .3em var(--black);
    }
  }
</style>
