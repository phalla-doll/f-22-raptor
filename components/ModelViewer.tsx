"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Group } from "three";
import { Float, PerspectiveCamera, Environment, ContactShadows, Stars } from "@react-three/drei";

function JetModel(props: any) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating rotation
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
      
      // Rotate based on mouse if needed, or just auto rotate
      groupRef.current.rotation.y += 0.005;
    }
  });

  const color = hovered ? "#FF5A00" : "#333";
  const emissive = hovered ? "#FF5A00" : "#000";
  const wireframe = false;

  return (
    <group ref={groupRef} {...props} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      {/* Fuselage Main Body */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.8, 4, 4]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} wireframe={wireframe} />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0, 0.5, 0.3]} rotation={[0.2, 0, 0]}>
        <capsuleGeometry args={[0.25, 0.8, 4, 8]} />
        <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Wings */}
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <bufferGeometry>
           {/* Simplified wing shape using custom geometry would be better, but using flattened cones/boxes for primitives */}
        </bufferGeometry>
      </mesh>
      
      {/* Left Wing */}
      <mesh position={[-1.2, -0.5, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
      </mesh>
      
      {/* Right Wing */}
      <mesh position={[1.2, -0.5, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Tail Fins */}
      <mesh position={[-0.8, -1.8, 0.5]} rotation={[0.5, 0, 0.2]}>
        <boxGeometry args={[0.1, 1, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[0.8, -1.8, 0.5]} rotation={[0.5, 0, -0.2]}>
        <boxGeometry args={[0.1, 1, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Engines */}
      <mesh position={[-0.4, -1.8, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 1, 8]} />
        <meshStandardMaterial color="#222" emissive="#FF5A00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.4, -1.8, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 1, 8]} />
        <meshStandardMaterial color="#222" emissive="#FF5A00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10 pointer-events-none" />
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF5A00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F0FF" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <JetModel rotation={[-Math.PI / 4, 0, 0]} />
        </Float>
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#FF5A00" />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute bottom-10 left-10 z-20 font-mono text-xs text-white/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neo-orange rounded-full animate-pulse" />
            <span>SYSTEM: ONLINE</span>
          </div>
          <div>MODEL: F-22 RAPTOR</div>
          <div>STATUS: STEALTH MODE ACTIVE</div>
        </div>
      </div>
    </div>
  );
}
