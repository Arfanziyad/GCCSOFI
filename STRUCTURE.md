# GCCSOFI Website - Project Structure

## Directory Structure

```
GCCSOFI/
├── app/
│   ├── [locale]/               # i18n routes
│   │   ├── layout.tsx          # Locale-specific layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── products/           # Products pages
│   │   │   ├── page.tsx        # Products listing
│   │   │   └── [slug]/         # Individual product pages
│   │   ├── projects/           # Projects pages
│   │   │   ├── page.tsx        # Projects listing
│   │   │   └── [slug]/         # Individual project pages
│   │   ├── privacy/            # Privacy policy
│   │   └── terms/              # Terms of service
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Root redirect
│   └── globals.css             # Global styles
├── components/                 # React components
│   ├── Navbar.tsx              # Navigation with scroll behavior
│   ├── HeroSlider.tsx          # Auto-sliding hero
│   ├── ProductCard.tsx         # Product card component
│   ├── ProductGrid.tsx         # Products grid
│   ├── ProjectCard.tsx         # Project card component
│   ├── ContactForm.tsx         # Contact form
│   ├── BrochureDownloads.tsx   # Download section
│   ├── FloatingContactSidebar.tsx # Sidebar with social links
│   └── Footer.tsx              # Footer component
├── data/                       # Data files
│   ├── products.ts             # Products data
│   ├── projects.ts             # Projects data
│   └── site.ts                 # Site configuration
├── types/                      # TypeScript types
│   └── index.ts                # Type definitions
├── public/                     # Static assets
│   ├── downloads/              # Downloadable files
│   ├── logo.svg                # Company logo
│   └── favicon.svg             # Favicon
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.mjs
    └── postcss.config.mjs
```

## Key Features

### 1. i18n Ready
- Dynamic locale routes: `/[locale]/...`
- Supports English (en) and Arabic (ar)
- Easy to add more languages

### 2. Components
- **Navbar**: Transparent on hero, solid white on scroll
- **HeroSlider**: Auto-transitions every 4 seconds
- **ProductGrid**: Responsive 3-2-1 column layout
- **FloatingContactSidebar**: Collapsible social links
- **ContactForm**: Frontend validation ready
- **BrochureDownloads**: Professional download cards

### 3. Pages
- Home with all sections
- Products listing + individual pages
- Projects showcase + individual pages
- About company
- Contact page
- Privacy & Terms

### 4. Styling
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Brand colors: Blue (#0B5ED7), Red (#E10600)
- Clean, professional corporate design

### 5. SEO
- Metadata configuration
- Open Graph tags
- Semantic HTML
- Accessible components

## Development

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

## Deployment

Ready to deploy to Vercel:
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

## Future Enhancements

- Add Arabic translations
- Connect contact form to backend
- Add actual brochure files
- Implement CMS for content management
- Add search functionality
- Include testimonials section
