# HIKBIK 应用 - MacBook Pro 专用指南

## 🍎 MacBook Pro 优势

### 硬件优势
- **Retina显示屏**：高分辨率显示，地图细节清晰
- **强大的CPU**：快速编译和热重载
- **大内存**：流畅运行多个开发工具
- **优秀散热**：长时间开发不会过热

### 开发优势
- **原生iOS开发**：可以直接构建iOS应用
- **多平台支持**：同时支持iOS、Android、Web
- **专业工具链**：Xcode、Android Studio完美支持

## 🚀 快速启动指南

### 1. 环境准备
```bash
# 检查系统版本
sw_vers

# 安装 Homebrew (如果未安装)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node

# 安装 Expo CLI
npm install -g @expo/cli
```

### 2. 项目安装
```bash
# 进入项目目录
cd HIKBIK

# 安装依赖
npm install --legacy-peer-deps

# 给启动脚本执行权限
chmod +x start-hikbik.sh
```

### 3. 启动应用
```bash
# 使用专用脚本启动
./start-hikbik.sh

# 或直接使用 Expo
npx expo start --lan --port 8081
```

## 📱 多平台运行选项

### iOS模拟器 (推荐)
```bash
# 启动iOS模拟器
npx expo start --ios

# 或按 'i' 键
```

### iPhone Safari浏览器
```bash
# 启动Web版本
npx expo start --web --port 8081

# 在iPhone Safari中访问：
# http://[MacBook的IP地址]:8081
```

### Android模拟器
```bash
# 安装Android Studio后
npx expo start --android

# 或按 'a' 键
```

## 🔧 MacBook Pro 专用配置

### 性能优化
```bash
# 设置Node.js内存限制
export NODE_OPTIONS="--max-old-space-size=4096"

# 启用并发编译
export EXPO_CONCURRENT_COMPILATION=1
```

### 网络配置
```bash
# 获取MacBook Pro的IP地址
ifconfig | grep "inet " | grep -v 127.0.0.1

# 或使用
ipconfig getifaddr en0
```

### 环境变量设置
在 `~/.zshrc` 中添加：
```bash
# Node.js优化
export NODE_OPTIONS="--max-old-space-size=4096"

# Android SDK (如果需要)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

# 重新加载配置
source ~/.zshrc
```

## 📱 iPhone Safari 访问步骤

### 1. 在MacBook Pro上启动Web服务器
```bash
npx expo start --web --lan --port 8081
```

### 2. 获取MacBook Pro的IP地址
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
# 例如：192.168.1.100
```

### 3. 在iPhone Safari中访问
- 打开Safari浏览器
- 输入：`http://192.168.1.100:8081`
- 等待页面加载完成

### 4. 添加到主屏幕
- 点击Safari底部的分享按钮
- 选择"添加到主屏幕"
- 给应用起名"HIKBIK"
- 现在可以像原生应用一样使用

## 🎯 MacBook Pro 专用功能

### 多显示器支持
- 在外部显示器上显示应用
- 主屏幕显示开发工具
- 提高开发效率

### 触控板手势
- 双指缩放地图
- 三指拖拽移动
- 四指切换应用

### 键盘快捷键
- `Cmd + R`：重新加载应用
- `Cmd + D`：打开开发者菜单
- `Cmd + Shift + Z`：撤销操作

## 🔧 高级配置

### iOS开发环境
```bash
# 安装 Xcode Command Line Tools
xcode-select --install

# 安装 CocoaPods
sudo gem install cocoapods

# 创建iOS项目
npx expo run:ios
```

### Android开发环境
```bash
# 下载并安装 Android Studio
# https://developer.android.com/studio

# 配置环境变量
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 性能监控
```bash
# 监控系统资源
top -o cpu

# 监控网络连接
netstat -an | grep 8081

# 监控进程
ps aux | grep expo
```

## 🎨 开发体验优化

### 代码编辑
- 使用 VS Code 或 WebStorm
- 安装 React Native 扩展
- 配置代码格式化

### 调试工具
- Chrome DevTools
- React Native Debugger
- Flipper (Facebook开发工具)

### 版本控制
```bash
# 初始化Git仓库
git init

# 添加文件
git add .

# 提交更改
git commit -m "Initial commit"

# 推送到远程仓库
git remote add origin <repository-url>
git push -u origin main
```

## 📊 性能基准

### MacBook Pro 性能表现
- **编译时间**：通常 < 30秒
- **热重载**：< 2秒
- **地图加载**：< 3秒
- **内存使用**：< 1GB

### 优化建议
- 关闭不必要的应用
- 使用SSD存储
- 确保充足的内存
- 保持系统更新

## 🚨 故障排除

### 常见问题
1. **端口被占用**：使用不同端口或终止占用进程
2. **权限问题**：使用 `sudo` 或修复权限
3. **网络问题**：检查防火墙设置
4. **模拟器问题**：重启模拟器或清理缓存

### 调试命令
```bash
# 查看端口占用
lsof -ti:8081

# 终止进程
kill -9 $(lsof -ti:8081)

# 清理缓存
npx expo start --clear

# 重置Metro缓存
npx expo start --reset-cache
```

## 📱 最终使用建议

### 最佳实践
1. **使用iPhone Safari**：最佳移动端体验
2. **添加到主屏幕**：获得原生应用感受
3. **保持网络连接**：确保实时同步
4. **定期刷新**：获取最新更新

### 开发流程
1. 在MacBook Pro上修改代码
2. 自动热重载到iPhone Safari
3. 实时测试和调试
4. 快速迭代开发

现在您的MacBook Pro朋友可以享受最佳的HIKBIK开发和使用体验了！🍎✨
