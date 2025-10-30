# German Article Trainer

This is a web application to help users learn German articles, now structured as a standard Vite + React project for easy development and deployment.

## Next Steps to Deploy to GitHub Pages

You are almost there! Just follow these final steps.

### 1. Install Dependencies

First, you need to install all the project's dependencies using npm (Node Package Manager). If you don't have Node.js and npm installed, you can download them from [nodejs.org](https://nodejs.org/).

Open your project in a terminal and run:

```bash
npm install
```

### 2. Update Your GitHub Username

You need to tell the project your specific GitHub username.

Open the `package.json` file and find the `homepage` line. Replace `<YOUR_USERNAME>` with your actual GitHub username.

```jsonc
// before
"homepage": "https://<YOUR_USERNAME>.github.io/german-article-trainer",

// after (example)
"homepage": "https://johndoe.github.io/german-article-trainer",
```
*The repository name has already been set for you.*

### 3. Run the Deployment Command

Once the configuration is updated, run the deploy script from your terminal:

```bash
npm run deploy
```

This command will automatically:
1.  Build your application into a static `dist` folder.
2.  Push the contents of that folder to a `gh-pages` branch in your repository.

### 4. Configure GitHub Repository Settings

The final step is to tell GitHub to serve your website from the new branch.

1.  Go to your repository on GitHub.
2.  Click the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", set the **Source** to **Deploy from a branch**.
5.  Select the **`gh-pages`** branch and the **`/ (root)`** folder.
6.  Click **Save**.

After a few minutes, your site will be live at the URL you set in the `homepage` field!

## Local Development

To run the app on your local machine for development, use the `dev` script.

```bash
npm run dev
```

This will start a local development server, and you can view your app in the browser at the URL it provides (usually `http://localhost:5173`). The server supports hot-reloading, so changes you make to the code will appear instantly.