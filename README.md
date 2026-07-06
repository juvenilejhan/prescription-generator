# Prescription Generator — Dr. A. K. M. Rezwan

A frontend-only React + Vite app for generating and printing/downloading physiotherapy prescriptions.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, click "Add New → Project", select the repo.
3. Build command: `npm run build` — Output directory: `dist` (Vercel usually auto-detects both for Vite).
4. Click Deploy.

## Notes

- No backend or database — each prescription is filled in fresh (nothing is saved between sessions), per your requirements.
- "Print" opens the browser print dialog with only the prescription pad visible.
- "Download PDF" renders the prescription pad to a PDF client-side (via html2canvas + jsPDF) and saves it directly.
