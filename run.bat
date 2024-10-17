@echo off

:: Set the project directory (replace with your actual project path)
cd /d "C:\path\to\your\project"

:: Start Server 1 (Port 3000)
echo Starting Server 1 on port 3000...
start cmd /k "node server1.js"

:: Start Server 2 (Port 3001)
echo Starting Server 2 on port 3001...
start cmd /k "node server2.js"

:: Open browser for Server 1 (Port 3000)
echo Opening browser for Server 1...
start "" "http://localhost:3000"

:: Open browser for Server 2 (Port 3001)
echo Opening browser for Server 2...
start "" "http://localhost:3001"

:: Wait for user to press a key before closing the script
pause
