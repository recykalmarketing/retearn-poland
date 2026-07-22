#!/usr/bin/env python3
"""
Video Frame Extractor - Pure Python (no external tools needed)
Extracts video frames and converts to optimized WebP format
"""

import cv2
import os
from pathlib import Path
from PIL import Image
import sys

def main():
    VIDEO_FILE = "/Users/mylavarapuvinodkumar/Downloads/Uk AD VIDEO.mp4"
    OUTPUT_DIR = "/Users/mylavarapuvinodkumar/Downloads/RVM/retearn-website/public/videos/frames"

    print("🎬 Video Frame Extraction & Optimization (Python)")
    print("=" * 50)

    # Create output directory
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)

    # Step 1: Extract frames
    print("✓ Extracting frames from video...")
    print(f"  Source: {VIDEO_FILE}")

    cap = cv2.VideoCapture(VIDEO_FILE)
    if not cap.isOpened():
        print(f"❌ Error: Cannot open video {VIDEO_FILE}")
        sys.exit(1)

    fps = int(cap.get(cv2.CAP_PROP_FPS))
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / fps if fps > 0 else 0

    print(f"  📊 Info: {fps} FPS, {total_frames} frames, {duration:.1f}s")

    frame_count = 0
    temp_dir = Path(OUTPUT_DIR) / "temp_jpg"
    temp_dir.mkdir(exist_ok=True)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Resize to 1920x1080
        frame = cv2.resize(frame, (1920, 1080))

        # Save as temporary JPEG
        temp_path = temp_dir / f"frame_{frame_count:04d}.jpg"
        cv2.imwrite(str(temp_path), frame, [cv2.IMWRITE_JPEG_QUALITY, 95])

        # Progress indicator
        if (frame_count + 1) % max(1, total_frames // 10) == 0:
            pct = int((frame_count + 1) / total_frames * 100)
            print(f"  {pct}% extracted ({frame_count + 1}/{total_frames} frames)")

        frame_count += 1

    cap.release()
    print(f"✓ Extracted {frame_count} frames")

    # Step 2: Convert to WebP
    print("✓ Converting to WebP (compression ~70%)...")

    jpg_files = sorted(temp_dir.glob("*.jpg"))
    for i, jpg_path in enumerate(jpg_files):
        # Open JPEG and convert to WebP
        img = Image.open(jpg_path)
        webp_path = Path(OUTPUT_DIR) / jpg_path.name.replace(".jpg", ".webp")
        img.save(str(webp_path), "WebP", quality=80)

        # Progress
        if (i + 1) % max(1, len(jpg_files) // 10) == 0:
            pct = int((i + 1) / len(jpg_files) * 100)
            print(f"  {pct}% converted ({i + 1}/{len(jpg_files)})")

        # Delete temporary JPEG
        jpg_path.unlink()

    # Clean up temp directory
    temp_dir.rmdir()

    print("✓ All frames converted to WebP")

    # Step 3: Summary
    webp_files = list(Path(OUTPUT_DIR).glob("*.webp"))
    total_size = sum(f.stat().st_size for f in webp_files) / (1024 * 1024)  # Convert to MB

    print("")
    print("✅ Frame Extraction Complete!")
    print("=" * 50)
    print(f"📁 Frames: {len(webp_files)} WebP files")
    print(f"💾 Total size: {total_size:.1f} MB")
    print(f"📍 Location: {OUTPUT_DIR}/")
    print("")
    print("Next steps:")
    print("1. git add public/videos/frames/")
    print("2. git commit -m 'Add: Optimized video frames for hero'")
    print("3. git push")
    print("4. Render deploys automatically ✅")
    print("")

if __name__ == "__main__":
    main()
