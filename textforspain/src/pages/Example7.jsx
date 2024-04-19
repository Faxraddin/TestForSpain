import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute } from "three";
import * as THREE from 'three'

const Example7 = () => {
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

  const generateVertices = () => {
    const vertices = [];
    for (let i = 0; i < vectors.length - 1; i++) {
      vertices.push(vectors[i].x, vectors[i].y, vectors[i].z);
      vertices.push(vectors[i + 1].x, vectors[i + 1].y, vectors[i + 1].z);
    }
    vertices.push(
      vectors[vectors.length - 1].x,
      vectors[vectors.length - 1].y,
      vectors[vectors.length - 1].z
    );
    vertices.push(vectors[0].x, vectors[0].y, vectors[0].z);
    return new Float32Array(vertices);
  };

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(generateVertices(), 3));

  // Function to calculate triangle vertices dynamically
  const calculateTriangleVertices = () => {
    const triangle1Vertices = [
      vectors[1].x, vectors[1].y, vectors[1].z,
      vectors[7].x, vectors[7].y, vectors[7].z,
      vectors[3].x, vectors[3].y, vectors[3].z
    ];
    const triangle2Vertices = [
      vectors[7].x, vectors[7].y, vectors[7].z,
      vectors[3].x, vectors[3].y, vectors[3].z,
      vectors[5].x, vectors[5].y, vectors[5].z
    ];
    return {
      triangle1Vertices,
      triangle2Vertices
    };
  };

  const { triangle1Vertices, triangle2Vertices } = calculateTriangleVertices();

  const triangle1Geometry = new BufferGeometry();
  triangle1Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle1Vertices), 3));

  const triangle2Geometry = new BufferGeometry();
  triangle2Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle2Vertices), 3));

  return (
    <div className="relative top-100 h-screen w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        <line ref={lineRef}>
          <primitive object={geometry} />
          <lineBasicMaterial attach="material" color="red" />
        </line>

        <mesh>
          <primitive object={triangle1Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>

        <mesh>
          <primitive object={triangle2Geometry} />
          <meshBasicMaterial attach="material" color="yellow" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>

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
