@echo off
echo 🎨 HIKBIK 动画编辑器
echo.
echo 📝 选择编辑方式：
echo.
echo 1. 打开代码编辑器 (推荐)
echo 2. 启动应用测试动画
echo 3. 查看动画文件
echo 4. 重置为默认动画
echo.
set /p choice="请选择 (1-4): "

if "%choice%"=="1" (
    echo.
    echo 📂 打开动画文件...
    echo 💡 编辑 src/components/CustomSplashScreen.js 文件
    echo 🎯 修改 animationSteps 数组来自定义动画
    echo.
    start notepad src/components/CustomSplashScreen.js
    pause
) else if "%choice%"=="2" (
    echo.
    echo 🚀 启动应用测试动画...
    set ANDROID_HOME=C:\Users\lenovo\AppData\Local\Android\Sdk
    set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator
    npx expo start --port 8081
) else if "%choice%"=="3" (
    echo.
    echo 📋 动画相关文件：
    echo.
    echo 📁 src/components/
    echo   ├── CustomSplashScreen.js      (自定义动画主文件)
    echo   ├── SimpleAnimationEditor.js   (可视化编辑器)
    echo   ├── SplashScreen.js            (简单动画)
    echo   └── AdvancedSplashScreen.js    (高级动画)
    echo.
    echo 📁 文档文件：
    echo   ├── HOW_TO_EDIT_ANIMATIONS.md  (编辑指南)
    echo   ├── CUSTOM_ANIMATION_GUIDE.md  (自定义指南)
    echo   └── ANIMATION_EXAMPLES.md      (动画示例)
    echo.
    pause
) else if "%choice%"=="4" (
    echo.
    echo 🔄 重置为默认动画配置...
    echo 💡 这将恢复默认的动画步骤
    set /p confirm="确认重置? (y/n): "
    if /i "%confirm%"=="y" (
        echo ✅ 已重置动画配置
        echo 📝 请重新编辑 src/components/CustomSplashScreen.js
    )
    pause
) else (
    echo ❌ 无效选择，请重新运行脚本
    pause
)
