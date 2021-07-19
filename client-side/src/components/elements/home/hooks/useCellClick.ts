import { IInput } from "@/app/models/IInput";
import { ref } from "vue";

const useCellClick = () => {
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
  
  return {
    startWriting,
    grid,
    inputs
  }
};

export default  useCellClick;
