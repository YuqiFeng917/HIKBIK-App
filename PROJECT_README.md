# HIKBIK 应用项目

## 📱 项目简介
HIKBIK是一个户外露营和徒步旅行应用，集成了Google Maps功能，帮助用户发现营地、规划路线和管理装备。

## 🚀 主要功能
- **营地发现**: 基于地图的营地搜索和定位
- **路线规划**: 集成Google Maps的路线规划功能
- **装备管理**: 户外装备清单和管理
- **社区互动**: 用户分享和交流
- **活动追踪**: 户外活动记录和统计

## 🛠️ 技术栈
- **React Native**: 跨平台移动应用开发
- **Expo**: 开发和部署框架
- **Google Maps API**: 地图和位置服务
- **React Navigation**: 导航管理

## 📋 环境要求
- Node.js 18.0+
- Android Studio (Android开发)
- Google Maps API密钥

## 🔧 安装和运行

### 1. 安装依赖
```bash
npm install --legacy-peer-deps
```

### 2. 配置Google Maps
- 在Google Cloud Console中创建API密钥
- 在 `app.json` 中配置API密钥
- 确保启用以下API服务：
  - Maps JavaScript API
  - Maps SDK for Android
  - Maps SDK for iOS

### 3. 启动应用
```bash
# 启动Expo开发服务器
npx expo start

# 或者使用批处理文件（Windows）
.\start-hikbik.bat
```

### 4. 在设备上运行
- Android: 在Android模拟器中按 'a' 键
- iOS: 在iOS模拟器中按 'i' 键
- Web: 按 'w' 键在浏览器中打开

## 📁 项目结构
```
HIKBIK/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── SimpleMap.js     # 地图组件
│   │   └── MapTest.js       # 地图测试组件
│   ├── screens/             # 页面组件
│   │   ├── HomeScreen.js    # 主页
│   │   ├── CampsiteScreen.js # 营地页面
│   │   ├── RoutePlanningScreen.js # 路线规划
│   │   ├── EquipmentScreen.js # 装备管理
│   │   ├── ActivityTrackingScreen.js # 活动追踪
│   │   ├── CommunityScreen.js # 社区
│   │   └── ProfileScreen.js # 用户资料
│   └── App.js              # 主应用组件
├── assets/                  # 静态资源
├── app.json                # Expo配置
├── package.json            # 项目依赖
└── map-test.html          # Google Maps测试文件
```

## 🔑 Google Maps配置

### API密钥设置
1. 在 `app.json` 中配置：
```json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_API_KEY"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_API_KEY"
        }
      }
    },
    "extra": {
      "googleMapsApiKey": "YOUR_API_KEY"
    }
  }
}
```

### 测试地图功能
打开 `map-test.html` 文件在浏览器中测试Google Maps API是否正常工作。

## 🐛 常见问题

### 1. 依赖冲突
使用 `--legacy-peer-deps` 标志安装依赖：
```bash
npm install --legacy-peer-deps
```

### 2. 地图显示问题
- 确保Google Maps API密钥有效
- 检查API服务是否已启用
- 验证API密钥限制设置

### 3. 网络连接问题
- 确保Android模拟器网络正常
- 使用 `--lan` 模式启动Expo
- 检查防火墙设置

## 📞 技术支持
如有问题，请检查：
1. 控制台错误信息
2. Expo开发工具日志
3. 网络连接状态

## 📄 许可证
本项目仅供学习和开发使用。
