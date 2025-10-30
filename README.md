# German Article Trainer

This is a web application to help users learn German articles, structured as a standard Vite + React project for easy development and deployment.

## Deployment to GitHub Pages

This project uses **GitHub Actions** for automated deployment. You do not need to build or deploy the project manually.

### How it Works
1.  **Push to `main`**: Simply commit and push your changes to the `main` branch.
2.  **Automation Takes Over**: A GitHub Actions workflow will automatically trigger. It will build your application and deploy the result to your GitHub Pages site.
3.  **Check the Status**: You can monitor the progress of the deployment by going to the **Actions** tab in your GitHub repository.

### First-Time Setup
The first time you push to `main` after this workflow is added, you may need to configure your repository settings to enable GitHub Pages.

1.  Go to your repository on GitHub.
2.  Click the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", set the **Source** to **GitHub Actions**.

Your site will be live at `https://<YOUR_USERNAME>.github.io/german-article-trainer/`.

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
