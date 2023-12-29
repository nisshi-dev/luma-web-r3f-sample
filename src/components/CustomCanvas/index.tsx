import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";
import { CineonToneMapping } from "three";

type Props = {
  children: ReactNode;
  className?: string;
};

export const CustomCanvas = ({ children, className }: Props) => {
  return (
    <Canvas
      gl={{
        antialias: true,
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
      {children}
    </Canvas>
  );
};
