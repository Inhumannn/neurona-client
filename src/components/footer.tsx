import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer>
        <nav>
          <div>
            <h2>À propos</h2>
            <ul>
              <li>
                <Link to="#">Notre histoire</Link>
              </li>
              <li>
                <Link to="#">Equipe</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Légal</h2>
            <ul>
              <li>
                <Link to="#">Conditions d'utilisation</Link>
              </li>
              <li>
                <Link to="#">Politique de confidentialité</Link>
              </li>
              <li>
                <Link to="#">Mentions légales</Link>
              </li>
              <li>
                <Link to="#">Cookies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>
                <Link to="#">Centre d'aide</Link>
              </li>
              <li>
                <Link to="#">Nous contacter</Link>
              </li>
              <li>
                <Link to="#">Signaler un problème</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contributeur</h2>
            <ul>
              <li>
                <Link to="#">Guide de contribution</Link>
              </li>
              <li>
                <Link to="#">Règles de validation du contenu</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>IA & Éthique</h2>
            <ul>
              <li>
                <Link to="#">Fonctionnement de l'ia</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <p>
            © 2025 <Link to="https://thmsfolio.vercel.app/">Thms</Link> -
            Apprends, Partage, Progresse !
          </p>
        </div>
      </footer>
    </>
  );
}
