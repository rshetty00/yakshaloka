Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Write-Host "== Deploy Checklist (main -> gh-pages) ==" -ForegroundColor Cyan

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

function Run-Git {
  param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$GitArgs
  )
  & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git command failed with exit code $LASTEXITCODE"
  }
}

Run-Git fetch origin

$currentBranch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($currentBranch -ne "main") {
  throw "Checkout main first. Current branch: $currentBranch"
}

$status = (git status --porcelain)
if ($status) {
  throw "Working tree is not clean. Commit or stash changes before deploy."
}

Write-Host "[1/5] Pushing main to origin..." -ForegroundColor Yellow
Run-Git push origin main

$mainSha = (git rev-parse --short=12 HEAD).Trim()
Write-Host "main SHA: $mainSha" -ForegroundColor DarkCyan

Write-Host "[2/5] Building production bundle..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
  throw "npm run build failed with exit code $LASTEXITCODE"
}

Write-Host "[3/5] Deploying build to gh-pages..." -ForegroundColor Yellow
$cacheRepo = Join-Path $repoRoot "node_modules/.cache/gh-pages/https!github.com!rshetty00!yakshaloka.git"
if (Test-Path $cacheRepo) {
  Remove-Item -Path $cacheRepo -Recurse -Force
}
Run-Git config --global core.longpaths true
npx gh-pages -d build -r https://github.com/rshetty00/yakshaloka.git -b gh-pages -m "deploy: $mainSha"
if ($LASTEXITCODE -ne 0) {
  throw "gh-pages deploy failed with exit code $LASTEXITCODE"
}

Write-Host "[4/5] Refreshing remote refs..." -ForegroundColor Yellow
Run-Git fetch origin

$remoteMain = (git rev-parse --short=12 origin/main).Trim()
$remoteGhPages = (git rev-parse --short=12 origin/gh-pages).Trim()
$ghPagesMessage = (git log -1 --pretty=%s origin/gh-pages).Trim()

Write-Host "[5/5] Verification" -ForegroundColor Yellow
Write-Host "origin/main      : $remoteMain"
Write-Host "origin/gh-pages  : $remoteGhPages"
Write-Host "gh-pages message : $ghPagesMessage"

if ($remoteMain -ne $mainSha) {
  throw "Verification failed: origin/main ($remoteMain) does not match local main ($mainSha)."
}

if ($ghPagesMessage -notlike "*deploy: $mainSha*") {
  Write-Warning "gh-pages commit message does not reference local main SHA $mainSha."
} else {
  Write-Host "Deployment verified against main SHA." -ForegroundColor Green
}

Write-Host "Done. Public site should update shortly." -ForegroundColor Green
