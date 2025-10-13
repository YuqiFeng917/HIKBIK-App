# HIKBIK 应用运行指南

## 🚀 快速启动步骤

### 1. 启动Android虚拟设备
1. 打开Android Studio
2. 点击Device Manager
3. 启动Pixel_6_2或其他虚拟设备
4. 等待设备完全启动并显示主屏幕

### 2. 启动HIKBIK应用
**方法1：使用批处理文件（推荐）**
1. 双击 `start-hikbik.bat` 文件
2. 等待Metro服务器启动
3. 应用会自动在虚拟设备上打开

**方法2：使用命令行**
```bash
cd C:\Users\lenovo\Desktop\HIKBIK
npx expo start --android
```

### 3. 如果应用没有自动打开
在虚拟设备的Expo Go中：
1. 点击"Recently opened"中的"HIKBIK"
2. 或输入URL: `exp://192.168.0.105:8081`

## 🔧 常见问题解决

### 问题1：Metro服务器端口被占用
```bash
# 停止所有Node进程
taskkill /f /im node.exe

# 使用不同端口启动
npx expo start --android --port 8082
```

### 问题2：虚拟设备连接不上
```bash
# 重启ADB
adb kill-server
adb start-server
adb devices
```

### 问题3：应用一直loading
1. 在Metro窗口按 `r` 键重新加载
2. 或在虚拟设备上摇一摇打开开发者菜单
3. 选择"Reload"

### 问题4：依赖错误
```bash
# 清理并重新安装
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm cache clean --force
npm install --legacy-peer-deps
```

## 🎯 开发流程

### 1. 启动开发环境
- 启动Android虚拟设备
- 运行 `start-hikbik.bat`
- 等待应用加载

### 2. 实时开发
- 在Cursor中打开文件
- 修改代码（如`App.js`或`src/screens/`中的任何文件）
- 按`Ctrl+S`保存
- 应用会自动重新加载

### 3. 调试
- 在Metro窗口按`j`键打开调试器
- 在代码中使用`console.log()`输出日志
- 在Metro窗口中查看日志输出

## 📝 注意事项

1. **不要关闭Metro服务器窗口** - 保持运行才能实时更新
2. **保存文件后稍等** - 热重载需要几秒钟
3. **使用批处理文件启动** - 比在Cursor终端中启动更稳定
4. **首次加载较慢** - 可能需要30-60秒

## 🎨 当前应用状态

**简化版本**（当前）：
- 基础界面和导航
- 使用emoji图标
- 无复杂依赖

**完整版本**（可选）：
- React Navigation完整导航
- React Native Maps地图功能  
- React Native Vector Icons图标库
- 所有功能模块（露营地、装备、社区等）

如需恢复完整版本，请修改`App.js`第1行为：
```javascript
import App from './src/App';
```

但注意：完整版本需要更多native依赖，可能在Web上无法运行。

