import { useEffect } from "react";
import "../styles/legal.css";

function Legal() {
  useEffect(() => {
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Mentions légales</h1>

        <h2>1. Éditeur du site</h2>
        <p>
          <strong>Nom :</strong> Jonathan Dias
          <br />
          <strong>Adresse :</strong> Saint-Orens de Gameville (31650)
          <br />
          <strong>E-mail :</strong> jonathan-dias@outlook.fr
          <br />
          <strong>Statut :</strong> Particulier – Site non professionnel
          (portfolio personnel)
        </p>

        <h2>2. Hébergement</h2>
        <p>
          <strong>Hébergeur :</strong> [Nom de l’hébergeur, ex. Vercel, Netlify,
          etc.]
          <br />
          <strong>Adresse :</strong> [Adresse de l’hébergeur]
          <br />
          <strong>Site web :</strong> https://www.nomdelhebergeur.com
        </p>

        <h2>3. Propriété intellectuelle</h2>
        <p>
          Le contenu de ce site (textes, code source, animations, structure) est
          la propriété exclusive de Jonathan Dias, sauf mention contraire.
          <br />
          Toute reproduction, totale ou partielle, sans autorisation préalable
          est interdite.
        </p>

        <h2>4. Ressources externes</h2>
        <p>
          Ce site utilise une image de fond de galaxie trouvée via le moteur de
          recherche Google.
          <br />
          Dans la mesure du possible, une vérification a été faite pour
          s'assurer qu'il ne s'agit pas d'une image protégée par des droits
          exclusifs.
          <br />
          Si vous êtes le titulaire des droits sur cette image et souhaitez
          demander son retrait ou l’ajout de crédits, merci de contacter :
          jonathan-dias@outlook.fr.
        </p>

        <h2>5. Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée à votre insu.
          <br />
          Si un formulaire de contact est utilisé, les informations transmises
          ne sont utilisées que pour vous répondre, et ne sont ni stockées
          durablement ni transmises à des tiers.
          <br />
          Conformément à la loi Informatique et Libertés et au RGPD, vous
          disposez d’un droit d’accès, de rectification ou de suppression de vos
          données. Contact : jonathan-dias@outlook.fr.
        </p>

        <h2>6. Responsabilité</h2>
        <p>
          L’auteur du site ne peut être tenu responsable des erreurs, bugs ou
          indisponibilités du site, ni de l’utilisation des liens externes
          éventuellement présents.
        </p>
      </div>
    </div>
  );
}

export default Legal;
