<template>
  <section class="grid" @click="startWriting" ref="grid">
    <grid-cell :side='side' class="grid__field" />
    <grid-cell :side='side' class="grid__left" />
    <div class="grid__binding"></div>
    <grid-cell :side='side' class="grid__right grid__cell-right" />
    <grid-cell :side='side' class="grid__field grid__cell-right" />

    <cell-input
      v-focus
      v-for="inp in inputs"
      class="grid__input"
      :key='inp.id'
      :style="{
        'top': inp.top,
        'left': inp.left,
        'width': `${inp.value.length === 0 ? .1 : 1 * inp.value.length}ch`
      }"
      v-model:modelValue="inp.value"
      @change="changeInputText"
    />
  </section>
</template>

<script lang='ts'>
  import { defineComponent, ref } from "vue";

  interface IInput {
    id: string,
    top: string;
    left: string;
    value: string;
  }

  export default defineComponent({
    name: 'WorkbookGrid',
    setup() {
      const grid = ref<HTMLDivElement | null>(null);
      const inputs = ref<IInput[]>([]);
      const startWriting = (e: MouseEvent) => {
        let   x = e.clientX;
        let   y = e.clientY;
        const element = document.elementFromPoint(x, y);

        if (grid.value && (!element || element.classList.contains('page-item'))) {
          const pos = grid.value.getBoundingClientRect();

          x -= pos.left;
          y -= pos.top;
          inputs.value.push({
            id: Date.now.toString(),
            top: `${y}px`,
            left: `${x}px`,
            value: ''
          });
        }
      };
      const changeInputText = (e: InputEvent) => {
        
      };
      const side = 15;

      return {
        startWriting,
        changeInputText,
        side,
        grid,
        inputs
      }
    }
  });
</script>

<style lang='scss' scoped>
  .grid {
    cursor: text;
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
    &__binding {
      width: .1ch;
      height: 100%;
      background-color: var(--secondary);
      box-shadow: 0 0 .3em var(--black);
    }
    &__left,
    &__right {
      flex-grow: 1;
    }
    &__cell-right {
      justify-content: flex-end;
    }
    &__input {
      position: absolute;
      z-index: 10000;
      transform: translateY(-50%);
    }
  }
</style>
