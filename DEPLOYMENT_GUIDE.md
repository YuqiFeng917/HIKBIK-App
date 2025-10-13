# HIKBIK 应用部署指南

## 🚀 快速部署步骤

### 1. 环境准备
```bash
# 检查Node.js版本
node --version  # 需要 18.0+

# 检查npm版本
npm --version

# 安装Expo CLI
npm install -g @expo/cli
```

### 2. 项目安装
```bash
# 克隆或下载项目
cd HIKBIK

# 安装依赖
npm install --legacy-peer-deps

# 清理缓存（如果需要）
npm cache clean --force
```

### 3. Google Maps配置

#### 获取API密钥
1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用以下API服务：
   - Maps JavaScript API
   - Maps SDK for Android
   - Maps SDK for iOS
   - Places API
   - Directions API
   - Geocoding API

#### 配置API密钥
1. 在 `app.json` 中替换 `YOUR_API_KEY` 为实际密钥
2. 设置API密钥限制（推荐）：
   - 应用限制：HTTP referrers (web sites)
   - 网站限制：`*` 或具体域名
   - API限制：选择启用的API服务

#### 启用计费
- 在Google Cloud Console中设置结算账户
- 即使使用免费额度也需要验证付款方式

### 4. 启动应用

#### 方法1：使用Expo CLI
```bash
npx expo start
```

#### 方法2：使用批处理文件（Windows）
```bash
.\start-hikbik.bat
```

#### 方法3：指定端口
```bash
npx expo start --port 8081
```

### 5. 设备连接

#### Android模拟器
1. 启动Android Studio
2. 创建并启动Android虚拟设备
3. 在Expo终端中按 'a' 键

#### 真实设备
1. 在手机上安装Expo Go应用
2. 扫描Expo终端中的二维码
3. 或手动输入项目URL

#### 浏览器
在Expo终端中按 'w' 键

## 🔧 故障排除

### 依赖问题
```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### 端口冲突
```bash
# 使用不同端口
npx expo start --port 8082
```

### 网络问题
```bash
# 使用LAN模式
npx expo start --lan

# 或使用隧道模式
npx expo start --tunnel
```

### 地图问题
1. 检查API密钥是否正确
2. 验证API服务是否启用
3. 测试HTML文件：打开 `map-test.html`

## 📱 构建发布版本

### Android APK
```bash
npx expo build:android
```

### iOS IPA
```bash
npx expo build:ios
```

## 🔐 安全注意事项

1. **API密钥保护**
   - 不要将API密钥提交到公共仓库
   - 使用环境变量管理密钥
   - 设置适当的API限制

2. **依赖安全**
   - 定期更新依赖包
   - 检查安全漏洞：`npm audit`

3. **代码保护**
   - 使用代码混淆
   - 移除调试信息

## 📊 性能优化

1. **图片优化**
   - 压缩静态资源
   - 使用适当的图片格式

2. **代码分割**
   - 使用动态导入
   - 优化包大小

3. **缓存策略**
   - 实现离线缓存
   - 优化网络请求

## 📞 技术支持

如遇到问题，请提供：
1. 错误日志
2. 环境信息
3. 重现步骤
4. 预期行为

## 📄 更新日志

### v1.0.0
- 初始版本发布
- 集成Google Maps
- 基础功能实现
