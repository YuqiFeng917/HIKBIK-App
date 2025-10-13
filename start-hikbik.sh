#!/bin/bash

# HIKBIK 应用启动脚本 - MacBook Pro 专用版本
echo "🍎 启动 HIKBIK 应用 - MacBook Pro 优化版..."
echo "📱 设置环境变量..."

# 设置 Android 环境变量 (如果使用 Android 开发)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

# 设置 Node.js 环境优化
export NODE_ENV=development
export NODE_OPTIONS="--max-old-space-size=4096"
export EXPO_CONCURRENT_COMPILATION=1

# 获取 MacBook Pro 的 IP 地址
IP_ADDRESS=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | head -1 | awk '{print $2}')

echo "🔧 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install --legacy-peer-deps
fi

echo "🌐 启动 Expo 开发服务器..."
echo "💡 MacBook Pro 专用提示："
echo "   - 按 'i' 键启动 iOS 模拟器 (推荐)"
echo "   - 按 'w' 键在浏览器中打开"
echo "   - 按 'a' 键启动 Android 模拟器"  
echo "   - 按 'r' 键重新加载应用"
echo "   - 按 'm' 键打开开发者菜单"
echo ""
echo "📱 iPhone Safari 访问地址："
echo "   http://$IP_ADDRESS:8081"
echo ""
echo "🎯 建议使用方式："
echo "   1. 在MacBook Pro上开发"
echo "   2. 在iPhone Safari中实时预览"
echo "   3. 添加到主屏幕获得原生体验"
echo ""

npx expo start --lan --port 8081
