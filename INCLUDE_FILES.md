# 需要包含的文件清单

## 📁 必需文件
以下文件必须包含在项目包中：

### 核心文件
- `App.js` - 主应用入口
- `app.json` - Expo配置文件
- `package.json` - 项目依赖配置
- `package-lock.json` - 依赖锁定文件
- `metro.config.js` - Metro打包配置

### 源代码
- `src/` - 整个源代码目录
  - `src/App.js` - 应用主组件
  - `src/components/` - 组件目录
  - `src/screens/` - 页面组件目录

### 资源文件
- `assets/` - 静态资源目录（如果存在）
- `map-test.html` - Google Maps测试文件

### 文档
- `PROJECT_README.md` - 项目说明
- `DEPLOYMENT_GUIDE.md` - 部署指南
- `HOW_TO_RUN.md` - 运行说明
- `start-hikbik.bat` - Windows启动脚本

### 配置文件
- `.gitignore` - Git忽略文件
- `tsconfig.json` - TypeScript配置（如果存在）

## 🚫 不需要包含的文件
以下文件不应该包含在项目包中：

### 依赖目录
- `node_modules/` - 可以通过npm install重新安装
- `HIKBIKExpo/node_modules/` - 实验项目目录

### 缓存和临时文件
- `.expo/` - Expo缓存
- `dist/` - 构建输出
- `build/` - 构建输出
- `*.log` - 日志文件
- `.DS_Store` - macOS系统文件

### 敏感信息
- `.env` - 环境变量文件（包含API密钥）
- `config/api-keys.json` - API密钥配置文件

## 📦 打包建议

### 1. 压缩包方式
创建一个ZIP文件，包含：
```
HIKBIK/
├── src/
├── App.js
├── app.json
├── package.json
├── package-lock.json
├── metro.config.js
├── map-test.html
├── PROJECT_README.md
├── DEPLOYMENT_GUIDE.md
├── HOW_TO_RUN.md
├── start-hikbik.bat
└── .gitignore
```

### 2. Git仓库方式
如果使用Git，确保：
- 初始化Git仓库：`git init`
- 添加文件：`git add .`
- 提交：`git commit -m "Initial commit"`
- 推送到远程仓库

### 3. 环境变量说明
创建 `.env.example` 文件作为模板：
```bash
GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 🔐 安全注意事项
1. **不要包含真实的API密钥**
2. **提供环境变量模板**
3. **在文档中说明如何配置API密钥**
4. **建议使用Git进行版本控制**

## 📋 交付清单
- [ ] 源代码文件完整
- [ ] 配置文件包含
- [ ] 文档文件完整
- [ ] 移除敏感信息
- [ ] 提供安装说明
- [ ] 测试文件可用
