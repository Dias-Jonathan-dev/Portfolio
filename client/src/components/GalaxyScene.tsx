import { Canvas } from "@react-three/fiber";
import { planetData } from "../components/PlanetData";
import Background from "../hook/Background";
import CameraController from "../hook/CameraController";
import Planet from "./Planet";
interface GalaxySceneProps {
  scrollProgress: number;
}

export default function GalaxyScene({ scrollProgress }: GalaxySceneProps) {
  const zoomFactor = 1 + 0.2 * Math.min(scrollProgress * 2, 1);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 80], fov: 50 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          background: "transparent",
        }}
      >
        <CameraController scrollProgress={scrollProgress} />
        <Background zoomFactor={zoomFactor} />
        <ambientLight intensity={4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {planetData.map((planet, index) => (
          <Planet
            key={planet.id}
            name={planet.name}
            description={planet.description}
            langage={planet.Langages}
            texture={planet.texture}
            position={planet.position}
            scale={planet.scale}
            link={planet.link}
            index={index}
            scrollProgress={scrollProgress}
          />
        ))}
      </Canvas>
    </>
  );
}
