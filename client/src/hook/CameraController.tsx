import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

interface CameraControllerProps {
  scrollProgress: number;
}

export default function CameraController({
  scrollProgress,
}: CameraControllerProps) {
  const { camera } = useThree();
  const targetPosition = useRef(new Vector3(0, 0, 40));
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    const strength = 0.6;
    const targetX = mouse.x * strength;
    const targetY = mouse.y * strength;
    // Effet de zoom progressif selon scrollProgress (de 80 à 40)
    const minZ = 40;
    const maxZ = 80;
    const targetZ = maxZ - (maxZ - minZ) * Math.min(scrollProgress * 2, 1);
    targetPosition.current.set(targetX, targetY, targetZ);
    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(0, 0, 0); // Toujours regarder le centre de la scène
  });

  return null;
}
