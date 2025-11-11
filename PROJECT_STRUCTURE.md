# MovieFinder Website - Project Structure

## Phase 1: Complete ✓

### Directory Structure

```
CMPT362_website/
├── app/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Section.tsx        # Section wrapper component
│   │   │   ├── Button.tsx         # Button component with variants
│   │   │   ├── Card.tsx           # Card component for content
│   │   │   ├── NavLink.tsx        # Smooth scroll navigation links
│   │   │   └── index.ts           # Component exports
│   │   └── sections/              # Page section components (ready for Phase 3-5)
│   ├── layout.tsx                 # Root layout with updated metadata
│   ├── page.tsx                   # Main page (to be updated in Phase 2)
│   └── globals.css
├── public/
│   └── assets/
│       ├── images/                # App logo, team photos, general images
│       ├── screenshots/           # App UI screenshots
│       ├── videos/                # Demo videos
│       ├── apk/                   # APK files
│       └── README.md              # Asset organization guide
└── package.json
```

### Components Created

1. **Section** - Reusable section wrapper with title
2. **Button** - Button component with primary, secondary, and outline variants
3. **Card** - Card component with hover effects
4. **NavLink** - Navigation links with smooth scrolling

### Metadata Updated

Updated [layout.tsx](app/layout.tsx) with:
- App title and description
- SEO keywords
- Author information
- Open Graph tags for social sharing

### Next Steps (Phase 2)

- Create navigation bar
- Set up single-page layout structure
- Implement scroll-to-section functionality
- Add responsive design

### Asset Preparation

Before moving to Phase 3, prepare and place these assets in the respective folders:
- App logo → `/public/assets/images/`
- Team member photos → `/public/assets/images/`
- App screenshots → `/public/assets/screenshots/`
- Demo video → `/public/assets/videos/`
- APK file → `/public/assets/apk/`
