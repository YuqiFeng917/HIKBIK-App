@echo off
echo 🎬 HIKBIK 自定义动画测试
echo.
echo 🎮 自定义动画功能：
echo    ✅ 手动/自动模式切换
echo    ✅ 逐步控制动画进程
echo    ✅ 实时步骤指示器
echo    ✅ 前进/后退/重置按钮
echo.
echo 🎯 测试步骤：
echo    1. 启动应用查看自定义动画
echo    2. 点击"手动模式"按钮
echo    3. 使用"下一步"逐步播放动画
echo    4. 尝试"上一步"和"重置"功能
echo    5. 切换回"自动模式"查看完整效果
echo.
echo 🔧 自定义选项：
echo    - 修改 src/components/CustomSplashScreen.js 中的 animationSteps
echo    - 调整动画时长、缓动效果、步骤顺序
echo    - 添加新的动画效果和元素
echo.
echo 🚀 启动中...

REM 设置环境变量
set ANDROID_HOME=C:\Users\lenovo\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator

REM 启动应用
npx expo start --port 8081
