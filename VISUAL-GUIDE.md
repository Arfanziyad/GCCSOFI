# 🎨 GCCSOFI Website - Visual Guide

## 🏠 Home Page Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (Transparent → White on scroll)          │
│  [GCCSOFI Logo]              [Home Products...] │
└─────────────────────────────────────────────────┘
│                                                   │
│  ╔═══════════════════════════════════════════╗  │
│  ║     HERO SLIDER (Auto-rotating)           ║  │
│  ║                                           ║  │
│  ║              PRODUCTS                     ║  │
│  ║   Premium Construction & Interior         ║  │
│  ║           Solutions                       ║  │
│  ║                                           ║  │
│  ║         ● ● ● ●  (Indicators)             ║  │
│  ╚═══════════════════════════════════════════╝  │
│                                                   │
├─────────────────────────────────────────────────┤
│                 OUR PRODUCTS                      │
│                                                   │
│  ┌───────┐  ┌───────┐  ┌───────┐               │
│  │       │  │       │  │       │                │
│  │ Card  │  │ Card  │  │ Card  │  (Row 1)      │
│  │   1   │  │   2   │  │   3   │                │
│  └───────┘  └───────┘  └───────┘                │
│                                                   │
│  ┌───────┐  ┌───────┐  ┌───────┐               │
│  │       │  │       │  │       │                │
│  │ Card  │  │ Card  │  │ Card  │  (Row 2)      │
│  │   4   │  │   5   │  │   6   │                │
│  └───────┘  └───────┘  └───────┘                │
│                                                   │
├─────────────────────────────────────────────────┤
│              GET IN TOUCH                         │
│                                                   │
│  ┌─────────────────────────────────────────┐   │
│  │  Name:    [________________]            │    │
│  │  Email:   [________________]            │    │
│  │  Phone:   [________________]            │    │
│  │  Message: [________________]            │    │
│  │           [________________]            │    │
│  │           [   SEND MESSAGE  ]           │    │
│  └─────────────────────────────────────────┘   │
│                                                   │
├─────────────────────────────────────────────────┤
│           DOWNLOAD RESOURCES                      │
│                                                   │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │  📄 Brochure     │  │  📊 Presentation  │    │
│  │  Download PDF    │  │  Download PPT     │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                   │
├─────────────────────────────────────────────────┤
│                    FOOTER                         │
│  [Company Info] [Links] [Products] [Contact]    │
│              © 2026 GCCSOFI                      │
└─────────────────────────────────────────────────┘

 ▲
 │
 │  FLOATING SIDEBAR (Left edge)
 │  ┌─────┐
 │  │ in  │  LinkedIn
 │  ├─────┤
 │  │ 📞  │  Phone
 │  ├─────┤
 │  │ 💬  │  WhatsApp
 │  ├─────┤
 │  │ ✉   │  Email
 │  └─────┘
 │    ◀    Toggle
