# Development Workflow

## Branch Strategy

This project uses a branch-based workflow with Vercel preview deployments.

```
main (production)     → austinrose.io
feature branches      → preview URLs (auto-generated)
```

## Quick Reference

### Starting New Work

```bash
# Create a feature branch from main
git checkout main
git pull origin main
git checkout -b feature/description-of-change

# Examples:
git checkout -b feature/add-blog-search
git checkout -b fix/mobile-nav-issue
git checkout -b design/update-color-scheme
git checkout -b content/new-blog-post
```

### During Development

```bash
# Start local dev server
npm run dev

# View at http://localhost:3000
```

### Committing Changes

```bash
# Stage and commit
git add .
git commit -m "Brief description of changes"

# Push to create/update preview
git push origin feature/your-branch-name
```

### Getting Preview URL

After pushing a branch, Vercel automatically creates a preview deployment:
- Check the GitHub PR for the preview link
- Or visit: `https://austin-portfolio-<hash>-austinjamesrose.vercel.app`

### Merging to Production

Option A: Via GitHub PR (Recommended)
1. Go to GitHub repo
2. Create Pull Request from your branch to `main`
3. Review the Vercel preview link in the PR
4. Merge when satisfied

Option B: Direct merge (for small changes)
```bash
git checkout main
git pull origin main
git merge feature/your-branch-name
git push origin main
git branch -d feature/your-branch-name
```

## Branch Naming Conventions

| Prefix | Use Case | Example |
|--------|----------|---------|
| `feature/` | New functionality | `feature/add-blog-search` |
| `fix/` | Bug fixes | `fix/mobile-menu-overlap` |
| `design/` | Visual/UI changes | `design/update-typography` |
| `refactor/` | Code improvements | `refactor/component-structure` |
| `content/` | Content updates | `content/new-blog-post` |

## Blog Content Workflow

### Adding a New Post

1. Create MDX file in `content/posts/`:
   ```bash
   # Create new post
   touch content/posts/my-new-post.mdx
   ```

2. Add frontmatter:
   ```yaml
   ---
   title: "My New Post"
   date: "2025-01-15"
   description: "Brief description"
   tags: ["analytics", "career"]
   featured: false
   draft: false
   ---
   ```

3. Write content in Markdown/MDX format

4. Preview locally with `npm run dev`

5. Commit and push to deploy

### Publishing a Draft

Set `draft: false` in frontmatter to publish a post.

### Featuring a Post

Set `featured: true` to show the post on the homepage.

## Useful Commands

```bash
# See all branches
git branch -a

# Switch between branches
git checkout branch-name

# Delete a local branch (after merging)
git branch -d branch-name

# Delete a remote branch
git push origin --delete branch-name

# Update branch with latest main
git checkout your-branch
git rebase main

# Discard all local changes
git checkout -- .

# Check deployment status
# Visit: https://vercel.com/austinjamesrose/austin-portfolio
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev

# Build for production (to test before deploying)
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

## Environment

- **Production URL**: https://austinrose.io
- **GitHub Repo**: https://github.com/austinjamesrose/austin-portfolio
- **Vercel Dashboard**: https://vercel.com/austinjamesrose/austin-portfolio

## Typical Workflow Example

```bash
# 1. Start fresh from main
git checkout main && git pull

# 2. Create feature branch
git checkout -b content/new-analytics-post

# 3. Create content
touch content/posts/my-analytics-journey.mdx
# ... add frontmatter and content ...

# 4. Test locally
npm run dev
# ... view at localhost:3000 ...

# 5. Commit and push for preview
git add .
git commit -m "Add new blog post: My Analytics Journey"
git push origin content/new-analytics-post

# 6. Check Vercel preview URL (from GitHub or Vercel dashboard)

# 7. If happy, merge to main
git checkout main
git merge content/new-analytics-post
git push origin main

# 8. Clean up
git branch -d content/new-analytics-post
```
