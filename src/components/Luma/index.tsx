import { Object3DNode, extend } from "@react-three/fiber";
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";

extend({ LumaSplats: LumaSplatsThree });

declare module "@react-three/fiber" {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>;
  }
}

type Props = {
  source: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  // Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>
};

export const Luma = ({ source, position, scale, rotation }: Props) => {
  return (
    <lumaSplats
      semanticsMask={LumaSplatsSemantics.FOREGROUND}
      source={source}
      enableThreeShaderIntegration={false}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};
