@echo off
echo 🎬 启动HIKBIK动画测试
echo.
echo 🔧 正在启动应用...
echo 💡 请等待应用加载完成
echo.

REM 停止可能占用端口的进程
taskkill /f /im node.exe 2>nul
timeout /t 2 /nobreak >nul

REM 设置环境变量
set ANDROID_HOME=C:\Users\lenovo\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator

REM 启动应用
echo 🚀 启动Expo开发服务器...
npx expo start --port 8083 --clear

pause
