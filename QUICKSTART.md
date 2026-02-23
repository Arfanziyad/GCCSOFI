# 🚀 GCCSOFI Website - Quick Start Guide

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

It will automatically redirect to: **http://localhost:3000/en**

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
GCCSOFI/
├── app/
│   ├── [locale]/           # i18n routes (en, ar)
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── products/       # Products section
│   │   └── projects/       # Projects section
│   └── layout.tsx          # Root layout
├── components/             # React components
├── data/                   # Content data
├── types/                  # TypeScript types
└── public/                 # Static assets
```

## 🎨 Brand Colors

- **Primary Blue**: `#0B5ED7`
- **Primary Red**: `#E10600`
- **Background**: White

## 📄 Available Pages

### Main Pages
- **Home**: `/en` - Full landing page with hero, products, contact form
- **Products**: `/en/products` - All products listing
- **Projects**: `/en/projects` - Projects showcase
- **About**: `/en/about` - Company information
- **Contact**: `/en/contact` - Contact form and info

### Dynamic Pages
- **Product Details**: `/en/products/[slug]`
  - operable-walls-moving-glass-walls
  - hpl-washroom-cubicles
  - pivot-doors
  - hydraulic-doors
  - terrace-solutions
  - office-partitions

- **Project Details**: `/en/projects/[slug]`
  - dubai-business-park-tower
  - riyadh-convention-center
  - abu-dhabi-luxury-hotel
  - kuwait-corporate-headquarters
  - doha-educational-campus

### Legal Pages
- **Privacy Policy**: `/en/privacy`
- **Terms of Service**: `/en/terms`

## 🌍 Internationalization (i18n)

The site is structured for multi-language support:

- **English (default)**: `/en/...`
- **Arabic (prepared)**: `/ar/...`

Currently, content is in English. To add Arabic:
1. Add translations to data files
2. Update components with locale-specific content
3. Adjust RTL styling in Tailwind config

## ✨ Key Features

### 1. Auto-Sliding Hero
- Changes background every 4 seconds
- Smooth fade transitions
- Fixed centered text
- Responsive design

### 2. Floating Contact Sidebar
- Collapsible sidebar on left
- Social media links (LinkedIn, Phone, WhatsApp, Email)
- Smooth animations

### 3. Product Grid
- 3 columns (desktop)
- 2 columns (tablet)
- 1 column (mobile)
- Hover effects and animations

### 4. Contact Form
- Name, Email, Phone, Message fields
- Frontend validation
- Ready for backend integration

### 5. Brochure Downloads
- PDF and PPT download cards
- Professional design
- Placeholder files included

### 6. Navigation
- Transparent over hero
- Solid white on scroll
- Sticky header
- Mobile responsive menu

## 🛠️ Customization

### Update Content

**Products**: Edit `data/products.ts`
**Projects**: Edit `data/projects.ts`
**Hero Images**: Edit `data/site.ts`

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    blue: '#0B5ED7',  // Your primary blue
    red: '#E10600',   // Your primary red
  },
}
```

### Add New Pages

Create new file in `app/[locale]/your-page/page.tsx`

## 📦 Dependencies

```json
{
  "next": "14.2.3",
  "react": "^18.3.1",
  "framer-motion": "^11.2.10",
  "lucide-react": "^0.395.0",
  "tailwindcss": "^3.4.1"
}
```

## 🚀 Deployment to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

Vercel will detect Next.js and configure automatically.

### Environment Variables (if needed later)
```
# Add in Vercel dashboard
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

✅ Metadata configuration
✅ Open Graph tags
✅ Semantic HTML
✅ Alt text for images
✅ Proper heading hierarchy
✅ Mobile-friendly

## 🎯 Performance Tips

- Images are loaded from Unsplash (placeholder)
- Replace with optimized local images for production
- Use Next.js Image component for optimization
- Enable caching in production

## 📞 Contact Integration

The contact form currently logs to console. To connect to backend:

1. Create API route: `app/api/contact/route.ts`
2. Update form submission in `components/ContactForm.tsx`
3. Add email service (SendGrid, Resend, etc.)

Example API route:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email or save to database
  return Response.json({ success: true });
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
npm run build
```
This will show all type errors.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 💡 Tips

1. **Development**: Use `npm run dev` for hot reload
2. **Production**: Always run `npm run build` first
3. **Images**: Replace Unsplash URLs with your own images
4. **Content**: Update all placeholder content
5. **Brochures**: Add actual PDF/PPT files to `/public/downloads/`

---

**Built with ❤️ for GCCSOFI - Gulf Solidarity**
