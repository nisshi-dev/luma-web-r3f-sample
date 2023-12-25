import { Environment, Grid, PivotControls } from "@react-three/drei";
import { CustomCanvas } from "./components/CustomCanvas";
import { Luma } from "./components/Luma";

export const App = () => {
  const gridConfig = {
    gridSize: [10.5, 10.5],
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: "#6f6f6f",
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: "#c1c1c1",
    fadeDistance: 25,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <CustomCanvas>
        <Environment
          background={true}
          blur={0.5} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
          files={"/venice_sunset_1k.hdr"}
        />

        <Grid
          position={[0, -1, 0]}
          args={[10.5, 10.5]}
          {...gridConfig}
          renderOrder={-1}
        />
        <Luma
          source="https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67"
          position={[-1, 0, 0]}
          scale={0.5}
        />
        <PivotControls anchor={[0, 0, 0]}>
          <Luma
            source="https://lumalabs.ai/capture/b46ae7cf-0e40-431a-9d7e-45bc3ec516c6"
            position={[1, 0, 0]}
            scale={0.5}
            rotation={[0, Math.PI, 0]}
          />
        </PivotControls>
      </CustomCanvas>
    </div>
  );
};
