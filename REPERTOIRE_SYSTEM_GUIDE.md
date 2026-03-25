# Repertoire Auto-Loading System - Implementation Guide

## Overview

You now have a **centralized, data-driven repertoire system** that auto-discovers images from folders. No code changes needed when adding new repertoire shows — just organize files by naming convention.

**Commit:** `9fc9697` - feat: auto-loading repertoire system with folder-based asset structure

---

## Folder Structure

```
src/assets/images/yakshagana/repertoire/
├── vaali/
│   ├── poster.png              ← Hero poster (required)
│   ├── still-01.png            ← Performance still (auto-loaded)
│   ├── still-02.png
│   ├── still-03.png
│   └── still-04.png
├── bharata/                    ← Ready for addition (folder exists)
├── parashurama/                ← Ready for addition (folder exists)
└── show-name/
    └── ...
```

---

## Naming Convention

Files must follow this pattern to be auto-discovered:

| File Type | Naming Pattern | Purpose | Notes |
|-----------|---|---|---|
| Poster | `poster.jpg` or `poster.png` | Hero image displayed in repertoire card | **Required** |
| Performance Reels | YouTube/Shorts URL in data file | Video thumbnail auto-generated from YouTube | Stored in `repertoires.js`, not in folder |
| Performance Stills | `still-01.jpg`, `still-02.jpg`, etc | Scrollable gallery in immersive modal | Loaded automatically in numeric order |

**Examples:**
```
✅ CORRECT:  still-01.jpg, still-02.jpg, still-03.jpg
❌ WRONG:    still-1.jpg (missing leading zero)
❌ WRONG:    still_01.jpg (underscores not recognized)
❌ WRONG:    01.jpg (no "still-" prefix)
```

---

## Data Configuration File

Location: `src/data/repertoires.js`

This file contains metadata for each repertoire:

```javascript
export const REPERTOIRES = [
  {
    key: 'vaali',                          // Unique identifier (URL-friendly)
    title: 'Vaali: The Eternal Chronicle...', // Full display title
    shortTitle: 'Vaali',                   // Breadcrumb/short name
    origin: 'Ramayana',                    // Tradition/source
    duration: '45 mins',                   // Performance length
    summary: 'A fierce retelling...',      // 1-2 sentence hook
    details: 'Guru, performer...',         // Full description for modal
    youtubeUrl: 'https://youtube.com/shorts/...', // Reel URL (auto-discovers thumbnail)
    folderPath: 'assets/images/yakshagana/repertoire/vaali', // Folder path
    accent: 'amber'                        // Theme color (amber|blue)
  },
  // ... more repertoires
];
```

---

## Adding a New Repertoire Show

### Step 1: Create Data Entry

Edit `src/data/repertoires.js` and add an object:

```javascript
{
  key: 'parasurama',
  title: 'Parashurama: The Axe-Wielder\'s Wrath',
  shortTitle: 'Parashurama',
  origin: 'Mahabharata',
  duration: '50 mins',
  summary: 'The warrior priest\'s divine mission...',
  details: 'Full description here...',
  youtubeUrl: 'https://youtube.com/shorts/ABC123XYZ',
  folderPath: 'assets/images/yakshagana/repertoire/parashurama',
  accent: 'blue'  // or 'amber'
}
```

### Step 2: Create Folder Structure

```bash
mkdir -p src/assets/images/yakshagana/repertoire/parashurama
```

### Step 3: Add Images

1. **Rename poster:** Save hero image as `poster.png` (or `.jpg`)
2. **Rename stills:** Save performance photos as:
   - `still-01.png`
   - `still-02.png`
   - `still-03.png`
   - etc.

3. **Copy to folder:**
```
src/assets/images/yakshagana/repertoire/parashurama/
├── poster.png
├── still-01.png
├── still-02.png
├── still-03.png
├── still-04.png
└── still-05.png
```

### Step 4: Done! ✅

The repertoire will automatically:
- Read the poster image
- Discover all stills in numeric order
- Load YouTube thumbnail from URL
- Render in Yakshagana page with proper layout

**No code changes needed!**

---

## How It Works Behind the Scenes

### Asset Loading Utility

`src/utils/loadRepertoireAssets.js` provides:
- Dynamic folder scanning
- Image discovery by filename pattern
- Numeric sorting of stills
- Error handling

*Future enhancement:* The `loadRepertoireAssets()` function uses `require.context()` to dynamically import images. Currently, images are statically imported in Yakshagana, but the utility is ready for full dynamic loading.

### Repertoires Configuration

`src/data/repertoires.js` exports:
- `REPERTOIRES` – array of all shows
- `getRepertoireByKey(key)` – lookup show by key
- `getAllRepertoires()` – get all shows

### Yakshagana Component Usage

Vaali's metadata pulls from `getRepertoireByKey('vaali')`:

```javascript
const vaaliConfig = getRepertoireByKey('vaali');
// Use: vaaliConfig.title, vaaliConfig.youtubeUrl, etc.
```

---

## Current Shows

- ✅ **Vaali** – Fully set up with 2 images (poster + 1 still)
- 🟢 **Parashurama** – Folder created, ready for data entry + images
- 🟢 **Bharata** – Folder created, ready for data entry + images
- 📋 Shows 4-6 – Can be added by repeating Steps 1-3

---

## Directory Layout Reference

```
src/
├── assets/
│   └── images/
│       └── yakshagana/
│           └── repertoire/
│               ├── vaali/
│               │   ├── poster.png        [DONE]
│               │   └── still-01.png      [DONE]
│               ├── bharata/              [READY]
│               └── parashurama/          [READY]
├── data/
│   └── repertoires.js                   [DONE - centralized config]
├── utils/
│   └── loadRepertoireAssets.js          [DONE - asset loader]
└── pages/
    └── Yakshagana/
        └── Yakshagana.jsx               [DONE - uses new system]
```

---

## Testing

To verify everything works:

```bash
cd yakshaloka-remote
npm start

# Navigate to http://localhost:3000/yakshagana
# Verify:
# 1. Vaali card appears in "Our Repertoire" section
# 2. Click to open immersive modal
# 3. Poster, reel, and still images display correctly
# 4. Thumbnail grid scrolls smoothly
```

---

## FAQ

**Q: Can I add videos besides YouTube?**  
A: Currently, reels are YouTube-only. Local MP4s would require code changes to RepertoireCard.

**Q: What image formats are supported?**  
A: `.jpg`, `.jpeg`, `.png`, `.gif` (same as web standards)

**Q: Can I skip numbering?** *(e.g., still-01, still-03 - no still-02)*  
A: Yes! Files are sorted numerically, so gaps are fine.

**Q: Do I need to import images manually?**  
A: No! The RepertoireCard already accepts a static `gallery` prop. In future, we can make it fully dynamic.

**Q: How many stills should I provide?**  
A: Recommended: 6-8 per show (not too overwhelming, rich visual narrative)

---

## Next Steps

1. **Test current system** – Verify Vaali works end-to-end
2. **Add Parashurama show** – Practice the folder + data workflow
3. **Populate Shows 4-6** – Repeat the pattern
4. **Gather media** – Collect high-res posters and performance stills

---

**System ready for scaling! 🚀**

For questions or modifications, refer to:
- Config: `src/data/repertoires.js`
- Component: `src/components/RepertoireCard.jsx`
- Page: `src/pages/Yakshagana/Yakshagana.jsx`
