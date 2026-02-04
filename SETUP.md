# Setup Guide

## Quick Start

1. **Navigate to the new folder:**
   ```bash
   cd d:\WorthyTen-Rebranding
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:3000` (no `/Rebrand/` path needed!)

## Changes Made

✅ Removed `/Rebrand/` base path - now uses root `/`
✅ Updated all logo paths to `/logo.png` (simple path)
✅ Updated vite.config.js base to `/`
✅ Created GitHub Actions workflow for automatic deployment
✅ Updated README with deployment instructions

## Logo Path

The logo now uses simple paths:
- Development: `/logo.png`
- Production: `/logo.png`

No more `/Rebrand/` prefix needed!

## GitHub Pages Deployment

1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create GitHub repository and push:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: "GitHub Actions"
   - The workflow will deploy automatically on push to `main`

4. Your site will be live at:
   `https://yourusername.github.io/your-repo-name/`

## Testing Locally

The logo should now load correctly at:
- `http://localhost:3000/logo.png`
- `http://localhost:3000/` (main page)

No more 404 errors! 🎉
