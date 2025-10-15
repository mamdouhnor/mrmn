# MRMNSALT - Salt Brokerage Project Startup Script
# This script starts both the backend server and frontend website

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  MRMNSALT - Salt Brokerage Platform  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js detected: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if dependencies are installed
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Root dependencies not found. Installing..." -ForegroundColor Yellow
    npm install
}

if (-not (Test-Path "frontend\website\node_modules")) {
    Write-Host "[INFO] Website dependencies not found. Installing..." -ForegroundColor Yellow
    Set-Location "frontend\website"
    npm install
    Set-Location "..\..\"
}

Write-Host ""
Write-Host "Starting services..." -ForegroundColor Cyan
Write-Host "  - Backend API (Express + PostgreSQL)" -ForegroundColor White
Write-Host "  - Frontend Website (React)" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop all services" -ForegroundColor Yellow
Write-Host ""

# Start both services using npm dev script
npm run dev
