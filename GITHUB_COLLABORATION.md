# HIKBIK GitHub 团队协作指南

## 🚀 GitHub 协作优势

### 为什么选择GitHub？
- ✅ **跨平台协作**：Windows + iOS 完美支持
- ✅ **版本控制**：追踪所有代码变更
- ✅ **实时同步**：团队成员随时获取最新代码
- ✅ **分支管理**：并行开发不同功能
- ✅ **问题追踪**：记录和解决bug
- ✅ **免费使用**：个人和小团队完全免费

## 📋 设置步骤

### 1. 创建GitHub仓库

#### 您（Windows）操作：
1. **访问** [github.com](https://github.com)
2. **注册/登录** GitHub账号
3. **创建新仓库**：
   - 点击右上角 "+" → "New repository"
   - Repository name: `HIKBIK-App`
   - Description: `Outdoor camping and hiking mobile app`
   - 选择 "Public" 或 "Private"
   - ✅ 勾选 "Add a README file"
   - ✅ 勾选 "Add .gitignore" → 选择 "Node"
   - 点击 "Create repository"

### 2. 邀请同事协作

#### 在GitHub仓库页面：
1. **点击 "Settings" 标签**
2. **左侧菜单选择 "Collaborators"**
3. **点击 "Add people"**
4. **输入同事的GitHub用户名或邮箱**
5. **发送邀请**

#### 同事（iOS）操作：
1. **检查邮箱** 收到GitHub邀请
2. **点击邀请链接** 接受协作邀请
3. **注册GitHub账号**（如果还没有）

## 💻 本地开发环境设置

### Windows环境（您）

#### 安装Git：
```bash
# 下载并安装 Git for Windows
# https://git-scm.com/download/win

# 验证安装
git --version
```

#### 克隆仓库：
```bash
# 在命令行中执行
git clone https://github.com/您的用户名/HIKBIK-App.git
cd HIKBIK-App

# 添加现有文件
git add .
git commit -m "Initial commit: HIKBIK app files"
git push origin main
```

### iOS环境（同事）

#### 安装Git：
```bash
# 使用Homebrew安装
brew install git

# 或从App Store安装 Xcode Command Line Tools
xcode-select --install
```

#### 克隆仓库：
```bash
# 克隆仓库到本地
git clone https://github.com/您的用户名/HIKBIK-App.git
cd HIKBIK-App
```

## 🔄 日常协作流程

### 基本工作流程：

#### 1. 开始工作前：
```bash
# 获取最新代码
git pull origin main
```

#### 2. 修改代码后：
```bash
# 查看修改状态
git status

# 添加修改的文件
git add .

# 提交修改
git commit -m "描述您的修改内容"

# 推送到GitHub
git push origin main
```

#### 3. 解决冲突：
```bash
# 如果出现冲突，先拉取最新代码
git pull origin main

# 手动解决冲突后
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

## 🌿 分支管理策略

### 创建功能分支：
```bash
# 创建新分支
git checkout -b feature/new-feature

# 开发完成后
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# 在GitHub上创建Pull Request
```

### 分支命名规范：
- `feature/功能名称` - 新功能开发
- `bugfix/问题描述` - 修复bug
- `hotfix/紧急修复` - 紧急修复

## 📁 项目文件结构

```
HIKBIK-App/
├── .gitignore                 # Git忽略文件
├── README.md                  # 项目说明
├── hikbik-standalone.html     # 中文版应用
├── hikbik-english.html        # 英文版应用
├── map-test.html             # 地图测试文件
├── src/                      # 源代码目录
│   ├── components/           # 组件
│   └── screens/             # 页面
├── docs/                     # 文档目录
│   ├── MACBOOK_SETUP.md     # MacBook设置指南
│   ├── iOS_QUICK_START.md   # iOS使用指南
│   └── GITHUB_COLLABORATION.md # 本文件
└── assets/                   # 资源文件
```

## 🛠️ 开发工具推荐

### Windows（您）：
- **VS Code** - 代码编辑器
- **GitHub Desktop** - 图形化Git工具
- **Chrome DevTools** - 调试工具

### iOS（同事）：
- **VS Code** - 代码编辑器
- **GitHub Desktop** - 图形化Git工具
- **Safari Web Inspector** - 调试工具

## 📝 协作最佳实践

### 提交信息规范：
```bash
# 格式：类型: 简短描述
git commit -m "feat: add user login functionality"
git commit -m "fix: resolve map loading issue"
git commit -m "docs: update setup instructions"
git commit -m "style: improve mobile UI layout"
```

### 代码审查：
1. **创建Pull Request** 进行代码审查
2. **详细描述** 修改内容和原因
3. **添加截图** 展示UI变化
4. **测试确认** 功能正常工作

### 沟通协作：
- 使用 **GitHub Issues** 记录问题和需求
- 使用 **GitHub Discussions** 进行技术讨论
- 使用 **Commit消息** 记录修改原因

## 🔧 故障排除

### 常见问题：

#### 1. 权限问题：
```bash
# 配置Git用户信息
git config --global user.name "您的姓名"
git config --global user.email "您的邮箱"
```

#### 2. 连接问题：
```bash
# 使用SSH密钥（推荐）
ssh-keygen -t rsa -b 4096 -C "您的邮箱"
# 将公钥添加到GitHub账户
```

#### 3. 合并冲突：
- 使用VS Code的Git集成功能
- 手动解决冲突标记
- 测试解决后的代码

## 📱 移动端测试

### 测试流程：
1. **本地开发** → 提交到GitHub
2. **同事拉取** → 在iOS设备测试
3. **反馈问题** → 创建Issue
4. **修复问题** → 提交修复
5. **重新测试** → 确认修复

### 测试工具：
- **GitHub Pages** - 免费托管测试版本
- **Netlify** - 自动部署和预览
- **Vercel** - 快速部署和域名

## 🚀 部署选项

### GitHub Pages：
1. **仓库设置** → "Pages"
2. **选择分支** → "main"
3. **自动部署** → 访问 `https://您的用户名.github.io/HIKBIK-App`

### 自定义域名：
- 购买域名
- 配置DNS
- 在GitHub Pages设置中绑定域名

现在您可以和同事完美协作开发HIKBIK应用了！🎉👥
