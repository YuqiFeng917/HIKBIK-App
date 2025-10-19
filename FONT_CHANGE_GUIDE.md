# 🎨 HIKBIK 字体更换指南

## 📱 当前字体配置

我已经为您设置了字体配置系统，现在您可以通过修改 `src/config/fonts.js` 文件来轻松更换字体。

## 🔧 如何更换字体

### 方法1：使用系统字体（推荐）

在 `src/config/fonts.js` 中，将 `CurrentFont` 改为：

```javascript
// 使用iOS系统字体
export const CurrentFont = Fonts.ios;

// 或使用Android系统字体
export const CurrentFont = Fonts.android;

// 或使用通用系统字体
export const CurrentFont = Fonts.system;
```

### 方法2：使用自定义字体

#### 步骤1：添加字体文件
1. 将字体文件（.ttf 或 .otf）放入 `assets/fonts/` 文件夹
2. 在 `app.json` 中添加字体配置：

```json
{
  "expo": {
    "fonts": [
      "./assets/fonts/CustomFont-Regular.ttf",
      "./assets/fonts/CustomFont-Bold.ttf",
      "./assets/fonts/CustomFont-Light.ttf"
    ]
  }
}
```

#### 步骤2：更新字体配置
在 `src/config/fonts.js` 中：

```javascript
export const CurrentFont = Fonts.custom;
```

### 方法3：使用流行字体

```javascript
// 现代字体
export const CurrentFont = {
  regular: 'SF Pro Display',
  bold: 'SF Pro Display',
  light: 'SF Pro Display',
  medium: 'SF Pro Display',
};

// 优雅字体
export const CurrentFont = {
  regular: 'Georgia',
  bold: 'Georgia-Bold',
  light: 'Georgia',
  medium: 'Georgia',
};
```

## 🎯 字体大小调整

您可以在 `src/config/fonts.js` 中调整字体大小：

```javascript
export const FontSizes = {
  xs: 10,    // 超小
  sm: 12,    // 小
  md: 14,    // 中等
  lg: 16,    // 大
  xl: 18,    // 超大
  xxl: 20,   // 特大
  xxxl: 24,  // 巨大
  huge: 28,  // 巨大
};
```

## 📋 支持的字体类型

### iOS 系统字体
- Helvetica
- Helvetica-Bold
- Helvetica-Light
- SF Pro Display
- Avenir Next
- Georgia

### Android 系统字体
- Roboto
- Roboto-Bold
- Roboto-Light
- Noto Sans
- Droid Sans

### 自定义字体
- 任何 .ttf 或 .otf 格式的字体文件

## 🚀 快速更换示例

### 示例1：更换为现代字体
```javascript
// 在 src/config/fonts.js 中
export const CurrentFont = {
  regular: 'SF Pro Display',
  bold: 'SF Pro Display',
  light: 'SF Pro Display',
  medium: 'SF Pro Display',
};
```

### 示例2：更换为优雅字体
```javascript
export const CurrentFont = {
  regular: 'Georgia',
  bold: 'Georgia-Bold',
  light: 'Georgia',
  medium: 'Georgia',
};
```

### 示例3：调整字体大小
```javascript
export const FontSizes = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 18,
  xxxl: 20,
  huge: 24,
};
```

## 🔄 应用更改

修改字体配置后，需要重新启动应用：

1. 停止当前应用
2. 清除缓存：`npx expo start --clear`
3. 重新启动应用

## 💡 字体选择建议

- **现代应用**：SF Pro Display, Roboto
- **优雅风格**：Georgia, Times New Roman
- **简洁风格**：Helvetica, Arial
- **创意风格**：Futura, Custom Fonts

## ⚠️ 注意事项

1. 确保字体文件格式正确（.ttf 或 .otf）
2. 字体文件大小不要过大（建议 < 2MB）
3. 测试字体在不同设备上的显示效果
4. 考虑字体的可读性和用户体验

## 🎨 字体预览

您可以通过修改 `CurrentFont` 来预览不同字体的效果，然后选择最适合HIKBIK应用风格的字体。
