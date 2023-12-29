import { useState } from "react";
import { CustomCanvas } from "./components/CustomCanvas";
import { Luma } from "./components/Luma";
import {
  AdaptiveDpr,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";

export const App = () => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-[100vw] h-[100vh]">
      <VRButton />
      <CustomCanvas>
        <XR>
          <Controllers />
          <Hands />
          <Luma
            source="https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff"
            scale={2}
            enableThreeShaderIntegration={false}
          />
          <AdaptiveDpr pixelated />
          <PerspectiveCamera
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            position={[0, 0, 5]}
          />
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={2.5}
            enableDamping={true}
            onStart={() => {
              setAutoRotate(false);
            }}
            makeDefault
          />
        </XR>
      </CustomCanvas>
    </div>
  );
};
