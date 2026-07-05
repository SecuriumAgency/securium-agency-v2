"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import type { Group } from "three";

function RotatingField() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.02;
    groupRef.current.rotation.x += delta * 0.005;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={120} depth={60} count={7000} factor={3.5} saturation={0} fade speed={0.6} />
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 h-screen w-screen pointer-events-none" style={{ zIndex: -1 }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12),_transparent_60%)]" />
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <RotatingField />
        <EffectComposer>
          <Bloom
            intensity={0.6}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
