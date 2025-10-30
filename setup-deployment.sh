#!/bin/bash

# Setup script for German Article Trainer deployment to GitHub Pages
# Run this script to prepare your project for deployment

echo "🚀 Setting up German Article Trainer for GitHub Pages deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project to verify everything works
echo "🔨 Building project to verify setup..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Project is ready for GitHub Pages deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Update the homepage URL in package.json with your GitHub username"
    echo "2. Create a new repository on GitHub named 'german-article-trainer'"
    echo "3. Add the remote and push:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/german-article-trainer.git"
    echo "   git add ."
    echo "   git commit -m \"Initial commit\""
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo "4. Configure GitHub Pages to use GitHub Actions as the source"
    echo ""
    echo "Your site will be available at: https://YOUR_USERNAME.github.io/german-article-trainer/"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi