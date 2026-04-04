# Deployment Guide — Vercel

## Prerequisites

1. **GitHub account** with repository access
2. **Vercel account** (free tier works)
3. **(Optional)** Resend account for contact form emails

---

## Step 1: Push to GitHub

```bash
cd /Users/Filip/src/etcpolska

# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit: ETC Polska Next.js site"

# Create GitHub repo and push
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/etc-polska.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: CLI (recommended)

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts → auto-deploys to Vercel.

### Option B: Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select your `etc-polska` repo
4. Click **Deploy** (no config needed — Next.js auto-detected)

---

## Step 3: Configure Environment Variables (Optional)

In Vercel dashboard → **Settings → Environment Variables**:

```
RESEND_API_KEY=re_xxxxx (for contact form emails)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Redeploy after adding env vars.

---

## Step 4: Custom Domain (Optional)

1. **Vercel Dashboard → Settings → Domains**
2. Add `www.etc-transport.com` + `etc-transport.com`
3. Update DNS records per Vercel instructions (usually A + CNAME)

---

## Contact Form Email Setup (Optional)

To enable real email sending:

1. Sign up at [resend.com](https://resend.com) (free 100 emails/day)
2. Get API key
3. Add to Vercel env vars: `RESEND_API_KEY=re_xxxxx`
4. Update `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // ... validation ...
  
  await resend.emails.send({
    from: 'ETC Polska <noreply@etc-transport.com>',
    to: 'info@etc-transport.com',
    subject: `Contact: ${subject}`,
    html: `<p><strong>From:</strong> ${name} (${email})</p>...`,
  });
  
  return NextResponse.json({ success: true });
}
```

5. Install Resend SDK: `npm install resend`
6. Git push → auto-redeploys

---

## Project URLs

- **Dev:** http://localhost:3000
- **Production:** `https://etc-polska.vercel.app` (or custom domain)

---

## Commands

```bash
npm run dev     # Development server (localhost:3000)
npm run build   # Production build (tests before deploy)
npm run start   # Production server locally
npm run lint    # Check code quality
```
