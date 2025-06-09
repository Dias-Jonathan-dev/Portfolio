import { Html } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import type { Mesh } from "three";

import "../styles/planetcard.css";

interface PlanetProps {
  name: string;
  description: string;
  langage: string[];
  texture: string;
  position: [number, number, number];
  scale: number;
  link: string;
  index: number;
  scrollProgress: number;
  disableHover?: boolean;
}

export default function Planet({
  name,
  description,
  langage,
  texture,
  position,
  scale,
  link,
  scrollProgress,
  disableHover = false, // Ajout ici
}: PlanetProps) {
  const meshRef = useRef<Mesh>(null);
  const colorMap = useLoader(TextureLoader, texture);
  const [hovered, setHovered] = useState(false);

  // Respecte la position de départ de chaque planète
  const [x, y, zStart] = position;
  const z = zStart + scrollProgress;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Handlers conditionnels
  const handlePointerOver = (e: React.PointerEvent) => {
    if (disableHover) return;
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = (e: React.PointerEvent) => {
    if (disableHover) return;
    e.stopPropagation();
    setHovered(false);
    document.body.style.cursor = "default";
  };

  return (
    <>
      <mesh
        ref={meshRef}
        position={[x, y, z]}
        scale={[scale, scale, scale]}
        onClick={() => window.open(link, "_blank")}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      {!disableHover && hovered && (
        <Html
          position={[x + 3 * scale, y, z]}
          distanceFactor={10}
          center
          zIndexRange={[100, 0]}
        >
          <div className="planetcard-tooltip">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
              <strong>Langages :</strong> {langage.join(", ")}
            </p>
          </div>
        </Html>
      )}
    </>
  );
}
