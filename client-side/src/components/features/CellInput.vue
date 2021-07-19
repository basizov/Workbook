<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="cell-input"
  >
</template>

<script lang='ts'>
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: 'CellInput',
    props: {
      modelValue: {
        type: String as PropType<string>,
        required: true
      }
    },
    setup(_, { emit }) {
      const updateInput = (event: InputEvent) => {
        emit('update:modelValue', (event.target as HTMLInputElement).value);
      };

      return {
        updateInput
      };
    }
  });
</script>

<style lang='scss' scoped>
  .cell-input {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
  }
</style>
