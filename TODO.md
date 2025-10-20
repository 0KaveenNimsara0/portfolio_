# TODO: Fix White Screen on GitHub Pages Deployment

## Steps to Complete
- [x] Update vite.config.js to set base path to '/portfolio_/' for GitHub Pages compatibility
- [x] Change BrowserRouter to HashRouter in src/App.jsx for client-side routing on static hosting
- [x] Run npm run build to generate production build
- [x] Deploy the dist folder to GitHub Pages (push to gh-pages branch or use GitHub Actions)
- [x] Clean and repopulate public folder with assets (33.png, cv.pdf, title.png)
- [x] Rebuild and redeploy with correct assets
- [ ] Confirm assets load correctly on deployed site
