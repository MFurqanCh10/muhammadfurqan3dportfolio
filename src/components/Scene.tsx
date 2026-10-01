import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera, Sparkles, TorusKnot } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function OrbitalShape() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.09
    ref.current.rotation.y += delta * 0.13
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.35
    ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.21) * 0.25
  })

  return (
    <TorusKnot ref={ref} args={[1.08, 0.18, 160, 32, 2, 3]} scale={1.05}>
      <meshStandardMaterial color="#b9b1ff" metalness={0.9} roughness={0.2} wireframe />
    </TorusKnot>
  )
}

function SceneRig() {
  const nodes = useMemo(() => Array.from({ length: 18 }, (_, i) => i), [])
  useFrame((state) => {
    const x = state.pointer.x * 0.18
    const y = state.pointer.y * 0.12
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, 0.02)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y, 0.02)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.48} />
      <pointLight position={[4, 4, 4]} intensity={4} distance={12} />
      <pointLight position={[-4, -2, 3]} intensity={2} distance={10} />
      <Float speed={0.65} rotationIntensity={0.25} floatIntensity={0.55}>
        <OrbitalShape />
      </Float>
      <Sparkles
        count={120}
        scale={[10, 7, 6]}
        size={1.4}
        speed={0.2}
        noise={0.4}
      />
      {nodes.map((node) => {
        const a = (node / nodes.length) * Math.PI * 2
        return (
          <mesh key={node} position={[Math.cos(a) * 3.2, Math.sin(a) * 1.8, -1.6]}>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshBasicMaterial color="#938aff" transparent opacity={0.38} />
          </mesh>
        )
      })}
    </>
  )
}

export function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  if (reducedMotion) return null

  return (
    <div className="scene-shell" aria-hidden="true">
      <Canvas dpr={[1, 1.45]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7.8]} fov={40} />
        <SceneRig />
      </Canvas>
    </div>
  )
}
