@echo off
echo 🎵 HIKBIK Spotify风格字体安装脚本
echo =====================================

echo.
echo 📁 创建字体文件夹...
if not exist "assets" mkdir assets
if not exist "assets\fonts" mkdir assets\fonts

echo.
echo 📥 请手动下载Montserrat字体文件：
echo    1. 访问: https://fonts.google.com/specimen/Montserrat
echo    2. 点击 "Download family"
echo    3. 解压ZIP文件
echo    4. 将以下文件复制到 assets\fonts\ 文件夹：
echo       - Montserrat-Regular.ttf
echo       - Montserrat-Bold.ttf
echo       - Montserrat-Light.ttf
echo       - Montserrat-Medium.ttf

echo.
echo ⏳ 等待字体文件下载完成...
pause

echo.
echo 🔧 检查字体文件...
if exist "assets\fonts\Montserrat-Regular.ttf" (
    echo ✅ Montserrat-Regular.ttf 已找到
) else (
    echo ❌ Montserrat-Regular.ttf 未找到
)

if exist "assets\fonts\Montserrat-Bold.ttf" (
    echo ✅ Montserrat-Bold.ttf 已找到
) else (
    echo ❌ Montserrat-Bold.ttf 未找到
)

if exist "assets\fonts\Montserrat-Light.ttf" (
    echo ✅ Montserrat-Light.ttf 已找到
) else (
    echo ❌ Montserrat-Light.ttf 未找到
)

if exist "assets\fonts\Montserrat-Medium.ttf" (
    echo ✅ Montserrat-Medium.ttf 已找到
) else (
    echo ❌ Montserrat-Medium.ttf 未找到
)

echo.
echo 🚀 重启应用以应用新字体...
echo    正在停止Expo服务器...

REM 设置环境变量
set "PATH=%PATH%;C:\Program Files\nodejs"
set "ANDROID_HOME=C:\Users\lenovo\AppData\Local\Android\Sdk"
set "PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator"

REM 停止Node.js进程
taskkill /f /im node.exe 2>nul

echo.
echo ✅ 字体安装完成！
echo 📱 现在运行以下命令重启应用：
echo    npx expo start --offline --clear --reset-cache --port 8081

echo.
pause
