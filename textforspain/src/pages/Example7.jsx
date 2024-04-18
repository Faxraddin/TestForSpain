import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute } from "three";

const Example7 = () => {
  const vector1 = new Vector3(2, 2, 2);
  const vector2 = new Vector3(2, 2, 3);

  const lineRef = useRef();

  const geometry = new BufferGeometry();
  geometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array([vector1.x, vector1.y, vector1.z, vector2.x, vector2.y, vector2.z]), 3)
  );

  return (
    <div className="relative top-100 h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        <line ref={lineRef}>
          <primitive object={geometry} />
          <lineBasicMaterial attach="material" color="red" />
        </line>

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
