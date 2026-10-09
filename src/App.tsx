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
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default App
