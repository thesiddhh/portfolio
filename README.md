# Siddhardha — Portfolio (React + Vite)

Frontend only. No backend needed.

## Run locally
    npm install
    npm run dev

## Make the contact form send you emails
1. Go to https://web3forms.com, enter `kvsaisiddhardha2117@gmail.com` and get your free access key by email.
2. Copy `.env.example` to `.env` and paste the key after `VITE_WEB3FORMS_KEY=`.
3. Restart `npm run dev`. Messages from the form now arrive in your inbox.

Without a key, the form opens the visitor's email app instead.

## Deploy
Push to GitHub, import the repo in Vercel (framework: Vite) and add `VITE_WEB3FORMS_KEY` under Environment Variables.

## Customise
- Resume: replace `public/Siddhardha_Resume.pdf` with a newer PDF (keep the same file name).
- Photos: replace `src/assets/avatar.jpg` and `src/assets/hero.jpg`.
- Projects: edit the `PROJECTS` list in `src/App.jsx` (add real GitHub and live links).
