# Video Processing Guide - For Hero Section ⚡

When you provide your video, here's how we'll optimize it for the hero section.

---

## 📹 What We'll Do

**Goal**: Convert your video into an optimized sequence for smooth playback

**Process**:
1. Extract frames from video (every 0.1 seconds)
2. Compress each frame (WebP format, optimized)
3. Create fallback image
4. Upload to website
5. Test smooth playback

**Result**: Smooth, professional video in hero section ✅

---

## 🎬 Option A: Automatic Processing (Recommended)

### When You Provide Video:

**Just send me:**
```
- Video file (MP4, MOV, WebM - any format)
- OR video URL (Google Drive, Dropbox, YouTube)
- Duration: 5-15 seconds (recommended)
- Aspect ratio: 16:9 (wide format for hero)
```

**I'll immediately:**
```
1. Extract frames at 0.1s intervals (smoother)
2. Compress to WebP (80% smaller)
3. Create poster image (fallback)
4. Upload to website
5. Test in browser
6. Send you preview link
```

**Turnaround**: 15 minutes max ⚡

---

## 🛠️ Option B: Manual Processing (DIY)

If you want to process locally, here's how:

### Install FFmpeg
**macOS**:
```bash
brew install ffmpeg
```

**Linux**:
```bash
sudo apt-get install ffmpeg
```

**Windows**:
Download from https://ffmpeg.org/download.html

---

### Extract Frames

```bash
# Create frames folder
mkdir -p public/videos/frames

# Extract frames (1 frame per 0.1 seconds)
ffmpeg -i your_video.mp4 -vf fps=10 public/videos/frames/frame_%04d.png

# This creates: frame_0001.png, frame_0002.png, frame_0003.png, etc.
```

---

### Compress to WebP (Smaller Files)

```bash
# Install ImageMagick
brew install imagemagick

# Compress all frames
for file in public/videos/frames/frame_*.png; do
  convert "$file" -quality 85 "${file%.png}.webp"
  rm "$file"  # Delete PNG after conversion
done
```

**Result**: 80% smaller files, same quality ✅

---

### Create Poster Image (Fallback)

```bash
# Use first frame as poster
cp public/videos/frames/frame_0001.webp public/videos/poster.webp

# Or use ImageMagick to create a blurred version
convert public/videos/poster.webp -blur 0x5 public/videos/poster-blur.webp
```

---

### Upload to Website

Place files here:
```
public/videos/
├── frames/
│   ├── frame_0001.webp
│   ├── frame_0002.webp
│   ├── frame_0003.webp
│   └── ... (all frames)
└── poster.webp (fallback image)
```

---

### Update Component Code

Edit `components/Hero.tsx`:

```typescript
// Find this line:
<video
  autoPlay
  muted
  loop
  className="w-full h-full object-cover opacity-40"
  poster="data:image/svg+xml,%3Csvg..."
>
  <source src="/placeholder-hero-video.mp4" type="video/mp4" />
</video>

// Replace with:
<video
  autoPlay
  muted
  loop
  className="w-full h-full object-cover opacity-40"
  poster="/videos/poster.webp"
>
  <source src="/videos/hero-optimized.mp4" type="video/mp4" />
</video>
```

---

## 📊 File Size Comparison

### Before Optimization
```
Video: hero.mp4 = 15MB
Problem: Slow loading, delays page
```

### After Optimization (with frames)
```
Video: hero-optimized.mp4 = 3-5MB
+ Poster: poster.webp = 200KB
+ Frames: 100 frames × 50KB = 5MB (lazy loaded)
Result: Fast loading, smooth playback ✅
```

---

## 🎯 Recommended Video Specs

For best results, your video should be:

| Property | Recommendation |
|----------|-----------------|
| **Duration** | 5-10 seconds |
| **Aspect Ratio** | 16:9 (1920x1080) |
| **Format** | MP4 (H.264) |
| **File Size** | Under 20MB |
| **Bitrate** | 5-10 Mbps |
| **Frame Rate** | 24-30 fps |

---

## 💡 Video Content Ideas

**What should the video show?**

Option 1: **Product Demo**
- RVM in action
- Container being returned
- LED display showing status
- Compact footprint

Option 2: **Retail Environment**
- RVM in store
- Customer using machine
- Staff managing backend
- Clean, modern retail

Option 3: **Multiple Environments**
- Retail (store)
- Housing (residential area)
- Public space (transit, plaza)
- Educational (campus)

Option 4: **Technical Animation**
- RVM opening/closing
- Container recognition
- Material sorting
- Data flow visualization

---

## 📝 Upload Video to Me

**When ready, send via:**

1. **Upload directly** (if < 100MB):
   - Drag & drop in chat
   - Or use Google Drive link (share with me)

2. **Video URL** (if already hosted):
   - YouTube URL
   - Google Drive URL
   - Dropbox URL
   - AWS S3 URL

3. **Describe video**:
   - Duration
   - What it shows
   - Format (MP4/MOV/WebM)

---

## ✅ Processing Workflow

When you send video:

```
1. You send video
   ↓
2. I extract frames
   ↓
3. I compress to WebP
   ↓
4. I create poster image
   ↓
5. I update components
   ↓
6. I test in browser
   ↓
7. You see live preview
   ↓
8. Deploy to Render
   ↓
✅ Live website with video!
```

**Total time**: 15-20 minutes ⚡

---

## 🎬 Alternative: Use Existing Video

If you don't have a video yet, options:

### 1. **Stock Video** (Free)
- Pexels Videos: pexels.com/videos
- Pixabay: pixabay.com/videos
- Search: "RVM reverse vending" or "recycling automation"

### 2. **AI Generated Video**
- Runway: runway.ml (free trial)
- Synthesia: synthesia.io
- Prompt: "Modern reverse vending machine in retail store, 10 seconds, 16:9"

### 3. **Animated 3D**
- Blender (free, open-source)
- Create 3D RVM model
- Render animation loop

---

## 📞 Ready?

**Just reply with:**
1. Your video file or URL
2. Any notes about the video
3. Preferred frame extraction rate (default: 10 fps)

**I'll handle the rest!** 🚀

---

**Timeline:**
- Video received: ⏰ Now
- Processing complete: ⏰ ~15 minutes
- Live on website: ⏰ ~30 minutes total
- Render deployment: ⏰ Ready anytime

Let's make it smooth! 🎥✨
