# Muhammad Furqan — 3D Portfolio

A premium dark 3D personal portfolio built from the supplied resume and profile photo.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Three Fiber / Three.js / Drei
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Notes

- `public/assets/Muhammad-Furqan-Resume.pdf` is the original supplied resume.
- `public/assets/muhammad-furqan.jpeg` is the supplied profile photo.
- Personal details and content are centralized in `src/lib/data.ts`.
- The experience section intentionally avoids employer/job-title placeholders because they are not present in the supplied resume.
- Public profile URLs were read from the clickable links embedded in the supplied PDF.
