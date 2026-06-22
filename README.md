# Cheeky Korus

Vite + React + TypeScript alapu SPA scaffold a Cheeky Korus honlapjahoz.

## Stack

- React 19
- TypeScript
- Vite 8
- ESLint
- Vercelre kesz SPA rewrite

## Fejlesztes

```bash
npm install
npm run dev
```

Az alkalmazas alapertelmezett fejlesztoi cime: `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

A production build a `dist/` mappaba kerul.

## Vercel deploy

A projekt statikus Vite appkent deployolhato Vercelen.

- Build command: `npm run build`
- Output directory: `dist`
- A `vercel.json` rewrite gondoskodik rola, hogy az SPA route-ok is az `index.html`-re essen vissza.

## Mit erdemes kovetkezokent cserelni

- Valodi korusleiras, tagfelveteli szoveg es kapcsolat
- Repertoar, esemenyek, probaidopontok
- Sajatos kepek, logok, favicon es kozossegi linkek
