#!/bin/bash

# Video to Frames Extractor - Automated Setup
# This script extracts video frames and converts to optimized WebP format

set -e

VIDEO_FILE="/Users/mylavarapuvinodkumar/Downloads/Uk AD VIDEO.mp4"
OUTPUT_DIR="public/videos/frames"
PROJECT_DIR="/Users/mylavarapuvinodkumar/Downloads/RVM/retearn-website"

echo "🎬 Video Frame Extraction & Optimization"
echo "========================================="

# Create output directory
mkdir -p "$PROJECT_DIR/$OUTPUT_DIR"

# Step 1: Check dependencies
echo "✓ Checking dependencies..."
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found. Install with: brew install python3"
    exit 1
fi

if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found. Installing..."
    brew install imagemagick
fi

# Step 2: Install Python deps
echo "✓ Installing Python dependencies..."
pip3 install -q opencv-python pillow

# Step 3: Extract frames
echo "✓ Extracting frames from video..."
python3 << 'PYTHON_EOF'
import cv2
import os
import sys

video_path = "/Users/mylavarapuvinodkumar/Downloads/Uk AD VIDEO.mp4"
output_dir = "/Users/mylavarapuvinodkumar/Downloads/RVM/retearn-website/public/videos/frames"

cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print(f"❌ Error: Cannot open video {video_path}")
    sys.exit(1)

fps = int(cap.get(cv2.CAP_PROP_FPS))
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps

print(f"📊 Video Info: {fps} FPS, {total_frames} frames, {duration:.1f}s")

frame_count = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Resize to 1920x1080
    frame = cv2.resize(frame, (1920, 1080))

    # Save as JPEG (temporary)
    output_path = os.path.join(output_dir, f"frame_{frame_count:04d}.jpg")
    cv2.imwrite(output_path, frame, [cv2.IMWRITE_JPEG_QUALITY, 95])

    if (frame_count + 1) % max(1, total_frames // 10) == 0:
        pct = int((frame_count + 1) / total_frames * 100)
        print(f"  {pct}% extracted ({frame_count + 1}/{total_frames} frames)")

    frame_count += 1

cap.release()
print(f"✓ Extracted {frame_count} frames")
print(f"Frame count: {frame_count}" > "/tmp/frame_count.txt")

PYTHON_EOF

# Step 4: Convert to WebP
echo "✓ Converting to WebP (compression ~70%)..."
cd "$PROJECT_DIR/$OUTPUT_DIR"

total_jpg=$(ls -1 *.jpg 2>/dev/null | wc -l)
count=0

for jpg_file in *.jpg; do
    webp_file="${jpg_file%.jpg}.webp"
    convert "$jpg_file" -quality 80 "$webp_file"
    rm "$jpg_file"

    count=$((count + 1))
    if [ $((count % 10)) -eq 0 ]; then
        pct=$((count * 100 / total_jpg))
        echo "  $pct% converted ($count/$total_jpg)"
    fi
done

echo "✓ All frames converted to WebP"

# Step 5: Summary
frame_count=$(ls -1 frame_*.webp | wc -l)
total_size=$(du -sh . | awk '{print $1}')

echo ""
echo "✅ Frame Extraction Complete!"
echo "========================================="
echo "📁 Frames: $frame_count WebP files"
echo "💾 Total size: $total_size"
echo "📍 Location: $OUTPUT_DIR/"
echo ""
echo "Next steps:"
echo "1. git add public/videos/frames/"
echo "2. Update page.tsx to use HeroFrames component"
echo "3. Deploy to Render"
echo ""
