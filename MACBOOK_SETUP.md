# HIKBIK 应用 - MacBook 安装指南

## 🍎 MacBook 环境要求

### 系统要求
- macOS 10.15 (Catalina) 或更高版本
- Xcode 12+ (用于iOS开发)
- Node.js 18.0+
- npm 或 yarn

### 必需软件

#### 1. 安装 Node.js
```bash
# 使用 Homebrew 安装 (推荐)
brew install node

# 或从官网下载
# https://nodejs.org/
```

#### 2. 安装 Expo CLI
```bash
npm install -g @expo/cli
```

#### 3. 安装 iOS 开发工具 (可选)
```bash
# 安装 Xcode Command Line Tools
xcode-select --install

# 安装 CocoaPods (iOS依赖管理)
sudo gem install cocoapods
```

#### 4. 安装 Android Studio (可选)
- 下载并安装 [Android Studio](https://developer.android.com/studio)
- 配置 Android SDK
- 设置环境变量

## 🚀 项目安装步骤

### 1. 下载项目
```bash
# 如果通过 Git 克隆
git clone <repository-url>
cd HIKBIK

# 如果是压缩包，解压后进入目录
cd HIKBIK
```

### 2. 安装依赖
```bash
# 安装项目依赖
npm install --legacy-peer-deps

# 如果遇到权限问题，使用 sudo
sudo npm install --legacy-peer-deps
```

### 3. 配置 Google Maps API

#### 获取 API 密钥
1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用以下 API 服务：
   - Maps JavaScript API
   - Maps SDK for Android
   - Maps SDK for iOS
   - Places API
   - Directions API
   - Geocoding API

#### 配置 API 密钥
编辑 `app.json` 文件：
```json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_API_KEY_HERE"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_API_KEY_HERE"
        }
      }
    },
    "extra": {
      "googleMapsApiKey": "YOUR_API_KEY_HERE"
    }
  }
}
```

#### 设置 API 密钥限制
- 应用限制：HTTP referrers (web sites)
- 网站限制：`*` 或具体域名
- API 限制：选择启用的 API 服务

#### 启用计费
- 在 Google Cloud Console 中设置结算账户
- 验证付款方式（即使使用免费额度）

## 📱 运行应用

### 1. 启动开发服务器
```bash
# 基本启动
npx expo start

# 指定端口
npx expo start --port 8081

# LAN 模式 (推荐)
npx expo start --lan

# 清除缓存
npx expo start --clear
```

### 2. 在设备上运行

#### iOS 模拟器
```bash
# 启动 iOS 模拟器
npx expo start --ios

# 或在 Expo 终端中按 'i' 键
```

#### Android 模拟器
```bash
# 启动 Android 模拟器
npx expo start --android

# 或在 Expo 终端中按 'a' 键
```

#### 真实设备
1. 在手机上安装 Expo Go 应用
2. 扫描 Expo 终端中的二维码
3. 或手动输入项目 URL

#### 浏览器
```bash
# 在浏览器中运行
npx expo start --web

# 或在 Expo 终端中按 'w' 键
```

## 🛠️ MacBook 专用脚本

### 创建启动脚本
创建 `start-hikbik.sh` 文件：
```bash
#!/bin/bash
echo "🚀 启动 HIKBIK 应用..."
echo "📱 设置环境变量..."

# 设置 Android 环境变量 (如果使用 Android)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

echo "🔧 启动 Expo 开发服务器..."
npx expo start --lan --port 8081
```

使脚本可执行：
```bash
chmod +x start-hikbik.sh
```

运行脚本：
```bash
./start-hikbik.sh
```

## 🔧 故障排除

### 1. 权限问题
```bash
# 修复 npm 权限
sudo chown -R $(whoami) ~/.npm

# 或使用 npx 避免全局安装
npx expo start
```

### 2. 端口冲突
```bash
# 查找占用端口的进程
lsof -ti:8081

# 终止进程
kill -9 $(lsof -ti:8081)

# 使用不同端口
npx expo start --port 8082
```

### 3. 依赖问题
```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# 清理 npm 缓存
npm cache clean --force
```

### 4. iOS 模拟器问题
```bash
# 重置 iOS 模拟器
xcrun simctl erase all

# 重新安装 CocoaPods
cd ios && pod install && cd ..
```

### 5. Android 模拟器问题
```bash
# 检查 Android SDK
echo $ANDROID_HOME

# 启动 Android 模拟器
$ANDROID_HOME/emulator/emulator -list-avds
$ANDROID_HOME/emulator/emulator -avd <AVD_NAME>
```

## 📋 环境变量设置

### 添加到 ~/.zshrc 或 ~/.bash_profile
```bash
# Android SDK (如果使用 Android)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Node.js
export NODE_ENV=development

# 重新加载配置
source ~/.zshrc
```

## 🎯 测试应用

### 1. 测试 Google Maps
打开 `map-test.html` 文件在浏览器中测试：
```bash
open map-test.html
```

### 2. 测试应用功能
1. 启动应用
2. 点击 "营地" 标签页
3. 检查地图是否正常显示
4. 测试其他功能页面

## 📞 获取帮助

### 常见问题
1. **应用无法启动**：检查 Node.js 版本和依赖安装
2. **地图不显示**：验证 API 密钥和网络连接
3. **模拟器问题**：重启模拟器或使用真实设备

### 调试技巧
```bash
# 查看详细日志
npx expo start --verbose

# 检查 Expo 版本
npx expo --version

# 检查项目配置
npx expo config
```

## 📄 文件说明

### 重要文件
- `App.js` - 主应用入口
- `app.json` - Expo 配置
- `package.json` - 项目依赖
- `src/` - 源代码目录
- `map-test.html` - Google Maps 测试文件

### 配置文件
- `metro.config.js` - Metro 打包配置
- `tsconfig.json` - TypeScript 配置 (如果使用)

现在您的 MacBook 朋友可以成功运行 HIKBIK 应用了！🍎✨
