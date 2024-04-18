import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

const Example7 = () => {
  const vector1 = new Vector3(2, 2, 2);
  const vector2 = new Vector3(2, 2, 3);

  return (
    <div className="relative top-100 h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        <mesh position={vector1}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={vector2}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Example7;