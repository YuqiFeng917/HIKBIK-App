@echo off
echo 🚀 简化启动HIKBIK
echo.

REM 设置环境变量
set ANDROID_HOME=C:\Users\lenovo\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator

echo 📱 启动应用...
npx expo start --clear --port 8086

pause
