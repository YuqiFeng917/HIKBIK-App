# 🎵 Montserrat字体快速安装指南

## 📋 安装步骤总结

### ✅ 已完成的步骤：
1. ✅ 创建了 `assets/fonts/` 文件夹
2. ✅ 更新了 `app.json` 配置文件
3. ✅ 配置了字体系统

### 🔄 需要您完成的步骤：

#### 1. 下载Montserrat字体
- **网址**：https://fonts.google.com/specimen/Montserrat
- **操作**：点击 "Download family" 按钮
- **文件**：下载ZIP文件到电脑

#### 2. 解压字体文件
- 解压下载的ZIP文件
- 找到以下4个字体文件：
  - `Montserrat-Regular.ttf`
  - `Montserrat-Bold.ttf`
  - `Montserrat-Light.ttf`
  - `Montserrat-Medium.ttf`

#### 3. 复制字体文件
将上述4个字体文件复制到：
```
C:\Users\lenovo\Desktop\HIKBIK\assets\fonts\
```

#### 4. 重启应用
复制完成后，运行以下命令重启应用：

```bash
# 停止当前服务器
taskkill /f /im node.exe

# 重新启动Expo服务器
npx expo start --offline --clear --reset-cache --port 8081

# 重新打开应用
adb -s emulator-5554 shell am start -n host.exp.exponent/.experience.HomeActivity
```

## 🎯 预期效果

安装完成后，您的HIKBIK应用将拥有：
- ✅ **Spotify风格的字体** - 现代、简洁、易读
- ✅ **多字重支持** - Regular, Bold, Light, Medium
- ✅ **专业外观** - 类似Spotify的视觉体验
- ✅ **免费使用** - 无需付费授权

## 🔧 字体配置

字体系统已配置完成：
- **配置文件**：`src/config/fonts.js`
- **当前字体**：Montserrat（最接近Spotify Circular）
- **应用范围**：标题、正文、按钮等所有文本

## ⚠️ 注意事项

1. **文件格式**：确保使用 `.ttf` 格式的字体文件
2. **文件大小**：每个字体文件约100-200KB
3. **重启应用**：修改字体后必须完全重启应用
4. **测试效果**：安装后检查字体是否正确显示

## 🚀 快速验证

安装完成后，您应该能看到：
- 标题使用粗体Montserrat字体
- 正文使用常规Montserrat字体
- 整体风格类似Spotify应用

现在就开始下载Montserrat字体吧！🎵
