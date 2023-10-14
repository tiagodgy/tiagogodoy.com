import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useRef, useEffect, useState } from 'react'
import { styled } from '../stitches.config'

export default function ModelThree() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, '/static/ThreeDModels/earth/scene.gltf')
    const modelRef = useRef()

    let scaleNum = 2.7

    useFrame(() => {
      if (modelRef.current) {
        // Rotate the model around the x-axis
        modelRef.current.rotation.y += 0.002 // Adjust the rotation speed as needed
      }
    })

    return <primitive ref={modelRef} object={gltf.scene} scale={scaleNum} />
  }

  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          {/* <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI - Math.PI / 3}
          /> */}
        </Suspense>
      </Canvas>
    </Container>
  )
}

const Container = styled('div', {
  height: '300px',
  width: '90%',
  padding: '20px 0',
  '@bp2': {
    padding: '0 20px',
    marginLeft: '40px',
    width: '400px',
    height: '400px',
  },
})
