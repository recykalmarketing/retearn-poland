# Deploy to Render - Simple 5-Step Guide ⚡

## ✅ What You Have
- ✅ Complete website (built)
- ✅ All code ready
- ⏳ Video (you'll provide in 1 hour)
- ⏳ Images (we'll create from video)

---

## 🚀 Deploy in 5 Minutes

### Step 1: Push to GitHub (2 minutes)
```bash
cd /Users/mylavarapuvinodkumar/Downloads/RVM/retearn-website

# Initialize git
git init
git add .
git commit -m "Retearn website - initial launch"

# Create GitHub repo at github.com/new
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/retearn-website.git
git branch -M main
git push -u origin main
```

**Stop here. Go to Step 2 while waiting.**

---

### Step 2: Connect to Render (2 minutes)
1. Go to **https://render.com**
2. Sign up (free account)
3. Click **"New +"** → **"Web Service"**
4. Select **"Deploy existing repository"**
5. Find your GitHub repo (`retearn-website`)
6. Click **"Connect"**

---

### Step 3: Configure Render (1 minute)
Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | `retearn-website` |
| **Environment** | `Node` |
| **Build Command** | `npm install --legacy-peer-deps && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | `18` |

All other fields = default

---

### Step 4: Add Environment (optional)
Click **"Environment"** → Add these:
```
NODE_ENV = production
NEXT_PUBLIC_SITE_URL = https://retearn-XXXXX.onrender.com
```

(Replace XXXXX with your random ID after deploy)

---

### Step 5: Deploy! (Click "Create Web Service")
- Render starts building automatically
- Takes ~2-3 minutes
- You'll see logs in real-time
- ✅ Done! Get your live URL

---

## 🎉 That's It!
Your website is now live at:
```
https://retearn-XXXXX.onrender.com
```

---

## 🎯 Next: Add Your Domain (Optional)
1. Go to Render → Settings → Custom Domain
2. Enter: `retearn.pl`
3. Update DNS at your domain registrar
4. Done in 10 minutes

---

## 🎬 Video Processing (When You Provide Video)

**What we'll do:**
1. You send video file (MP4, MOV, etc.)
2. We extract frames every 0.1s (creates smooth sequence)
3. Upload frames to replace placeholder
4. Video plays smoothly in hero section

**Timeline:**
- You provide video: 1 hour
- Process to frames: 5 minutes
- Upload & test: 5 minutes
- Total: ~15 minutes

---

## 📱 Preview Your Website

### Local (Before Deploy)
```bash
cd retearn-website
npm install --legacy-peer-deps
npm run dev
# Open http://localhost:3000
```

### After Deploy
```
https://retearn-XXXXX.onrender.com
```

---

## ❓ Common Issues & Fixes

**Issue**: Build fails
```
Fix: Check logs in Render dashboard → scroll down to see error
```

**Issue**: Site shows 404
```
Fix: Wait 2 minutes more (still building)
```

**Issue**: Styles look broken
```
Fix: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
```

**Issue**: Can't see my changes
```
Fix: Push to GitHub first:
git add .
git commit -m "Update"
git push
(Auto-redeploys in 1 minute)
```

---

## 🎬 When You Have Your Video

Just reply with:
1. Video file (MP4 preferred, under 20MB)
2. Or video URL (Google Drive, Dropbox)

I'll immediately:
- Extract frames
- Create optimized sequence
- Upload to your website
- Test in hero section
- Looks smooth & professional ✅

---

## ✅ Launch Checklist

- [ ] GitHub account created
- [ ] Code pushed to GitHub
- [ ] Render.com account created
- [ ] Repo connected to Render
- [ ] Deploy started (green checkmark)
- [ ] Website live at Render URL ✅
- [ ] Video file ready
- [ ] Video processed & uploaded
- [ ] Custom domain configured (optional)

---

## 🔗 Links You'll Need

- **GitHub**: https://github.com/new
- **Render**: https://render.com
- **Video File**: (You'll provide in 1 hour)

---

**That's it! Simple, fast, live in 5 minutes.** 🚀

Any questions? Just ask!
