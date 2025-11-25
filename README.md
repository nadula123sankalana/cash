# Uplyft Capital - Business Financing Website

A modern, professional one-page website for Uplyft Capital, built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern gradient design with purple/blue color scheme
- 📱 Fully responsive design (desktop, tablet, mobile)
- ⚡ Fast performance with Next.js 14
- 🎯 High-converting CTAs with vibrant accent colors
- ✨ Smooth animations and hover effects
- 🔒 Trust signals and security badges
- 📊 Clean, corporate FinTech aesthetic
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Vercel Configuration

The project is already configured for Vercel with:
- ✅ Optimized Next.js config
- ✅ SWC minification enabled
- ✅ Image optimization configured
- ✅ Compression enabled
- ✅ Proper TypeScript configuration
- ✅ Environment variables support

### Environment Variables (if needed)

If you need to add environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys, endpoints)

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   ├── Header.tsx       # Sticky navigation header
│   ├── Hero.tsx         # Hero section with form
│   ├── EligibilityForm.tsx # Multi-step eligibility form
│   ├── Process.tsx      # 3-step process section
│   ├── Benefits.tsx     # Why choose us section
│   ├── Testimonials.tsx # Client testimonials
│   ├── FinalCTA.tsx     # Final call-to-action
│   └── Footer.tsx       # Footer with links and contact
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json
```

## Design Specifications

- **Primary Gradient**: Dark blue to purple gradient
- **Accent Colors**: Cyan (#66D9EF), Magenta (#D81B60)
- **Typography**: Poppins/Montserrat (headings), Inter/Lato (body)
- **Text Color**: White on gradient backgrounds

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Poppins, Montserrat, Inter, Lato)

## Performance Optimizations

- SWC minification
- Image optimization
- Font optimization with preconnect
- Compressed assets
- Optimized bundle size

## License

Private - Uplyft Capital
