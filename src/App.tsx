import './App.css'

function App() {
  const seasonHighlights = [
    'Kortars es klasszikus muvek egy szinpadon',
    'Nyitott probak az uj tagoknak',
    'Fellepesek templomi es koncerttermi terekben',
  ]

  const repertoire = [
    'Kodaly Zoltan: Esti dal',
    'Brahms: Geistliches Lied',
    'Ola Gjeilo: Northern Lights',
    'Nepdalfeldolgozasok es adventi musor',
  ]

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#hero">
          Cheeky Korus
        </a>
        <nav className="site-nav" aria-label="Fo navigacio">
          <a href="#rolunk">Rolunk</a>
          <a href="#musor">Musor</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Budapesti kozosseg, eloben megszolalo hangzas</p>
            <h1>Cheeky Korus</h1>
            <p className="lead">
              Ez a kezdooldal egy Vite + React + TypeScript alapra epitett SPA,
              amibol gyorsan lehet nyilvanos korushonlapot epiteni Vercel deployjal.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#kapcsolat">
                Csatlakoznek
              </a>
              <a className="button button-secondary" href="#musor">
                Megnezem a musort
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Gyors informaciok">
            <p className="card-label">Aktualis fokusz</p>
            <h2>Probaidoszak es fellpesek</h2>
            <ul>
              {seasonHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section id="rolunk" className="content-grid">
          <article className="panel panel-accent">
            <p className="section-label">Rolunk</p>
            <h2>Kis letszamu, bator hangzas</h2>
            <p>
              A scaffold keszen all arra, hogy bemutasd a korus tortenetet, a
              karnagyot, a tagsagot es a kovetkezo fellepeseket. A jelenlegi
              tartalom csak indulasi vaz.
            </p>
          </article>

          <article className="panel">
            <p className="section-label">Probak</p>
            <h2>Heti ritmus, attekintheto szerkezet</h2>
            <p>
              Adj hozza probanaptarat, helyszininformaciot, jelentkezesi urlapot
              vagy audio mintakat. A layout mar mobilon es desktopon is kesz.
            </p>
          </article>
        </section>

        <section id="musor" className="repertoire-section">
          <div>
            <p className="section-label">Musor</p>
            <h2>Indulo repertoar-blokk</h2>
          </div>
          <div className="repertoire-list">
            {repertoire.map((item) => (
              <article className="repertoire-item" key={item}>
                <span className="repertoire-index">0{repertoire.indexOf(item) + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="kapcsolat" className="site-footer">
        <div>
          <p className="section-label">Kapcsolat</p>
          <h2>Innen lehet tovabblepni</h2>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href="mailto:szervezes@cheeky-korus.hu">
            szervezes@cheeky-korus.hu
          </a>
          <p>
            Csereld le a szovegeket, a kapcsolatot es a repertoart a valodi
            korusadatokra, majd deployolj Vercelre.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
