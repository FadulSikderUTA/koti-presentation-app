# Koti Presentation System - Vercel Deployment Guide

## 📋 Deployment Summary

✅ **GitHub Repository:** [https://github.com/FadulSikderUTA/koti-presentation-app](https://github.com/FadulSikderUTA/koti-presentation-app)
✅ **Repository Status:** Ready for Vercel deployment
✅ **Password Protection:** Configured with environment variables

## 🚀 Vercel Deployment Steps

### Step 1: Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import from GitHub: `FadulSikderUTA/koti-presentation-app`
4. Click **"Import"**

### Step 2: Configure Project Settings

**Framework Preset:** Next.js
**Root Directory:** `.` (default)
**Build Command:** `npm run build` (default)
**Output Directory:** `.next` (default)
**Install Command:** `npm install` (default)

### Step 3: Environment Variables

Configure the following environment variables in Vercel:

#### Required Variables:
```
NEXT_PUBLIC_ENCRYPTED_PASSWORD=b4f4c73433abb7aa1c26729be0fade444d6c4476bf22f5e8480eeb2be0fdc6f1
```

#### Optional Variables:
```
NEXT_PUBLIC_SESSION_DURATION_MINUTES=30
```

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

## 🔐 Password Information

**Current Password:** `koti2025`
**SHA256 Hash:** `b4f4c73433abb7aa1c26729be0fade444d6c4476bf22f5e8480eeb2be0fdc6f1`

### To Change Password:

1. Generate new hash:
   ```bash
   node scripts/generate-password-hash.js your_new_password
   ```

2. Update environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Update `NEXT_PUBLIC_ENCRYPTED_PASSWORD` with new hash
   - Redeploy the application

## 🛠 Project Features

### ✅ Completed Features:
- Password protection system with SHA256 hashing
- Professional landing page matching presentation theme
- Business plan presentation (20 slides)
- Interactive credit scoring framework
- Responsive design system
- Session management with configurable timeout
- Multi-page architecture
- Environment variable configuration

### 📱 Supported Devices:
- Desktop (optimized)
- Tablet (responsive)
- Mobile (responsive)

### 🔒 Security Features:
- Client-side password validation
- Session timeout (30 minutes default)
- Environment variable protection
- No sensitive data in repository

## 🌐 Live URLs (After Deployment)

- **Production URL:** `https://koti-presentation-app.vercel.app` (or custom domain)
- **Preview URLs:** Generated for each Git branch

## 📊 Presentation Structure

### Business Plan (20 Slides):
1. Title & Company Overview
2. Mission Statement  
3. Problem Statement
4. Market Data & Opportunity
5. Our Solution
6. Business Solutions
7. Value Proposition
8. Revenue Model
9. Market Opportunity
10. Customer Profiles
11. Go-to-Market Strategy
12. Implementation Timeline
13. Financial Projections
14. Capital Plan
15. Profitability Model
16. **Scoring Component** (Trinity Scoring App)
17. Market Traction
18. Competitive Analysis
19. Team Overview
20. Contact Information

### Interactive Credit Scoring Framework:
- 5-phase methodology visualization
- Dynamic data input and score calculation
- Professional charts and visualizations
- Responsive design for all devices

## 🚨 Troubleshooting

### Common Issues:

1. **Password not working:**
   - Check `NEXT_PUBLIC_ENCRYPTED_PASSWORD` in Vercel environment variables
   - Ensure hash was generated correctly
   - Redeploy after changing environment variables

2. **Session timeout too short/long:**
   - Adjust `NEXT_PUBLIC_SESSION_DURATION_MINUTES`
   - Default is 30 minutes if not specified

3. **Build failures:**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are in package.json
   - Check for TypeScript errors

### Debugging Steps:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Test locally with `npm run build`
4. Check browser console for client-side errors

## 🔄 Continuous Deployment

- **Automatic deployment:** Every push to `main` branch
- **Preview deployments:** Every pull request
- **Rollback:** Available through Vercel dashboard

## 📞 Support

For deployment issues or questions:
- Check Vercel documentation: https://vercel.com/docs
- Review GitHub repository: https://github.com/FadulSikderUTA/koti-presentation-app
- Contact development team

---

**Koti Credit Bureau** • www.kotibd.com • © 2025