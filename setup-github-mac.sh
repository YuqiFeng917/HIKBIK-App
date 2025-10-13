#!/bin/bash

echo "🍎 设置HIKBIK GitHub协作环境 (macOS/iOS)..."
echo

echo "📋 步骤1: 检查Git安装"
if ! command -v git &> /dev/null; then
    echo "❌ Git未安装，正在安装..."
    if command -v brew &> /dev/null; then
        brew install git
    else
        echo "请先安装Homebrew或Xcode Command Line Tools"
        echo "安装Xcode Command Line Tools: xcode-select --install"
        exit 1
    fi
fi
echo "✅ Git已安装: $(git --version)"

echo
echo "📋 步骤2: 配置Git用户信息"
echo "请输入您的GitHub用户名:"
read -r GIT_USERNAME
echo "请输入您的GitHub邮箱:"
read -r GIT_EMAIL

git config --global user.name "$GIT_USERNAME"
git config --global user.email "$GIT_EMAIL"
echo "✅ Git配置完成"

echo
echo "📋 步骤3: 设置SSH密钥 (推荐)"
echo "是否要设置SSH密钥？(y/n)"
read -r SETUP_SSH

if [ "$SETUP_SSH" = "y" ] || [ "$SETUP_SSH" = "Y" ]; then
    if [ ! -f ~/.ssh/id_rsa.pub ]; then
        ssh-keygen -t rsa -b 4096 -C "$GIT_EMAIL" -f ~/.ssh/id_rsa -N ""
        echo "✅ SSH密钥已生成"
    else
        echo "✅ SSH密钥已存在"
    fi
    
    echo
    echo "📋 请将以下公钥添加到GitHub:"
    echo "1. 访问 https://github.com/settings/keys"
    echo "2. 点击 'New SSH key'"
    echo "3. 复制以下公钥内容:"
    echo "----------------------------------------"
    cat ~/.ssh/id_rsa.pub
    echo "----------------------------------------"
    echo "按任意键继续..."
    read -r
fi

echo
echo "📋 步骤4: 克隆HIKBIK仓库"
echo "请输入GitHub仓库URL (类似: https://github.com/用户名/HIKBIK-App.git):"
read -r REPO_URL

if [ -d "HIKBIK-App" ]; then
    echo "⚠️ HIKBIK-App目录已存在，是否删除并重新克隆？(y/n)"
    read -r RECLONE
    if [ "$RECLONE" = "y" ] || [ "$RECLONE" = "Y" ]; then
        rm -rf HIKBIK-App
    else
        echo "✅ 使用现有目录"
        cd HIKBIK-App || exit 1
        git pull origin main
        echo "✅ 代码已更新"
        exit 0
    fi
fi

git clone "$REPO_URL" HIKBIK-App
cd HIKBIK-App || exit 1
echo "✅ 仓库克隆完成"

echo
echo "📋 步骤5: 安装开发工具"
echo "是否要安装推荐的开发工具？(y/n)"
read -r INSTALL_TOOLS

if [ "$INSTALL_TOOLS" = "y" ] || [ "$INSTALL_TOOLS" = "Y" ]; then
    echo "安装VS Code..."
    if ! command -v code &> /dev/null; then
        if command -v brew &> /dev/null; then
            brew install --cask visual-studio-code
        else
            echo "请手动下载安装VS Code: https://code.visualstudio.com/"
        fi
    else
        echo "✅ VS Code已安装"
    fi
    
    echo "安装GitHub Desktop..."
    if command -v brew &> /dev/null; then
        brew install --cask github-desktop
    else
        echo "请手动下载安装GitHub Desktop: https://desktop.github.com/"
    fi
fi

echo
echo "🎉 GitHub协作环境设置完成！"
echo
echo "📋 下一步操作:"
echo "1. 打开VS Code: code ."
echo "2. 开始编辑HIKBIK应用代码"
echo "3. 使用Git命令同步代码:"
echo "   git add ."
echo "   git commit -m '描述修改内容'"
echo "   git push origin main"
echo
echo "📖 详细说明请查看: GITHUB_COLLABORATION.md"
echo
echo "🔧 常用Git命令:"
echo "   git status          - 查看文件状态"
echo "   git pull origin main - 获取最新代码"
echo "   git push origin main - 推送代码到GitHub"
echo "   git log --oneline    - 查看提交历史"
