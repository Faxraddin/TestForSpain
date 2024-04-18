import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";
import { useState } from "react";

const Example7 = () => {
    const [width,setWidth] = useState(1);
    const [heighht,setHeight] = useState(1);
    return (
        <div className="relative top-100 h-screen w-full">
            <Canvas >
                <ambientLight intensity={2}/>
                <OrbitControls/>
                <mesh geometry={new BoxGeometry(width, 1, heighht)}>
                <meshStandardMaterial color="darkgray" />
                </mesh>
            </Canvas>
        </div>
  )
}
export default Example7