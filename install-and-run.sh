#!/bin/bash

echo "================================================"
echo "   GCCSOFI Website - Installation Script"
echo "================================================"
echo ""

echo "[1/3] Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi
echo "✓ Node.js found: $(node --version)"

echo ""
echo "[2/3] Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Installation failed!"
    exit 1
fi
echo "✓ Dependencies installed successfully!"

echo ""
echo "[3/3] Starting development server..."
echo ""
echo "================================================"
echo "   GCCSOFI Website is starting..."
echo "   URL: http://localhost:3000"
echo "================================================"
echo ""
npm run dev
