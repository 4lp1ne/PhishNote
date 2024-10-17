@echo off

:: Set the project directory (replace with your actual project path)
cd /d "C:\path\to\your\project"

:menu
echo.
echo =======================================
echo Select an option to run:
echo A - Start only Server 1 (IP/Geolocation)
echo B - Start only Server 2 (Camera)
echo C - Start both servers
echo =======================================
set /p option="Enter your choice (A/B/C): "

if /i "%option%"=="A" goto run_server1
if /i "%option%"=="B" goto run_server2
if /i "%option%"=="C" goto run_both
goto invalid_option

:run_server1
echo Starting Server 1 on port 3000 (IP/Geolocation)...
start cmd /k "node server1.js"
echo Opening browser for Server 1...
start "" "http://localhost:3000"
goto end

:run_server2
echo Starting Server 2 on port 3001 (Camera)...
start cmd /k "node server2.js"
echo Opening browser for Server 2...
start "" "http://localhost:3001"
goto end

:run_both
echo Starting Server 1 on port 3000 (IP/Geolocation)...
start cmd /k "node server1.js"
echo Starting Server 2 on port 3001 (Camera)...
start cmd /k "node server2.js"
echo Opening browser for Server 1...
start "" "http://localhost:3000"
echo Opening browser for Server 2...
start "" "http://localhost:3001"
goto end

:invalid_option
echo Invalid option selected. Please try again.
goto menu

:end
:: Wait for user to press a key before closing the script
pause
