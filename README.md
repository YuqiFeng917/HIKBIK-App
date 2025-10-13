# HIKBIK - 一站式露营服务平台

## 项目概述

HIKBIK是一个综合性的露营服务平台，为用户提供营地搜索、装备租赁、社区分享、路线规划和运动数据记录等功能。

## 主要功能

### 1. 营地与装备服务
- **营地搜索与预订**: 提供基于位置的营地搜索，包含设施、价格与用户评价
- **装备购买与租赁**: 整合户外装备购买与租赁服务，支持线上交易
- **库存管理**: 展示直营装备库存，确保价格透明与品质统一

### 2. 社区与内容分享
- **内容平台**: 支持图文/视频形式的露营经验分享
- **互动机制**: 设立点赞、收藏与关注机制，促进用户互动
- **标签系统**: 建立信息分类标签（如#家庭露营 #徒步路线），便于内容发现

### 3. 智能路线规划
- **AI推荐**: 根据用户偏好（难度、时长、风景）推荐个性化路线
- **详细指南**: 生成详细路线指南，含地图、海拔剖面与关键路标
- **安全提醒**: 提供安全提醒与实时天气预警

### 4. 运动数据记录
- **精准记录**: 记录徒步路线、距离、时长与海拔变化
- **健康分析**: 同步计步与卡路里消耗数据，支持健康指标分析
- **数据可视化**: 生成数据可视化报告，支持历史记录回溯与分享

## 技术架构

### 前端技术栈
- **框架**: React Native
- **导航**: React Navigation
- **地图**: React Native Maps
- **图表**: React Native Chart Kit
- **UI组件**: React Native Elements, React Native Paper
- **状态管理**: React Hooks

### 后端服务
- **实时数据**: Firebase
- **API服务**: Node.js
- **数据库**: MongoDB/Firestore

### 关键集成
- **地图服务**: Google Maps API
- **支付系统**: Stripe
- **AI服务**: 自定义AI模型接口
- **天气数据**: OpenWeatherMap API

## 项目结构

```
src/
├── App.js                 # 主应用组件
├── screens/               # 屏幕组件
│   ├── HomeScreen.js      # 首页
│   ├── CampsiteScreen.js  # 营地搜索
│   ├── EquipmentScreen.js # 装备服务
│   ├── CommunityScreen.js # 社区分享
│   ├── RoutePlanningScreen.js # 路线规划
│   ├── ActivityTrackingScreen.js # 运动记录
│   └── ProfileScreen.js   # 个人资料
├── components/            # 可复用组件
├── services/              # API服务
├── utils/                 # 工具函数
└── styles/                # 样式文件
```

## 安装与运行

### 环境要求
- Node.js >= 16.0.0
- React Native CLI
- Android Studio / Xcode
- Java Development Kit (JDK)

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd HIKBIK
```

2. **安装依赖**
```bash
npm install
```

3. **iOS设置** (仅限macOS)
```bash
cd ios && pod install && cd ..
```

4. **运行项目**
```bash
# Android
npm run android

# iOS
npm run ios

# 启动Metro
npm start
```

## 功能模块详解

### 营地搜索模块
- 基于地图的营地位置展示
- 实时价格和可用性查询
- 用户评价和评分系统
- 在线预订和支付集成

### 装备服务模块
- 装备分类和搜索
- 购买和租赁选项
- 库存状态实时更新
- 购物车和订单管理

### 社区平台
- 用户内容发布和管理
- 图片和视频上传
- 标签和分类系统
- 社交互动功能

### 路线规划
- AI驱动的个性化推荐
- 地图集成和路线可视化
- 实时跟踪和导航
- 安全提醒和天气集成

### 运动记录
- GPS轨迹记录
- 运动数据统计
- 健康指标分析
- 数据导出和分享

## 开发指南

### 代码规范
- 使用ESLint进行代码检查
- 遵循React Native最佳实践
- 组件化开发，提高代码复用性
- 使用TypeScript进行类型检查

### 测试
```bash
npm test
```

### 构建发布
```bash
# Android
cd android && ./gradlew assembleRelease

# iOS
# 使用Xcode进行Archive和发布
```

## 部署说明

### 环境配置
1. 配置Firebase项目
2. 设置Google Maps API密钥
3. 配置Stripe支付密钥
4. 设置推送通知服务

### 发布流程
1. 更新版本号
2. 运行测试套件
3. 构建生产版本
4. 上传到应用商店

## 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 许可证

MIT License

## 联系方式

- 项目维护者: [Your Name]
- 邮箱: [your.email@example.com]
- 项目地址: [GitHub Repository URL]

## 更新日志

### v1.0.0 (2024-01-15)
- 初始版本发布
- 实现核心功能模块
- 完成基础UI设计
- 集成主要第三方服务
