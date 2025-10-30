# German Article Trainer

A React-based web application to help users learn German articles (der, die, das). Built with Vite, TypeScript, and Tailwind CSS for modern development and optimal performance.

## 🚀 Quick Setup for GitHub Pages

### Step 1: Create GitHub Repository
1. Create a new repository on GitHub named `german-article-trainer`
2. Clone this project to your local machine
3. Initialize git in the project folder:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/german-article-trainer.git
git push -u origin main
```

### Step 2: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click the **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment", set **Source** to **GitHub Actions**

### Step 3: Update Configuration
1. In `package.json`, update the homepage URL:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/german-article-trainer/"
   ```
2. The `vite.config.ts` is already configured with the correct base path

### Step 4: Deploy
Simply push to the `main` branch and GitHub Actions will automatically build and deploy your site.

Your site will be live at: `https://YOUR_USERNAME.github.io/german-article-trainer/`

## Local Development

To run the app on your local machine for development:

### 1. Install Dependencies
If you haven't already, install the project's dependencies:
```bash
npm install
```

### 2. Start the Development Server
Run the `dev` script:
```bash
npm run dev
```

This will start a local development server, and you can view your app in the browser at the URL it provides (usually `http://localhost:5173`). The server supports hot-reloading, so changes you make to the code will appear instantly.

## Troubleshooting Deployment

If your deployed site at `https://<YOUR_USERNAME>.github.io/german-article-trainer/` is showing a blank page or 404 errors for assets, please double-check your GitHub Pages settings.

1.  Go to your repository on GitHub.
2.  Click the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", ensure the **Source** is set to **GitHub Actions**.
5.  If it was set to "Deploy from a branch", change it to "GitHub Actions". After changing, you may need to re-run the deployment workflow by pushing a new commit to the `main` branch or by manually triggering it from the "Actions" tab.

This is the most common cause of deployment issues for Vite projects using GitHub Actions, as it ensures that the built files from the `dist` directory are served, not the source code from your repository root.
