# Image Optimization Guide for WattGlow Website

This guide explains how to optimize images for better performance on the WattGlow website.

## Table of Contents
1. [WebP Conversion](#webp-conversion)
2. [Responsive Images](#responsive-images)
3. [Lazy Loading](#lazy-loading)
4. [Compression](#compression)
5. [Best Practices](#best-practices)

---

## WebP Conversion

WebP is a modern image format that provides superior compression (typically 25-35% smaller than JPEG/PNG) while maintaining quality.

### Online Tools (Easiest)

1. **Squoosh.app** (Recommended for beginners)
   - Visit: https://squoosh.app
   - Drag and drop your image
   - Select WebP format on the right side
   - Adjust quality (recommended: 75-85)
   - Download the optimized image

2. **CloudConvert**
   - Visit: https://cloudconvert.com/jpg-to-webp
   - Upload images (supports batch conversion)
   - Convert and download

### Command Line Tools (For bulk processing)

#### Using cwebp (Google's official tool)

**Installation:**
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Windows
# Download from https://developers.google.com/speed/webp/download
```

**Convert single image:**
```bash
cwebp -q 80 input.jpg -o output.webp
```

**Batch convert all JPG images:**
```bash
for img in *.jpg; do
  cwebp -q 80 "$img" -o "${img%.jpg}.webp"
done
```

**Batch convert all PNG images:**
```bash
for img in *.png; do
  cwebp -q 80 "$img" -o "${img%.png}.webp"
done
```

### Implementation in HTML

Use the `<picture>` element to provide WebP with a fallback:

```html
<picture>
  <source srcset="img/solar-panel.webp" type="image/webp">
  <img src="img/solar-panel.jpg" alt="Solar panel installation" loading="lazy">
</picture>
```

**For images with responsive srcset:**
```html
<picture>
  <source
    srcset="img/hero-400.webp 400w,
            img/hero-800.webp 800w,
            img/hero-1200.webp 1200w"
    type="image/webp"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px">
  <img
    src="img/hero.jpg"
    srcset="img/hero-400.jpg 400w,
            img/hero-800.jpg 800w,
            img/hero-1200.jpg 1200w"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
    alt="Solar energy solutions"
    loading="lazy">
</picture>
```

---

## Responsive Images

Serve different image sizes for different screen sizes to reduce bandwidth and improve load times.

### Creating Multiple Sizes

**Using ImageMagick:**
```bash
# Install ImageMagick
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Ubuntu

# Resize images
convert input.jpg -resize 400x input-400.jpg
convert input.jpg -resize 800x input-800.jpg
convert input.jpg -resize 1200x input-1200.jpg
```

**Using sips (macOS built-in):**
```bash
sips -Z 400 input.jpg --out input-400.jpg
sips -Z 800 input.jpg --out input-800.jpg
sips -Z 1200 input.jpg --out input-1200.jpg
```

### Implementation

```html
<img
  src="img/hero.jpg"
  srcset="img/hero-400.jpg 400w,
          img/hero-800.jpg 800w,
          img/hero-1200.jpg 1200w,
          img/hero-1920.jpg 1920w"
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         1200px"
  alt="Description"
  loading="lazy">
```

**Explanation:**
- `srcset`: List of available image sizes with their widths
- `sizes`: Tells the browser which size to use based on viewport width
- `400w`, `800w`, etc.: Actual width of the image in pixels

### Recommended Breakpoints

- **400px** - Mobile phones (portrait)
- **800px** - Tablets and large phones (landscape)
- **1200px** - Desktop and laptops
- **1920px** - Large desktop screens (optional)

---

## Lazy Loading

Lazy loading defers loading images until they're needed (when scrolling into view).

### Implementation

Add the `loading="lazy"` attribute to all images:

```html
<img src="img/example.jpg" alt="Description" loading="lazy">
```

### Exceptions (DO NOT lazy load)

1. **Above-the-fold images** - First carousel slide, logo
2. **Logo in navbar**
3. **First visible content** - Hero images

```html
<!-- Logo - NO lazy loading -->
<img src="img/WattGlow.png" alt="WattGlow Logo">

<!-- Below-the-fold image - YES lazy loading -->
<img src="img/service.jpg" alt="Our services" loading="lazy">
```

---

## Compression

Compress existing JPG/PNG files before converting to WebP.

### Online Tools

1. **TinyPNG/TinyJPG** - https://tinypng.com
   - Drag and drop up to 20 images
   - Automatically compresses with minimal quality loss
   - Supports JPG and PNG

2. **Compressor.io** - https://compressor.io
   - Up to 90% compression
   - Side-by-side comparison

### Command Line

**Using ImageOptim (macOS):**
```bash
# Install
brew install imageoptim-cli

# Optimize
imageoptim img/*.jpg img/*.png
```

**Using jpegoptim and optipng (Linux):**
```bash
# Install
sudo apt-get install jpegoptim optipng

# Optimize JPG (quality 80-85)
jpegoptim --max=85 img/*.jpg

# Optimize PNG
optipng -o5 img/*.png
```

---

## Best Practices

### 1. Image Naming Convention

Use descriptive, SEO-friendly names:
```
✅ Good: solar-panel-residential.jpg
✅ Good: commercial-solar-installation.jpg
❌ Bad: IMG_2414.jpg
❌ Bad: photo1.jpg
```

### 2. File Organization

```
img/
├── products/
│   ├── inverter.jpg
│   ├── inverter.webp
│   ├── solar-panel.jpg
│   └── solar-panel.webp
├── services/
│   ├── residential.jpg
│   ├── residential.webp
│   ├── commercial.jpg
│   └── commercial.webp
└── hero/
    ├── hero-400.jpg
    ├── hero-400.webp
    ├── hero-800.jpg
    ├── hero-800.webp
    └── ...
```

### 3. Recommended Quality Settings

- **WebP**: 75-85 quality
- **JPEG**: 80-85 quality
- **PNG**: Lossless compression (optipng -o5)

### 4. Target File Sizes

- **Hero images**: < 200KB (after optimization)
- **Content images**: < 100KB
- **Icons/logos**: < 20KB
- **Thumbnails**: < 50KB

### 5. Alt Text Guidelines

Always provide descriptive alt text:

```html
✅ Good:
<img src="img/residential-solar.jpg"
     alt="Residential solar panel installation on house roof">

❌ Bad:
<img src="img/residential-solar.jpg" alt="image">
<img src="img/residential-solar.jpg" alt="">  <!-- Only for decorative images -->
```

---

## Workflow for Optimizing All WattGlow Images

### Step 1: Audit Current Images
```bash
cd /Users/pankajthakur/IdeaProjects/wattglowWeb/img
ls -lh *.jpg *.png | awk '{print $5, $9}'  # List file sizes
```

### Step 2: Compress Originals
```bash
# Backup first
cp -r img img_backup

# Compress using TinyPNG.com or:
# Download images, upload to TinyPNG, download compressed versions
```

### Step 3: Convert to WebP
```bash
# Batch convert all JPG
for img in img/*.jpg; do
  cwebp -q 80 "$img" -o "${img%.jpg}.webp"
done

# Batch convert all PNG
for img in img/*.png; do
  cwebp -q 85 "$img" -o "${img%.png}.webp"
done
```

### Step 4: Create Responsive Sizes (Key Images Only)

For hero images and important content:
```bash
# Example for hero image
convert img/hero.jpg -resize 400x img/hero-400.jpg
convert img/hero.jpg -resize 800x img/hero-800.jpg
convert img/hero.jpg -resize 1200x img/hero-1200.jpg

# Then create WebP versions
cwebp -q 80 img/hero-400.jpg -o img/hero-400.webp
cwebp -q 80 img/hero-800.jpg -o img/hero-800.webp
cwebp -q 80 img/hero-1200.jpg -o img/hero-1200.webp
```

### Step 5: Update HTML

Replace simple `<img>` tags with `<picture>` elements:

**Before:**
```html
<img src="img/solar-panel.jpg" alt="">
```

**After:**
```html
<picture>
  <source srcset="img/solar-panel.webp" type="image/webp">
  <img src="img/solar-panel.jpg"
       alt="High-efficiency solar panel for residential installation"
       loading="lazy">
</picture>
```

---

## Testing

### Check Optimization Results

1. **File Size Comparison:**
```bash
ls -lh img/*.jpg img/*.webp
```

2. **Browser DevTools:**
- Open Network tab in Chrome DevTools
- Reload page
- Check "Size" column to verify WebP is being served to supporting browsers

3. **Lighthouse Audit:**
- Open Chrome DevTools
- Go to "Lighthouse" tab
- Run audit
- Check "Properly size images" and "Serve images in next-gen formats"

### Expected Results

- **WebP savings**: 25-35% compared to JPEG
- **Lazy loading**: Only above-fold images loaded initially
- **Responsive images**: Smaller images on mobile devices
- **Overall improvement**: 30-40% faster page load

---

## Quick Reference Commands

```bash
# Compress single JPG to WebP
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPG in directory
for img in *.jpg; do cwebp -q 80 "$img" -o "${img%.jpg}.webp"; done

# Create responsive sizes
convert input.jpg -resize 400x input-400.jpg
convert input.jpg -resize 800x input-800.jpg
convert input.jpg -resize 1200x input-1200.jpg

# Check file sizes
ls -lh img/*.{jpg,webp} | awk '{print $5, $9}'
```

---

## Resources

- **WebP Documentation**: https://developers.google.com/speed/webp
- **Responsive Images Guide**: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- **Lazy Loading Guide**: https://web.dev/lazy-loading-images/
- **Image Optimization Checklist**: https://web.dev/fast/#optimize-your-images

---

**Last Updated:** December 2025
**Maintained by:** WattGlow Web Team
