import VFocus from "@/app/directives/VFocus";
import { Directive } from "vue";

export type  NamedDirective = {
  name: string;
  directive: Directive
};

const directivies: NamedDirective[] = [
  VFocus
];

export default  directivies;
