import {
  AdaptiveDpr,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useState } from "react";
import { CineonToneMapping } from "three";

type Props = {
  children: ReactNode;
  className?: string;
};

export const CustomCanvas = ({ children, className }: Props) => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <Canvas
      gl={{
        antialias: false,
        toneMapping: CineonToneMapping,
      }}
      style={{
        minWidth: "10px",
      }}
      onPointerDown={(e) => {
        e.preventDefault();
      }}
      className={className}
    >
      <AdaptiveDpr pixelated />
      <PerspectiveCamera />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        enableDamping={true}
        onStart={() => {
          setAutoRotate(false);
        }}
        makeDefault
      />
      {children}
    </Canvas>
  );
};
