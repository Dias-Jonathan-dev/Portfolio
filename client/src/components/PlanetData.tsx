import marsTexture from "../assets/images/textures/mars.jpg";
import sunTexture from "../assets/images/textures/sun.jpg";
import venusTexture from "../assets/images/textures/venus.jpg";

export interface PlanetData {
  id: string;
  name: string;
  texture: string;
  position: [number, number, number];
  scale: number;
  link: string;
  description: string;
  Langages: string[];
}

export const planetData: PlanetData[] = [
  {
    id: "mars",
    name: "Wild Eats",
    texture: marsTexture,
    position: [1, 0, -50],
    scale: 0.7,
    link: "https://ikay-gh.github.io/Projet-1/",
    description:
      "Site qui répertorie les meilleures adresses culinaires proches de notre campus et offre la possibilité de trier par type de cuisine.",
    Langages: ["HTML", "CSS", "Javascript"],
  },
  {
    id: "sun",
    name: "Futurama Quiz",
    texture: sunTexture,
    position: [-1, -0.5, -100],
    scale: 1,
    link: "https://futurama-quiz.vercel.app/",
    description:
      "Quiz humoristique sur Futurama ! Premier projet avec API, réalisé en moins de 7h dans un exercice de type sprint.",
    Langages: ["React", "CSS", "API"],
  },
  {
    id: "venus",
    name: "GameSpace",
    texture: venusTexture,
    position: [1, 0.2, -150],
    scale: 0.9,
    link: "https://game-space-rho.vercel.app/",
    description:
      "Bibliothèque de jeux multiplateforme. Projet basé sur l’API RAWG, avec génération dynamique des pages de jeux et filtres par plateforme ou style. Le défi : gérer une large base de données tout en gardant une interface claire.",
    Langages: ["React", "CSS", "TypeScript", "API RAWG"],
  },
];
