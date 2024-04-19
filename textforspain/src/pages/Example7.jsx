import React, { useRef,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute } from "three";
import * as THREE from 'three'

const Example7 = () => {
  const [vectors, setVectors] = useState([
    { x: 2, y: 1, z: 3 },
    { x: 2, y: 2, z: 3 },
    { x: 2, y: 2, z: 4 },
    { x: 2, y: 2, z: 5 },
    { x: 2, y: 1, z: 5 },
    { x: 2, y: 0, z: 5 },
    { x: 2, y: 0, z: 4 },
    { x: 2, y: 0, z: 3 }
  ]);

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
      vectors[2].x, vectors[2].y, vectors[2].z,
      vectors[0].x, vectors[0].y, vectors[0].z,
    ];
    const triangle2Vertices = [
      vectors[7].x, vectors[7].y, vectors[7].z,
      vectors[2].x, vectors[2].y, vectors[2].z,
      vectors[0].x, vectors[0].y, vectors[0].z
    ];
    const triangle3Vertices = [
      vectors[7].x, vectors[7].y, vectors[7].z,
      vectors[2].x, vectors[2].y, vectors[2].z,
      vectors[6].x, vectors[6].y, vectors[6].z
    ];
    const triangle4Vertices = [
      vectors[2].x, vectors[2].y, vectors[2].z,
      vectors[3].x, vectors[3].y, vectors[3].z,
      vectors[4].x, vectors[4].y, vectors[4].z
    ];
    const triangle5Vertices = [
      vectors[2].x, vectors[2].y, vectors[2].z,
      vectors[4].x, vectors[4].y, vectors[4].z,
      vectors[6].x, vectors[6].y, vectors[6].z
    ];
    const triangle6Vertices = [
      vectors[5].x, vectors[5].y, vectors[5].z,
      vectors[4].x, vectors[4].y, vectors[4].z,
      vectors[6].x, vectors[6].y, vectors[6].z
    ];
    return {
      triangle1Vertices,
      triangle2Vertices,
      triangle3Vertices,
      triangle4Vertices,
      triangle5Vertices,
      triangle6Vertices
    };
  };

  const { triangle1Vertices, triangle2Vertices,triangle3Vertices,triangle4Vertices,triangle5Vertices,triangle6Vertices } = calculateTriangleVertices();

  const triangle1Geometry = new BufferGeometry();
  triangle1Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle1Vertices), 3));

  const triangle2Geometry = new BufferGeometry();
  triangle2Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle2Vertices), 3));

  const triangle3Geometry = new BufferGeometry();
  triangle3Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle3Vertices), 3));

  const triangle4Geometry = new BufferGeometry();
  triangle4Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle4Vertices), 3));

  const triangle5Geometry = new BufferGeometry();
  triangle5Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle5Vertices), 3));

  const triangle6Geometry = new BufferGeometry();
  triangle6Geometry.setAttribute("position", new BufferAttribute(new Float32Array(triangle6Vertices), 3));

  const handleInputChange = (event, index, axis) => {
    const value = parseFloat(event.target.value);
    const updatedPositions = [...vectors];
    updatedPositions[index][axis] = value;
    setVectors(updatedPositions);
  };

  return (
    <div className="relative top-100 h-screen w-full">
      {vectors.map((vector, index) => (
        <div key={index} className="border m-4">
          <label htmlFor={`vectorX${index}`}>Vector {index + 1} X:</label>
          <input
            type="number"
            id={`vectorX${index}`}
            value={vector.x}
            onChange={(event) => handleInputChange(event, index, 'x')}
          />
          <label htmlFor={`vectorY${index}`}>Vector {index + 1} Y:</label>
          <input
            type="number"
            id={`vectorY${index}`}
            value={vector.y}
            onChange={(event) => handleInputChange(event, index, 'y')}
          />
          <label htmlFor={`vectorZ${index}`}>Vector {index + 1} Z:</label>
          <input
            type="number"
            id={`vectorZ${index}`}
            value={vector.z}
            onChange={(event) => handleInputChange(event, index, 'z')}
          />
        </div>
      ))}
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        <line ref={lineRef}>
          <primitive object={geometry} />
          <lineBasicMaterial attach="material" color="red" />
        </line>

        <mesh>
          <primitive object={triangle1Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        <mesh>
          <primitive object={triangle2Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        <mesh>
          <primitive object={triangle3Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        <mesh>
          <primitive object={triangle4Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        <mesh>
          <primitive object={triangle5Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        <mesh>
          <primitive object={triangle6Geometry} />
          <meshBasicMaterial attach="material" color="green" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        {vectors.map((vector, index) => (
          <mesh key={index} position={new Vector3(vector.x, vector.y, vector.z)}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
};

export default Example7;