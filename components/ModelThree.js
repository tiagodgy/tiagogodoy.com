import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useRef } from 'react'
import { styled } from '../stitches.config'

export default function ModelThree() {
  const Model = () => {
    const gltf = useLoader(
      GLTFLoader,
      '/static/ThreeDModels/earth/a_windy_day.glb'
    )
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

  function Loader() {
    const { progress } = useProgress()
    return (
      <Html center>
        <p style={{ textAlign: 'center' }}>Carregando... {progress}%</p>
      </Html>
    )
  }

  return (
    <Container>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model />
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
