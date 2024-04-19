import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute } from "three";

const Example7 = () => {
  // Define vectors
  const vectors = [
    new Vector3(2, 1, 3),
    new Vector3(2, 2, 3),
    new Vector3(2, 2, 4),
    new Vector3(2, 2, 5),
    new Vector3(2, 1, 5),
    new Vector3(2, 0, 5),
    new Vector3(2, 0, 4),
    new Vector3(2, 0, 3)
  ];

  const lineRef = useRef();

  // Function to generate vertices for lines
  const generateVertices = () => {
    const vertices = [];
    for (let i = 0; i < vectors.length - 1; i++) {
      vertices.push(vectors[i].x, vectors[i].y, vectors[i].z);
      vertices.push(vectors[i + 1].x, vectors[i + 1].y, vectors[i + 1].z);
    }
    // Add line segment connecting last vector to first vector
    vertices.push(
      vectors[vectors.length - 1].x,
      vectors[vectors.length - 1].y,
      vectors[vectors.length - 1].z
    );
    vertices.push(vectors[0].x, vectors[0].y, vectors[0].z);
    return new Float32Array(vertices);
  };

  // Create BufferGeometry for lines
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(generateVertices(), 3));

  return (
    <div className="relative top-100 h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        {/* Render lines */}
        <line ref={lineRef}>
          <primitive object={geometry} />
          <lineBasicMaterial attach="material" color="red" />
        </line>

        {/* Render cubes */}
        {vectors.map((vector, index) => (
          <mesh key={index} position={vector}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
};

export default Example7;
