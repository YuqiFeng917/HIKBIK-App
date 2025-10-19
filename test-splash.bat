@echo off
echo 🎬 测试HIKBIK开场动画...
echo.
echo 📱 启动应用查看动画效果
echo 💡 动画将在3-4秒后自动跳转到主界面
echo.
echo 🔧 如需修改动画类型：
echo    编辑 src/App.js 中的 SPLASH_TYPE 变量
echo    'simple' = 简单动画
echo    'advanced' = 高级动画（推荐）
echo.
echo 🚀 启动中...
echo.

REM 设置环境变量
set ANDROID_HOME=C:\Users\lenovo\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator

REM 启动应用
npx expo start --port 8081
