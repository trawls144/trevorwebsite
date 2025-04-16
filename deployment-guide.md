# Deployment Guide: Trevor Rawls Personal Website

This guide provides step-by-step instructions for deploying your personal website using GitHub, Vercel, and connecting it to your Squarespace domain (trevorrawls.com).

## Table of Contents
1. [GitHub Repository Setup](#github-repository-setup)
2. [Vercel Deployment](#vercel-deployment)
3. [Connecting Your Squarespace Domain](#connecting-your-squarespace-domain)
4. [Maintaining Your Website](#maintaining-your-website)

## GitHub Repository Setup

GitHub will be used to store your website code and enable version control.

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [GitHub.com](https://github.com)
2. Click "Sign up" and follow the registration process
3. Verify your email address

### Step 2: Create a New Repository
1. Click the "+" icon in the top-right corner and select "New repository"
2. Name your repository `trevor-rawls-website` (or any name you prefer)
3. Add a description: "Personal website for Trevor Rawls"
4. Choose "Public" visibility (or Private if you prefer)
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Website Files
1. On your repository page, click "Add file" > "Upload files"
2. Drag and drop all your website files and folders or use the file selector
   - Make sure to maintain the folder structure (css/, js/, companies/, images/)
   - Ensure index.html is in the root directory
3. Add a commit message: "Initial website upload"
4. Click "Commit changes"

Alternatively, if you're comfortable with Git commands:

```bash
# Clone the repository
git clone https://github.com/yourusername/trevor-rawls-website.git

# Copy your website files to the cloned repository folder
# Then add, commit, and push the changes
cd trevor-rawls-website
git add .
git commit -m "Initial website upload"
git push origin main
```

## Vercel Deployment

Vercel provides fast, global hosting for static websites with automatic deployments from GitHub.

### Step 1: Create a Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" to connect your GitHub account
4. Follow the authorization process

### Step 2: Import Your GitHub Repository
1. Once logged in to Vercel, click "Add New..." > "Project"
2. Under "Import Git Repository," find and select `trevor-rawls-website`
3. Keep the default settings:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty for static sites)
   - Output Directory: (leave empty)
4. Click "Deploy"

### Step 3: Verify Deployment
1. Wait for the deployment to complete (usually takes less than a minute)
2. Vercel will provide a URL (e.g., `trevor-rawls-website.vercel.app`)
3. Click the URL to verify your website is working correctly
4. Check all pages, links, and responsive layouts

## Connecting Your Squarespace Domain

Connect your Squarespace domain (trevorrawls.com) to your Vercel deployment.

### Step 1: Add Your Custom Domain to Vercel
1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Enter `trevorrawls.com` in the domain field
3. Click "Add"
4. Vercel will provide DNS configuration instructions
5. Note down the following information:
   - Type: A or CNAME
   - Name: @ or www
   - Value: (the provided Vercel value)
   - TTL: (usually automatic)

### Step 2: Configure DNS Settings in Squarespace
1. Log in to your Squarespace account
2. Go to "Settings" > "Domains"
3. Select `trevorrawls.com`
4. Click "Advanced DNS Settings"
5. Remove any existing A or CNAME records pointing to Squarespace
6. Add new records based on Vercel's instructions:
   - For the root domain (@):
     - Add an A record pointing to Vercel's IP address
   - For the www subdomain:
     - Add a CNAME record pointing to your Vercel project URL

### Step 3: Verify Domain Connection
1. Return to Vercel and check the domain status
2. DNS changes can take up to 48 hours to propagate, but often complete within a few hours
3. Once verified, your website will be accessible at `trevorrawls.com`

## Maintaining Your Website

### Making Updates
1. Make changes to your local website files
2. Commit and push changes to GitHub:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
3. Vercel will automatically deploy the updates

### Monitoring
1. Use Vercel's dashboard to monitor:
   - Deployment status
   - Performance metrics
   - Error logs
2. Set up Vercel's GitHub integration for automatic previews on pull requests

### Troubleshooting
- **Domain Issues**: If your domain doesn't connect, verify DNS settings and check for propagation delays
- **Deployment Failures**: Check Vercel's build logs for errors
- **Website Problems**: Use browser developer tools to identify CSS or JavaScript issues

## Additional Resources
- [GitHub Documentation](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Squarespace Domain Help](https://support.squarespace.com/hc/en-us/articles/205812348-Domain-registration-FAQ)

---

If you encounter any issues during deployment, feel free to reach out for assistance.
