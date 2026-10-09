import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <img
        className="logo"
        src="/cheeky_logo_color.png"
        alt="Cheeky Kórus logo"
      />

      <section className="contact-card" aria-label="Kapcsolat">
        <h1>Cheeky Kórus</h1>
        <a
          href="https://open.spotify.com/artist/78LoPE5cA2MF7xTRuhvBSw"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
        <a href="https://www.youtube.com/@Cheeky-korus" target="_blank" rel="noreferrer">
          YouTube
        </a>
        <a href="https://www.instagram.com/cheeky.korus/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100057487238005"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a href="mailto:info@cheeky-korus.hu">info@cheeky-korus.hu</a>
      </section>

      <aside className="spotify-widget" aria-label="Spotify lejátszó">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/6CMs9TbwTFgYVlsUYGNQG9?utm_source=generator&theme=0&si=8d2214a80ace4520"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify - Cheeky Kórus album"
        />
      </aside>
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default App
