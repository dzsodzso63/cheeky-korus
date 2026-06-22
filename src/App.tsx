import './App.css'

function App() {
  return (
    <main className="page-shell">
      <img
        className="logo"
        src="/cheeky_logo_color.jpg"
        alt="Cheeky Korus logo"
      />

      <section className="contact-card" aria-label="Kapcsolat">
        <h1>Cheeky Korus</h1>
        <a href="mailto:info@cheeky-korus.hu">info@cheeky-korus.hu</a>
        <a
          href="https://www.facebook.com/profile.php?id=100057487238005"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a href="https://www.instagram.com/cheeky.korus/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </section>
    </main>
  )
}

export default App
