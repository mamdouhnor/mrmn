# MRMNSALT Deployment Guide

Complete guide for deploying MRMNSALT to Vercel and connecting with GoDaddy domain.

## 📋 Prerequisites

- [x] Vercel account (free tier works)
- [x] GoDaddy domain purchased
- [x] Git repository (GitHub, GitLab, or Bitbucket)
- [x] Node.js installed locally

## 🚀 Part 1: Deploy Frontend to Vercel

### Method 1: Using Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset**: Create React App
     - **Root Directory**: `frontend/website`
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`
   - Click "Deploy"

3. **Wait for deployment** (usually 2-3 minutes)

### Method 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from website directory**
   ```bash
   cd frontend/website
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **mrmnsalt** (or your choice)
   - In which directory? **.**
   - Override settings? **N**

5. **Production deployment**
   ```bash
   vercel --prod
   ```

## 🌐 Part 2: Connect GoDaddy Domain

### Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Domains**
3. Enter your domain (e.g., `yourdomain.com`)
4. Click **Add**
5. Vercel will show you DNS records to configure

### Step 2: Configure DNS in GoDaddy

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Navigate to **My Products** → **Domains**
   - Click **DNS** next to your domain

2. **Add/Update DNS Records**

   **For Root Domain (`yourdomain.com`):**
   - Type: **A**
   - Name: **@**
   - Value: **76.76.21.21** (Vercel's IP)
   - TTL: **600 seconds**

   **For WWW Subdomain (`www.yourdomain.com`):**
   - Type: **CNAME**
   - Name: **www**
   - Value: **cname.vercel-dns.com**
   - TTL: **1 Hour**

3. **Remove conflicting records**
   - Delete any existing A or CNAME records for @ and www
   - Keep MX records (for email) if you have them

4. **Save changes**

### Step 3: Verify Domain

1. Back in Vercel, click **Verify** next to your domain
2. DNS propagation can take **5 minutes to 48 hours**
3. Check status at [dnschecker.org](https://dnschecker.org)

## 🔧 Part 3: Backend Deployment Options

### Option A: Vercel Serverless (Recommended for simple APIs)

1. **Create API routes in `frontend/website/api/`**
   ```javascript
   // frontend/website/api/health.js
   module.exports = (req, res) => {
     res.status(200).json({ status: 'ok' });
   };
   ```

2. **Redeploy to Vercel**
   ```bash
   vercel --prod
   ```

### Option B: Railway (Recommended for full backend)

1. **Go to [railway.app](https://railway.app)**
2. **Create new project from GitHub**
3. **Configure**:
   - Root Directory: `/`
   - Start Command: `node index.js`
4. **Add environment variables**:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_NAME`
   - `DB_USER`
   - `DB_PASSWORD`
   - `PORT`
5. **Deploy**

### Option C: Render

1. **Go to [render.com](https://render.com)**
2. **New Web Service**
3. **Connect repository**
4. **Configure**:
   - Build Command: `npm install`
   - Start Command: `node index.js`
5. **Add environment variables**
6. **Create Web Service**

## 🔐 Environment Variables

### For Vercel (Frontend)

Add in Vercel Dashboard → Settings → Environment Variables:

```
REACT_APP_API_URL=https://your-backend-url.com
```

### For Backend (Railway/Render)

```
DB_HOST=db.bvvquhgqsgxrpwlqgwic.supabase.co
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=your_password
PORT=5000
NODE_ENV=production
```

## ✅ Verification Checklist

- [ ] Frontend deployed to Vercel
- [ ] Custom domain added in Vercel
- [ ] DNS records updated in GoDaddy
- [ ] Domain verified (green checkmark in Vercel)
- [ ] HTTPS certificate issued automatically
- [ ] Backend deployed (if applicable)
- [ ] Environment variables configured
- [ ] Database connection working
- [ ] Website accessible via custom domain

## 🔄 Continuous Deployment

Once set up, every push to your main branch will automatically deploy:

```bash
git add .
git commit -m "Update website"
git push origin main
# Vercel automatically deploys!
```

## 🐛 Troubleshooting

### Domain not working after 48 hours

1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
2. Verify DNS records match Vercel's requirements exactly
3. Clear browser cache (Ctrl + Shift + Delete)
4. Try incognito/private browsing mode

### Build fails on Vercel

1. Check build logs in Vercel dashboard
2. Ensure `package.json` has correct dependencies
3. Test build locally: `npm run build`
4. Check Node.js version compatibility

### Backend connection issues

1. Verify environment variables are set
2. Check database firewall settings (allow Vercel/Railway IPs)
3. Test database connection locally
4. Review backend logs

## 📞 Support Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GoDaddy Support**: [godaddy.com/help](https://www.godaddy.com/help)
- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Render Docs**: [render.com/docs](https://render.com/docs)

## 💡 Pro Tips

1. **Use Preview Deployments**: Every branch gets its own URL
2. **Set up Vercel Analytics**: Free insights into your traffic
3. **Enable CORS**: Make sure backend allows frontend domain
4. **Use Environment Variables**: Never commit secrets to Git
5. **Monitor Uptime**: Use UptimeRobot or similar services

---

**Need Help?** Check the main README.md for local development setup.
