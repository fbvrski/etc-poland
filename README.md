# ETC Polska — Modern Website

> **Next.js 15 + TypeScript + Tailwind CSS** — Fast, modern website for ETC Polska transport consultancy.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                   # Next.js App Router pages
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                   # Utilities & helpers
├── sanity/               # Sanity CMS config (optional)
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Barlow (display) + Inter (body)
- **Deployment:** Vercel (recommended)

## 🌐 Deployment to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click **Add New Project**
   - Import your GitHub repository
   - Click **Deploy**

## 📝 Environment Variables

Create `.env.local` for local development:

```env
# Sanity CMS (optional)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Contact Form (Resend API)
RESEND_API_KEY=your_resend_api_key
```

## 📄 License

© 2026 ETC Polska Sp. z o.o. All rights reserved.
