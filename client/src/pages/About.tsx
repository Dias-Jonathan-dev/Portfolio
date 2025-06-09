import "../styles/about.css";
import CV from "../assets/CV.pdf";
import aboutImg from "../assets/images/aboutImg.png";

function About() {
  return (
    <>
      <div className="about-container">
        <img src={aboutImg} alt="" />
        <div className="about-text">
          <p>
            Pendant près de huit ans, j’ai évolué en tant qu’opérateur PAO,
            mêlant production technique, accompagnement des équipes et création
            graphique. Mais c’est la refonte du site vitrine de mon entreprise
            qui a éveillé chez moi un intérêt de longue date : le plaisir de
            donner vie au numérique, de créer des expériences interactives qui
            captivent et facilitent la vie des utilisateurs.
          </p>
          <p>
            Cet intérêt m’a conduit à me former au développement web à la Wild
            Code School de Toulouse. Là, j’ai appris à maîtriser les langages et
            outils qui permettent de transformer des idées en applications
            concrètes, comme GameSpace, une bibliothèque de jeux vidéo connectée
            à une API. Aujourd’hui, je vais plus loin, explorant le back-end et
            la 3D interactive avec Three.js, que j’utilise pour concevoir un
            portfolio immersif, reflet de mes passions.
          </p>
          <p>
            Passionné de nouvelles technologies, de jeux vidéo, de cinéma et
            d’univers en 3D, j’aime créer des interfaces web qui allient
            esthétique et interactivité. Ces inspirations m’accompagnent au
            quotidien dans ma façon de concevoir des projets modernes et
            immersifs.
          </p>
          <a className="cv-link" href={CV} download>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
