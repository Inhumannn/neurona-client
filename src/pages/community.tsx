import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function Community() {
  return (
    <>
      <Header />
      <main id="page-community">
        <section>
          <div>
            <h2>Communauté</h2>
            <nav>
              <ul>
                <li>Tout post</li>
                <li>Personne que je suis</li>
                <li>Mes post</li>
                <li>Sauvegarder</li>
              </ul>
            </nav>
          </div>
          <div>
            <h3>Nouveau Post</h3>
            <article>
              <div>
                <img src="" alt="photo de profil de la personne" />
              </div>
              <div>
                <h4>
                  j'ai besoin pour faire un menu dépliant uniquement en html
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet inventore consectetur nihil sit quam unde natus
                  quibusdam voluptates dolores sunt. Vero debitis saepe a quos,
                  quas iure fugit explicabo odio assumenda voluptatem porro,
                  maiores nesciunt alias eius!
                </p>
                <div>
                  <p>20 commentaires</p>
                  <p>il y a 2 jours</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
