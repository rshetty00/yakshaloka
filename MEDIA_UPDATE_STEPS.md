# Media Update Steps (No AI Needed)

Use this whenever you change repertoire photos/videos/audio or reel links.

## 1) Update your files

- Copy media files into your repertoire folder(s):
  - `src/assets/images/yakshagana/repertoire/<show-key>/`
- Update reel URLs in:
  - `public/data/repertoires.json`

## 2) Run the helper script (recommended)

From repo root:

```powershell
./scripts/update-repertoire-media.ps1
```

Optional custom commit message:

```powershell
./scripts/update-repertoire-media.ps1 -CommitMessage "update: vaali media refresh"
```

Preview only (no commit/push):

```powershell
./scripts/update-repertoire-media.ps1 -DryRun
```

Skip pull (if you already pulled):

```powershell
./scripts/update-repertoire-media.ps1 -SkipPull
```

## 3) Manual commands (if you don’t want script)

```powershell
git checkout main
git pull origin main
git add src/assets/images/yakshagana/repertoire public/data/repertoires.json
git commit -m "update: repertoire media and reel links"
git push origin main
git log -1 --oneline
git status --short
```

## 4) Notes

- GitHub blocks files larger than 100MB.
- If you plan to push large files (`.mov`, `.mp4`, `.arw`, etc.), set up Git LFS first.

```powershell
git lfs install
git lfs track "*.mov" "*.mp4" "*.arw" "*.heic"
git add .gitattributes
git commit -m "chore: enable git lfs for media"
git push origin main
```
