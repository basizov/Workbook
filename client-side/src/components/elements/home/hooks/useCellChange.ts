import { IInput } from "@/app/models/IInput";
import { Ref } from "vue";

const useCellChange= (grid: Ref<HTMLDivElement | null>, inputs: Ref<IInput[]>) => {
  const changeInputText = (e: InputEvent) => {
    const element = (e.target as HTMLDivElement);

    if (grid.value && element.offsetLeft + element.clientWidth > grid.value.clientWidth) {
      inputs.value.push({
        id: Date.now.toString(),
        top: `${element.offsetTop + element.offsetHeight}px`,
        left: `0px`,
        value: ''
      });
    }
    else if (grid.value && inputs.value[inputs.value.length - 1].value.length === 0)
      console.log('Drop')// inputs.value.pop();
  };
  
  return {
    changeInputText
  }
};

export default  useCellChange;
