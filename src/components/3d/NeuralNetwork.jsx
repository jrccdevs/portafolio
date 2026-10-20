import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function NeuralCircuit() {
  const groupRef = useRef()
  const mouse = useMousePosition()
  
  const nodeCount = 45 
  const spread = 18 

  // PALETA: PROTOCOLO DE EMERGENCIA (Líneas Blancas)
  const colorCircuit = "#ffffff"   // Blanco Puro para las pistas
  const colorAccent = "#ff0033"    // Rojo Carmesí para nodos de alerta
  const colorSecondary = "#0044ff" // Azul Eléctrico para balance
  const colorGrid = "#050510"      // Fondo Azul Negro profundo

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      ),
      size: Math.random() * 0.04 + 0.01
    }))
  }, [nodeCount])

  const circuitLines = useMemo(() => {
    const paths = []
    for (let i = 0; i < nodeCount; i += 2) {
      if (!nodes[i+1]) break
      const start = nodes[i].pos
      const end = nodes[i+1].pos
      
      const mid1 = new THREE.Vector3(end.x, start.y, start.z)
      const mid2 = new THREE.Vector3(end.x, end.y, start.z)
      
      paths.push(start, mid1, mid1, mid2, mid2, end)
    }
    return paths
  }, [nodes])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.12, 0.03)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * -0.08, 0.03)
    groupRef.current.position.y = Math.cos(t * 0.1) * 0.2
  })

  return (
    <group ref={groupRef}>
      {/* CAPA 1: Pistas del Circuito (Bordes Blancos) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={circuitLines.length}
            array={new Float32Array(circuitLines.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color={colorCircuit} 
          transparent 
          opacity={0.06} // Muy sutil para no distraer
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* CAPA 2: Nodos Multicolores (Hardware Bits) */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <boxGeometry args={[node.size, node.size, node.size]} />
          <meshBasicMaterial 
            color={i % 3 === 0 ? colorAccent : i % 3 === 1 ? colorSecondary : "#ffffff"} 
            toneMapped={false}
            transparent
            opacity={0.8}
          />
          {/* Luces de pulso en Rojo */}
          {i % 6 === 0 && (
            <pointLight intensity={1.8} distance={5} color={colorAccent} />
          )}
        </mesh>
      ))}

      {/* CAPA 3: Rejilla HUD (Azul Eléctrico Tenue) */}
      <gridHelper 
        args={[50, 25, colorSecondary, "#000000"]} 
        position={[0, -5, 0]} 
        transparent
        opacity={0.08}
      />

      {/* CAPA 4: Partículas (Chispas de datos rojas) */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={120}
            array={new Float32Array(Array.from({ length: 360 }, () => (Math.random() - 0.5) * 25))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          color={colorAccent} 
          transparent 
          opacity={0.3} 
          sizeAttenuation 
        />
      </points>
    </group>
  )
}