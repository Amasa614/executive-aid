# ExecutiveAid - Deployment Configuration

This repository contains the ExecutiveAid website with deployment configuration pointing to the Next.js version.

## Project Structure

```
ExecutiveAid/
├── executive-aid/          # Original React app (deprecated)
├── executive-aid-nextjs/   # New Next.js + TypeScript app (ACTIVE)
├── vercel.json            # Vercel deployment configuration
├── netlify.toml          # Netlify deployment configuration
└── package.json          # Root deployment scripts
```

## 🚀 Deployment

The deployment is configured to use the **Next.js version** in the `executive-aid-nextjs/` directory.

### Quick Deploy

#### Option 1: Vercel (Recommended)
1. Connect your repository to Vercel
2. The `vercel.json` file will automatically configure the deployment
3. Deploy automatically

#### Option 2: Netlify
1. Connect your repository to Netlify
2. The `netlify.toml` file will configure the build settings
3. Deploy automatically

#### Option 3: Manual Build
```bash
# Install dependencies
npm run install-deps

# Build for production
npm run build

# Start production server (for testing)
npm run start
```

## 🛠️ Development

To work on the Next.js version:

```bash
# Navigate to the Next.js directory
cd executive-aid-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Active Project

**Current deployment points to**: `executive-aid-nextjs/`

This directory contains:
- Next.js 15 with TypeScript
- Tailwind CSS styling
- Optimized images and assets
- Contact forms with Formspree
- Responsive design
- SEO optimizations

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment settings
- `netlify.toml` - Netlify deployment settings
- `executive-aid-nextjs/next.config.ts` - Next.js configuration with static export

## 📝 Notes

- The original React app in `executive-aid/` is kept for reference but is not deployed
- All deployment commands automatically target the Next.js version
- Static export is enabled for maximum compatibility with hosting platforms 