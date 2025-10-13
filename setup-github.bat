@echo off
echo 🚀 设置HIKBIK GitHub协作环境...
echo.

echo 📋 步骤1: 检查Git安装
git --version
if %errorlevel% neq 0 (
    echo ❌ Git未安装，请先安装Git
    echo 下载地址: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✅ Git已安装

echo.
echo 📋 步骤2: 配置Git用户信息
echo 请输入您的GitHub用户名:
set /p GIT_USERNAME=
echo 请输入您的GitHub邮箱:
set /p GIT_EMAIL=

git config --global user.name "%GIT_USERNAME%"
git config --global user.email "%GIT_EMAIL%"
echo ✅ Git配置完成

echo.
echo 📋 步骤3: 初始化Git仓库
if not exist .git (
    git init
    echo ✅ Git仓库初始化完成
) else (
    echo ✅ Git仓库已存在
)

echo.
echo 📋 步骤4: 添加文件到Git
git add .
git commit -m "Initial commit: HIKBIK app files"
echo ✅ 文件已添加到Git

echo.
echo 📋 步骤5: 创建GitHub仓库
echo 请在浏览器中完成以下步骤:
echo 1. 访问 https://github.com
echo 2. 点击右上角 "+" → "New repository"
echo 3. Repository name: HIKBIK-App
echo 4. 选择 Public 或 Private
echo 5. 勾选 "Add a README file"
echo 6. 点击 "Create repository"
echo.
echo 创建完成后，复制仓库URL（类似: https://github.com/用户名/HIKBIK-App.git）
echo 然后按任意键继续...
pause

echo.
echo 请输入GitHub仓库URL:
set /p REPO_URL=
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo 🎉 GitHub协作环境设置完成！
echo.
echo 📋 下一步操作:
echo 1. 邀请同事协作: Settings → Collaborators → Add people
echo 2. 同事克隆仓库: git clone %REPO_URL%
echo 3. 开始协作开发！
echo.
echo 📖 详细说明请查看: GITHUB_COLLABORATION.md
pause
