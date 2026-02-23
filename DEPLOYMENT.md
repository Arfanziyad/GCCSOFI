# 🚀 Vercel Deployment Guide - GCCSOFI Website

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GCCSOFI website"
   git branch -M main
   git remote add origin https://github.com/yourusername/gccsofi-website.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** 🎉
   - Your site will be live at: `https://gccsofi-website.vercel.app`
   - Custom domain can be added later

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Configuration

### Vercel Settings (Auto-detected)

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "devCommand": "next dev",
  "installCommand": "npm install"
}
```

### Environment Variables

If you add backend services later, configure in Vercel dashboard:

```
NEXT_PUBLIC_API_URL=https://api.gccsofi.com
NEXT_PUBLIC_CONTACT_EMAIL=info@gccsofi.com
```

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your domain: `www.gccsofi.com`
3. Add DNS records (Vercel provides instructions)
4. Wait for SSL certificate (automatic)

### DNS Configuration Example

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

## Performance Optimization

### Image Optimization

Replace Unsplash URLs with local images:

```typescript
// Instead of:
image: 'https://images.unsplash.com/...'

// Use:
image: '/images/products/product-1.jpg'
```

Then add images to `/public/images/`

### Enable Analytics

In `vercel.json`:
```json
{
  "analytics": {
    "enable": true
  }
}
```

### Speed Insights

Add to your project:
```bash
npm install @vercel/speed-insights
```

In `app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Pre-Deployment Checklist

- [ ] Update all placeholder content
- [ ] Replace Unsplash images with actual photos
- [ ] Add real company brochures (PDF/PPT)
- [ ] Update contact information
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test on different browsers
- [ ] Add favicon and OG images
- [ ] Set up Google Analytics (optional)
- [ ] Configure email service for contact form

## Build Optimization

### 1. Check Build Locally

```bash
npm run build
npm start
```

Visit `http://localhost:3000` and test everything.

### 2. Analyze Bundle Size

```bash
npm run build
```

Look for warnings about large bundles.

### 3. Optimize Images

Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image 
  src="/images/hero.jpg" 
  alt="Hero image"
  width={1920}
  height={1080}
  priority
/>
```

## Monitoring

### Vercel Dashboard Provides:

- **Deployment History**: Track all deployments
- **Performance Metrics**: Page load times
- **Error Tracking**: Runtime errors
- **Analytics**: Visitor stats (paid feature)

### Access Logs

```bash
vercel logs
```

## Continuous Deployment

Once connected to GitHub:

1. Push to `main` branch → Auto-deploy to production
2. Push to other branches → Preview deployments
3. Pull requests → Automatic preview URLs

## Rollback

If deployment fails:

1. Go to Deployments tab
2. Find previous working deployment
3. Click "Promote to Production"

## Custom Configuration

Create `vercel.json` in root (optional):

```json
{
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Build Fails

**Check:**
- Run `npm run build` locally first
- Review build logs in Vercel
- Ensure all dependencies are in `package.json`

### Environment Variables Not Working

**Ensure:**
- Prefix with `NEXT_PUBLIC_` for client-side
- Set in Vercel dashboard
- Redeploy after adding variables

### Images Not Loading

**Fix:**
- Add domains to `next.config.mjs`:
```javascript
images: {
  domains: ['images.unsplash.com', 'yourdomain.com'],
}
```

### 404 on Refresh

This shouldn't happen with Next.js App Router, but if it does:
- Ensure you're using `app/` directory structure
- Check dynamic routes are properly configured

## Post-Deployment

### 1. SEO Setup

- Submit sitemap to Google Search Console
- Set up Google Analytics
- Configure robots.txt
- Add structured data (JSON-LD)

### 2. Security

- Enable HTTPS (automatic on Vercel)
- Set up CSP headers
- Configure CORS if needed

### 3. Monitoring

- Set up uptime monitoring
- Configure error tracking (Sentry)
- Monitor Core Web Vitals

## Costs

**Vercel Free Tier Includes:**
- Unlimited deployments
- HTTPS
- Edge Network (CDN)
- 100GB bandwidth/month
- Perfect for most websites

**Upgrade for:**
- Custom analytics
- More bandwidth
- Team features
- Priority support

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Ready to deploy!** 🚀

Your GCCSOFI website is production-ready and optimized for Vercel deployment.
