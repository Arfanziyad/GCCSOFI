@echo off
echo ================================================
echo    GCCSOFI Website - Installation Script
echo ================================================
echo.

echo [1/3] Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo ✓ Node.js found: 
node --version

echo.
echo [2/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Installation failed!
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully!

echo.
echo [3/3] Starting development server...
echo.
echo ================================================
echo    GCCSOFI Website is starting...
echo    URL: http://localhost:3000
echo ================================================
echo.
call npm run dev
