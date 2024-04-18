import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import { OrbitControls } from "@react-three/drei";

// Draggable wall component
function DraggableWall({ initialPosition, onDragEnd }) {
  const ref = useRef(null);
  const [{ x, y }, set] = useSpring({ x: initialPosition[0], y: initialPosition[1] });

  const onMouseDown = (event) => {
    const initialX = event.clientX;
    const initialY = event.clientY;

    const onMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - initialX;
      // Constrain movement to prevent walls from going outside the room (optional)
      const newX = Math.max(0, Math.min(initialPosition[0] + deltaX, 10)); // Assuming room width is 10
      set({ x: newX });
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      onDragEnd && onDragEnd([newX, y.value]); // Call drag end callback
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <animated.mesh ref={ref} onMouseDown={onMouseDown} position={[x, y, 0]}>
      <boxGeometry args={[1, 2.5, 0.1]} /> {/* Adjust size as needed */}
      <MeshBasicMaterial color="gray" />
    </animated.mesh>
  );
}

// Walls with pre-defined positions (replace with your layout)
function Walls({ roomWidth = 5, roomHeight = 3, wallHeight = 2.5 }) {
  return (
    <>
      <boxGeometry // Back wall
        args={[roomWidth, wallHeight, 0.1]}
        position={[roomWidth / 2, -wallHeight / 2, -roomHeight / 2]}
      >
        <MeshBasicMaterial color="lightblue" />
      </boxGeometry>
      <boxGeometry // Left wall
        args={[0.1, wallHeight, roomHeight]}
        position={[-roomWidth / 2, -wallHeight / 2, 0]}
      >
        <MeshBasicMaterial color="lightblue" />
      </boxGeometry>
      <boxGeometry // Right wall
        args={[0.1, wallHeight, roomHeight]}
        position={[roomWidth / 2, -wallHeight / 2, 0]}
      >
        <MeshBasicMaterial color="lightblue" />
      </boxGeometry>
      {/* Draggable front wall */}
      <boxGeometry
        args={[roomWidth, wallHeight, 0.1]}
        position={[0, -wallHeight / 2, roomHeight / 2]}
      >
        <MeshBasicMaterial color="lightblue" />
        {/* Integrate DraggableWall here */}
        <DraggableWall initialPosition={[roomWidth / 2, roomHeight / 2]} />
      </boxGeometry>
    </>
  );
}

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
