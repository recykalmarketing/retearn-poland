# Retearn Poland DRS Website

A modern, responsive website for Retearn's reverse vending machine (RVM) solutions in Poland.

## 🚀 Features

- **Multi-language Support**: Polish (default) and English with language switcher
- **Responsive Design**: Desktop, tablet, and mobile optimized
- **Scroll-Spy Navigation**: Active section highlighting while scrolling
- **5 Audience-Specific Sections**: Retailers, DRS Operators, Housing Cooperatives, Educational Institutions, Municipalities
- **Interactive Components**: Smooth animations and transitions
- **Lead Generation Form**: Contact form with audience pre-selection
- **Deployment Ready**: GitHub and Render configuration included
- **SEO Optimized**: Meta tags, Open Graph, and proper heading hierarchy

## 📋 Technology Stack

- **Framework**: Next.js 14 + React 18
- **Styling**: Tailwind CSS
- **Internationalization**: i18next + react-i18next
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Language Detection**: i18next-browser-languagedetector

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd retearn-website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your API keys (optional for initial dev)

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
retearn-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   └── page.module.css     # Page-specific styles
├── components/
│   ├── Header.tsx          # Navigation header with scroll-spy
│   ├── Hero.tsx            # Hero section with video placeholder
│   ├── AudienceSelector.tsx # 5 audience cards
│   ├── AudienceSection.tsx  # Reusable audience content section
│   ├── SolutionsSection.tsx # Solutions/services overview
│   ├── RVMSection.tsx       # Product showcase (Reklaim Ace & Bulk)
│   ├── TechnologySection.tsx # Technology blocks
│   ├── AboutSection.tsx     # Company information
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── LeadForm.tsx         # Contact form with calendar
│   ├── Footer.tsx           # Footer navigation
│   └── Logo.tsx             # SVG logo component
├── lib/
│   └── translations/
│       ├── en.json          # English content
│       └── pl.json          # Polish content
├── public/
│   └── images/              # Place images and videos here
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── render.yaml              # Render deployment config
└── README.md
```

## 🌐 Sections & Navigation

| Section | Anchor | Purpose |
|---------|--------|---------|
| Hero | `#hero` | Landing hero with video |
| Audience Selector | `#audience-selector` | 5 audience cards |
| For Retailers | `#retailers` | Retail-specific content |
| For DRS Operators | `#drs-operators` | Operator-specific content |
| For Housing Cooperatives | `#housing-cooperatives` | Housing-specific content |
| For Educational Institutions | `#educational-institutions` | Education-specific content |
| For Municipalities | `#municipalities` | Municipal-specific content |
| Solutions | `#solutions` | Service overview (Assess, Configure, Connect, Operate) |
| RVMs | `#rvms` | Reklaim Ace & Bulk product cards |
| Technology | `#technology` | Tech capabilities (Recognise, Track, Connect, Improve) |
| About | `#about` | Company information |
| FAQ | `#faq` | 6 frequently asked questions |
| Contact Form | `#book-meeting` | Lead generation form |

## 🎨 Customization

### Content Updates

All content is managed in:
- **English**: `lib/translations/en.json`
- **Polish**: `lib/translations/pl.json`

Edit these files to update text throughout the site.

### Images & Videos

1. **Hero Video**: Replace video path in `components/Hero.tsx`
   - Supports MP4, WebM formats
   - Add fallback image as poster
   - Place files in `public/videos/`

2. **Section Images**: Update placeholders in individual components
   - `components/AudienceSection.tsx` - Audience section visuals
   - `components/AboutSection.tsx` - Team/company image

3. **Product Images**: Update RVM product cards in `components/RVMSection.tsx`

### Colors & Styling

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#231f20',    // Main brand color (currently dark)
      secondary: '#f5f5f5',  // Light gray background
      accent: '#0070f3',     // Blue accent
    },
  },
}
```

### Form Integration

The lead form in `components/LeadForm.tsx` has integration points for:

1. **Email Services**: SendGrid, Mailchimp, HubSpot
2. **Calendar Booking**: Calendly, Cal.com, Acuity Scheduling
3. **CRM**: HubSpot, Salesforce

To integrate:

```typescript
// In LeadForm.tsx handleSubmit()
const response = await fetch('/api/submit-lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

Create an API route at `app/api/submit-lead/route.ts`

## 🚀 Deployment

### Render

1. **Connect Repository**:
   - Push code to GitHub
   - Connect GitHub repo to Render

2. **Set Environment Variables**:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://retearn.pl
   SENDGRID_API_KEY=your_key
   ```

3. **Deploy**:
   - `render.yaml` is configured for automatic builds
   - Auto-deploy on main branch push

### Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

Not recommended due to Next.js SSR requirements. Use Render or Vercel.

## 🔧 Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Environment Variables

Create `.env.local` for development:

```bash
cp .env.example .env.local
# Edit with your API keys
```

## 📊 Performance Optimization

- Image optimization via Next.js Image component
- Lazy loading for off-screen content
- CSS-in-JS with Tailwind for minimal bundle
- Font optimization with system fonts
- Minification and code splitting built-in

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Color contrast standards met

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Samsung Internet 14+

## 🔐 Security

- No sensitive data in frontend code
- API keys stored in environment variables
- HTTPS enforced in production
- Content Security Policy ready
- No known vulnerabilities in dependencies

## 📝 Content Checklist

Before launching:

- [ ] Replace hero video placeholder
- [ ] Add section images for each audience
- [ ] Add product images (Reklaim Ace & Bulk)
- [ ] Add team/company image for About section
- [ ] Integrate email service (SendGrid/Mailchimp/HubSpot)
- [ ] Set up Calendly or scheduling platform
- [ ] Configure analytics (Google Analytics/Hotjar)
- [ ] Update favicon
- [ ] Test all forms and submissions
- [ ] Verify Polish and English translations
- [ ] Test on mobile, tablet, desktop
- [ ] Set up domain and SSL certificate

## 🐛 Troubleshooting

### Language not switching
- Check browser localStorage
- Clear cache and reload
- Verify `i18n.changeLanguage()` is called

### Form not submitting
- Check browser console for errors
- Verify API endpoint is configured
- Check environment variables are set

### Video not playing
- Ensure video format is supported
- Check video file size and compression
- Use proper video codec (H.264 for MP4)

### Styles not loading
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check Tailwind config is correct

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [i18next](https://www.i18next.com)
- [Render Documentation](https://render.com/docs)

## 📄 License

Proprietary - Recykal Venture (Retearn)

## 🤝 Support

For issues or questions:
1. Check the FAQ section on the website
2. Review the troubleshooting section above
3. Contact the development team

---

**Built with Next.js, React, and Tailwind CSS**  
**Ready for production deployment on Render or Vercel**
