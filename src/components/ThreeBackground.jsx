import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} className="three-bg">
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 2, 4]} intensity={10} color="#22d3ee" />
      <Float speed={1.1} rotationIntensity={0.45} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshStandardMaterial color="#2563eb" wireframe transparent opacity={0.42} />
        </mesh>
      </Float>
      <Stars radius={55} depth={30} count={1200} factor={2} saturation={0} fade speed={0.4} />
    </Canvas>
  );
}