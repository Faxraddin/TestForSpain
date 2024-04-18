import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";

const Example7 = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [color, setColor] = useState("darkgray");

  const handleWidthChange = (e) => {
    setWidth(parseFloat(e.target.value) || 1);
  };

  const handleHeightChange = (e) => {
    setHeight(parseFloat(e.target.value) || 1);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="relative top-100 h-screen w-full">
      <div className="flex items-center justify-center space-x-4">
        <input
          type="number"
          value={width}
          onChange={handleWidthChange}
          placeholder="Width"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="number"
          value={height}
          onChange={handleHeightChange}
          placeholder="Height"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="p-2 rounded-md"
        />
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[width, height, 0]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Example7;
