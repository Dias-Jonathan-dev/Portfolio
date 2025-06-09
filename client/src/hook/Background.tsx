import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {
  LinearFilter,
  type Mesh,
  type PerspectiveCamera,
  TextureLoader,
} from "three";
import galaxieHD from "../assets/images/galaxie-hd.jpg";

interface BackgroundProps {
  zoomFactor?: number; // optionnel, pour contrôler le zoom
}

export default function Background({ zoomFactor = 1 }: BackgroundProps) {
  const texture = useLoader(TextureLoader, galaxieHD);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;

  const { size, camera } = useThree();
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      const perspectiveCamera = camera as PerspectiveCamera;
      meshRef.current.position.set(camera.position.x, camera.position.y, -500);

      const vFov = (perspectiveCamera.fov * Math.PI) / 180;
      const distance = Math.abs(camera.position.z - -500);
      const zoomedDistance = distance * zoomFactor;
      const height = 2 * Math.tan(vFov / 2) * zoomedDistance;
      const width = height * (size.width / size.height);
      meshRef.current.scale.set(width, height, 1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
