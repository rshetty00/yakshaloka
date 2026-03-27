param(
  [string]$CommitMessage = "update: repertoire media and reel links",
  [switch]$SkipPull,
  [switch]$DryRun
)

$ErrorActionPreference = 'Stop'

function Write-Step($msg) {
  Write-Host "`n==> $msg" -ForegroundColor Cyan
}

function Run-Or-Print($cmd) {
  if ($DryRun) {
    Write-Host "[DRY-RUN] $cmd" -ForegroundColor Yellow
  } else {
    Invoke-Expression $cmd
  }
}

Write-Step "Checking repository root"
$repoRoot = git rev-parse --show-toplevel 2>$null
if (-not $repoRoot) {
  throw "This script must be run inside a git repository."
}
Set-Location $repoRoot

Write-Step "Switching to main"
Run-Or-Print "git checkout main"

if (-not $SkipPull) {
  Write-Step "Pulling latest changes"
  Run-Or-Print "git pull origin main"
}

Write-Step "Checking oversized files (warn if > 90MB)"
$largeFiles = Get-ChildItem -Path "src/assets/images/yakshagana/repertoire" -Recurse -File -ErrorAction SilentlyContinue |
  Where-Object { $_.Length -gt 90MB } |
  Select-Object FullName, @{Name='SizeMB';Expression={[math]::Round($_.Length / 1MB, 2)}}

if ($largeFiles) {
  Write-Host "Warning: Large files detected. Consider Git LFS before pushing:" -ForegroundColor Yellow
  $largeFiles | Format-Table -AutoSize
}

Write-Step "Staging repertoire media + runtime config"
Run-Or-Print "git add src/assets/images/yakshagana/repertoire public/data/repertoires.json"

Write-Step "Current staged/unstaged summary"
Run-Or-Print "git status --short"

if ($DryRun) {
  Write-Host "`nDry-run complete. No changes were committed." -ForegroundColor Green
  exit 0
}

$hasChanges = git diff --cached --name-only
if (-not $hasChanges) {
  Write-Host "No staged changes to commit. Nothing to do." -ForegroundColor Green
  exit 0
}

Write-Step "Committing"
git commit -m "$CommitMessage"

Write-Step "Pushing to origin/main"
git push origin main

Write-Step "Done"
git log -1 --oneline
git status --short
Write-Host "`nMedia update workflow complete." -ForegroundColor Green
