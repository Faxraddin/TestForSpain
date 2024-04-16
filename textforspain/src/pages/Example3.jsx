import { Canvas } from "@react-three/fiber"
import React from "react";
import { Apartment1 } from "../models/Apartment1";
import { OrbitControls } from "@react-three/drei";

const Example3 = () => {
  return (
    <div className="relative top-100 h-screen w-full">
      <Canvas camera={{ position: [-6.119053075084781, 8.164465050167506,1.0085519544005341] }}>
        <Apartment1/>
        <OrbitControls/>
        <ambientLight intensity={5}/>
      </Canvas>
    </div>

  )
}
export default Example3