```

## 📱 Responsive Behavior

### Desktop (1024px+)
```
Products: 3 columns
┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│ 4  │ │ 5  │ │ 6  │
└────┘ └────┘ └────┘
```

### Tablet (768px - 1023px)
```
Products: 2 columns
┌────┐ ┌────┐
│ 1  │ │ 2  │
└────┘ └────┘
┌────┐ ┌────┐
│ 3  │ │ 4  │
└────┘ └────┘
┌────┐ ┌────┐
│ 5  │ │ 6  │
└────┘ └────┘
```

### Mobile (<768px)
```
Products: 1 column
┌─────────┐
│    1    │
└─────────┘
┌─────────┐
│    2    │
└─────────┘
┌─────────┐
│    3    │
└─────────┘
```

## 🎨 Color Usage

```
╔═══════════════════════════════════════╗
║  Primary Blue (#0B5ED7)               ║
║  - Headings                           ║
║  - Nav hover                          ║
║  - Section titles                     ║
║  - Icons                              ║
╚═══════════════════════════════════════╝

╔═══════════════════════════════════════╗
║  Primary Red (#E10600)                ║
║  - CTA buttons                        ║
║  - Hover states                       ║
║  - Important highlights               ║
╚═══════════════════════════════════════╝

╔═══════════════════════════════════════╗
║  White (#FFFFFF)                      ║
║  - Backgrounds                        ║
║  - Cards                              ║
║  - Text on dark                       ║
╚═══════════════════════════════════════╝
```

## 📄 Product Page Layout

```
┌─────────────────────────────────────────────┐
│  NAVBAR                                      │
└─────────────────────────────────────────────┘
│                                              │
│  ╔════════════════════════════════════════╗ │
│  ║  HERO IMAGE                            ║ │
│  ║                                        ║ │
│  ║  Product Title                         ║ │
│  ║  Description                           ║ │
│  ║  [Request Quote]                       ║ │
│  ╚════════════════════════════════════════╝ │
│                                              │
├──────────────────────────────────────────────┤
│          KEY FEATURES                        │
│                                              │
│  ✓ Feature 1    ✓ Feature 2    ✓ Feature 3 │
│  ✓ Feature 4    ✓ Feature 5    ✓ Feature 6 │
│                                              │
├──────────────────────────────────────────────┤
│              GALLERY                         │
│                                              │
│  ╔════════════════════════════════════════╗ │
│  ║     Main Image (Selected)              ║ │
│  ╚════════════════════════════════════════╝ │
│                                              │
│  [thumb] [thumb] [thumb] [thumb]            │
│                                              │
├──────────────────────────────────────────────┤
│      TECHNICAL SPECIFICATIONS                │
│                                              │
│  Max Height:      Up to 12 meters           │
│  Max Width:       Unlimited                 │
│  Thickness:       65mm - 150mm              │
│  ...                                         │
│                                              │
├──────────────────────────────────────────────┤
│         READY TO GET STARTED?                │
│  [Request Quote]  [Call Us Now]             │
└──────────────────────────────────────────────┘
```

## 🏗️ Project Page Layout

```
┌─────────────────────────────────────────────┐
│  NAVBAR                                      │
└─────────────────────────────────────────────┘
│                                              │
│  ╔════════════════════════════════════════╗ │
│  ║  HERO IMAGE                            ║ │
│  ║                                        ║ │
│  ║  [Commercial] [2024]                   ║ │
│  ║  Project Title                         ║ │
│  ║  📍 Location                           ║ │
│  ║  Description                           ║ │
│  ╚════════════════════════════════════════╝ │
│                                              │
├──────────────────────────────────────────────┤
│        PROJECT DETAILS                       │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │Location  │  │   Year   │  │ Category │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                              │
├──────────────────────────────────────────────┤
│         PROJECT GALLERY                      │
│                                              │
│  ╔════════════════════════════════════════╗ │
│  ║     Main Image (Selected)              ║ │
│  ╚════════════════════════════════════════╝ │
│                                              │
│  [thumb] [thumb] [thumb] [thumb]            │
│                                              │
├──────────────────────────────────────────────┤
│       WANT A SIMILAR PROJECT?                │
│  [Contact Us]  [View All Projects]          │
└──────────────────────────────────────────────┘
```

## 🔄 Hero Slider Animation

```
Frame 1 (0-4s):
╔════════════════════════╗
║  Image 1               ║  ← Visible
║                        ║     Opacity: 1
╚════════════════════════╝

        ↓ Fade transition (1s)

Frame 2 (4-8s):
╔════════════════════════╗
║  Image 2               ║  ← Visible
║                        ║     Opacity: 1
╚════════════════════════╝

        ↓ Fade transition (1s)

Frame 3 (8-12s):
╔════════════════════════╗
║  Image 3               ║  ← Visible
║                        ║     Opacity: 1
╚════════════════════════╝

        ↓ Repeats...

Note: Text "PRODUCTS" stays fixed throughout
```

## 📲 Floating Sidebar States

```
EXPANDED:                    COLLAPSED:
┌──────────────┐            ┌──┐
│ in LinkedIn  │ ◀          │◀ │
├──────────────┤            └──┘
│ 📞 Phone     │
├──────────────┤
│ 💬 WhatsApp  │
├──────────────┤
│ ✉  Email     │
└──────────────┘

Click ◀ to toggle
Smooth slide animation
```

## 🎯 Interactive Elements

### Product Card Hover
```
NORMAL:                  HOVER:
┌──────────┐            ┌──────────┐
│          │            │          │  ← Scales 1.1x
│  Image   │    →       │  Image   │     Border: red
│          │            │          │     Shadow: larger
│  Title   │            │  Title   │  ← Color: red
└──────────┘            └──────────┘
```

### Button States
```
NORMAL:          HOVER:           ACTIVE:
┌──────────┐    ┌──────────┐    ┌──────────┐
│  Submit  │ →  │  Submit  │ →  │  Submit  │
└──────────┘    └──────────┘    └──────────┘
Red             Darker Red       Pressed
```

## 📊 Site Map

```
GCCSOFI Website
│
├─ Home (/)
│  ├─ Hero Slider
│  ├─ Products Grid
│  ├─ Contact Form
│  └─ Brochure Downloads
│
├─ Products (/products)
│  ├─ Products Listing
│  └─ Individual Products (/products/[slug])
│     ├─ Operable Walls
│     ├─ HPL Cubicles
│     ├─ Pivot Doors
│     ├─ Hydraulic Doors
│     ├─ Terrace Solutions
│     └─ Office Partitions
│
├─ Projects (/projects)
│  ├─ Projects Listing
│  └─ Individual Projects (/projects/[slug])
│     ├─ Dubai Tower
│     ├─ Riyadh Center
│     ├─ Abu Dhabi Hotel
│     ├─ Kuwait HQ
│     └─ Doha Campus
│
├─ About (/about)
│  ├─ Company Overview
│  ├─ Statistics
│  └─ Values
│
├─ Contact (/contact)
│  ├─ Contact Info
│  └─ Contact Form
│
└─ Legal
   ├─ Privacy Policy (/privacy)
   └─ Terms of Service (/terms)
```

## 🌐 Route Structure (i18n)

```
/
├─ /en (English - Default)
│  ├─ /en/products
│  ├─ /en/projects
│  ├─ /en/about
│  └─ /en/contact
│
└─ /ar (Arabic - Prepared)
   ├─ /ar/products
   ├─ /ar/projects
   ├─ /ar/about
   └─ /ar/contact
```

## 🎬 Animation Timeline

```
Page Load:
0.0s  │ ▶ Navbar slides down
      │
0.3s  │ ▶ Hero content fades in
      │
0.5s  │ ▶ Hero subtitle appears
      │
Scroll:
      │ ▶ Product cards fade in
      │   (staggered 0.1s each)
      │
      │ ▶ Contact form appears
      │
      │ ▶ Download cards appear
      │   (staggered)
```

## 💾 Data Flow

```
┌────────────────┐
│  data/         │
│  - products.ts │ ──┐
│  - projects.ts │   │
│  - site.ts     │   │
└────────────────┘   │
                     │
                     ▼
              ┌──────────────┐
              │  Components  │
              │  Read Data   │
              └──────────────┘
                     │
                     ▼
              ┌──────────────┐
              │   Pages      │
              │   Render     │
              └──────────────┘
                     │
                     ▼
              ┌──────────────┐
              │   Browser    │
              │   Display    │
              └──────────────┘
```

---

This visual guide helps understand the complete structure and behavior of the GCCSOFI website.
