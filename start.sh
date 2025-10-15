#!/bin/bash

# MRMNSALT - Salt Brokerage Project Startup Script
# This script starts both the backend server and frontend website

echo "========================================"
echo "  MRMNSALT - Salt Brokerage Platform  "
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[✗] Node.js is not installed. Please install Node.js first."
    exit 1
fi

NODE_VERSION=$(node --version)
echo "[✓] Node.js detected: $NODE_VERSION"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "[!] Root dependencies not found. Installing..."
    npm install
fi

if [ ! -d "frontend/website/node_modules" ]; then
    echo "[!] Website dependencies not found. Installing..."
    cd frontend/website
    npm install
    cd ../..
fi

echo ""
echo "Starting services..."
echo "  - Backend API (Express + PostgreSQL)"
echo "  - Frontend Website (React)"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Start both services using npm dev script
npm run dev
