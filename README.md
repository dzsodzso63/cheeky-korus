# Cheeky Korus

Vite + React + TypeScript alapu SPA a Cheeky Korus honlapjahoz:

https://cheeky-korus.hu/

## Stack

- React 19
- TypeScript
- Vite 8
- ESLint

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

A projekt statikus Vite appkent deployolodik automatikusan Vercelen, ha a main branch valtozik

- Build command: `npm run build`
- Output directory: `dist`
- A `vercel.json` rewrite gondoskodik rola, hogy az SPA route-ok is az `index.html`-re essen vissza.

