import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function CodeDetails() {
  return (
    <>
      <Header />
      <div id="codeDetails-container">
        <main id="page-codeDetails">
          <aside>
            <h3>Table des matières</h3>
            <ul>
              <li>
                <a href="/">sujet 1 du cours</a>
              </li>
              <li>
                <a href="/">sujet 2 du cours</a>
              </li>
            </ul>
          </aside>
          <section>
            <h2>Les bases de html</h2>
            <p>
              Bienvenue dans ce cours sur les bases du HTML. Vous allez
              apprendre à structurer une page web et utiliser les balises
              essentielles.
            </p>
            <h3>Introduction</h3>
            <p>Le HTML est le langage de structure d'une page web...</p>
            <h3>Les balises de base</h3>
            <p>
              Les balises comme &lt;h1&gt;, &lt;p&gt;, &lt;a&gt; sont
              essentielles...
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
