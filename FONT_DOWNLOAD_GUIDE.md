# HIKBIK 字体下载与安装指南

## 🎨 免费字体推荐

### 1. Google Fonts (推荐)
- **网址**: https://fonts.google.com/
- **完全免费商用**
- **推荐字体**:
  - Montserrat (类似Spotify)
  - Inter (现代简洁)
  - Roboto (Google设计)
  - Open Sans (经典易读)
  - Poppins (圆润现代)

### 2. Font Squirrel
- **网址**: https://www.fontsquirrel.com/
- **特点**: 100%免费商用字体

## 💰 付费字体推荐

### 1. MyFonts
- **网址**: https://www.myfonts.com/
- **价格**: $15-$500不等
- **特点**: 全球最大字体商店

### 2. Apple SF Pro字体
- **获取**: Apple Developer账号 ($99/年)
- **授权**: 仅限Apple生态系统

### 3. Spotify Circular字体
- **获取**: 商业授权
- **价格**: 较高
- **免费替代**: Montserrat

## 📱 如何在HIKBIK中使用新字体

### 步骤1: 下载字体文件
1. 访问Google Fonts
2. 选择喜欢的字体
3. 下载TTF格式文件

### 步骤2: 放置字体文件
```
HIKBIK/
├── assets/
│   └── fonts/
│       ├── YourFont-Regular.ttf
│       ├── YourFont-Bold.ttf
│       ├── YourFont-Light.ttf
│       └── YourFont-Medium.ttf
```

### 步骤3: 更新app.json
```json
{
  "expo": {
    "fonts": [
      "./assets/fonts/YourFont-Regular.ttf",
      "./assets/fonts/YourFont-Bold.ttf",
      "./assets/fonts/YourFont-Light.ttf",
      "./assets/fonts/YourFont-Medium.ttf"
    ]
  }
}
```

### 步骤4: 更新字体配置
编辑 `src/config/fonts.js`:
```javascript
export const CurrentFont = {
  regular: 'YourFont-Regular',
  bold: 'YourFont-Bold',
  light: 'YourFont-Light',
  medium: 'YourFont-Medium',
};
```

### 步骤5: 重新启动应用
```bash
npx expo start --clear --reset-cache
```

## 🎯 字体选择建议

### 现代商业风格 (类似Spotify/Apple)
- **Montserrat** (免费)
- **Inter** (免费)
- **Circular** (付费)

### 经典易读风格
- **Roboto** (免费)
- **Open Sans** (免费)
- **Helvetica Neue** (付费)

### 圆润友好风格
- **Poppins** (免费)
- **Nunito** (免费)

## 📞 技术支持

如需帮助安装新字体，请联系开发团队！
