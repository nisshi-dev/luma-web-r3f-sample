import { Object3DNode, extend } from "@react-three/fiber";
import { LumaSplatsThree } from "@lumaai/luma-web";

extend({ LumaSplats: LumaSplatsThree });

declare module "@react-three/fiber" {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>;
  }
}

export const Luma = (
  props: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>,
) => {
  return <lumaSplats {...props} />;
};
