import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute } from "three";

const Example7 = () => {
  const vector1 = new Vector3(2, 1, 3);
  const vector2 = new Vector3(2, 2, 3);
  const vector3 = new Vector3(2, 2, 4);
  const vector4 = new Vector3(2, 2, 5);
  const vector5 = new Vector3(2, 1, 5);
  const vector6 = new Vector3(2, 0, 5);
  const vector7 = new Vector3(2, 0, 4);
  const vector8 = new Vector3(2, 0, 3);

  const lineRef = useRef();

  const geometry = new BufferGeometry();
  geometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array([vector1.x, vector1.y, vector1.z, vector2.x, vector2.y, vector2.z, vector3.x, vector3.y, vector3.z, vector4.x, vector4.y, vector4.z, vector5.x, vector5.y, vector5.z,vector6.x, vector6.y, vector6.z,vector7.x, vector7.y, vector7.z,,vector8.x, vector8.y, vector8.z]), 3)
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
        <mesh position={vector3}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={vector4}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={vector5}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={vector6}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={vector7}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={vector8}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Example7;
