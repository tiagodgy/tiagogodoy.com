import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

export default function ModelThree(){

    return (
        <Canvas>
            <Suspense fallback={null}>
                <Model />
            <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
  )
}

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./earth_hologram/scene.gltf");
    const modelRef = useRef();
  
    useFrame(() => {
      if (modelRef.current) {
        // Rotate the model around the x-axis
        modelRef.current.rotation.y += 0.002; // Adjust the rotation speed as needed
      }
    });
  
    return (
      <>
        <primitive ref={modelRef} object={gltf.scene} scale={1.2} />
      </>
    );
  };