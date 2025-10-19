# 🎨 如何编辑动画内容 - 完整指南

## 📋 **三种编辑动画的方法**

### **方法1：使用可视化编辑器** ⭐ **推荐**
- ✅ 图形界面操作
- ✅ 实时预览
- ✅ 无需编程知识
- ✅ 即时保存

### **方法2：直接编辑代码**
- ✅ 完全控制
- ✅ 高级自定义
- ✅ 需要基础编程知识

### **方法3：使用预设模板**
- ✅ 快速应用
- ✅ 专业效果
- ✅ 一键应用

---

## 🎮 **方法1：可视化编辑器（推荐）**

### **步骤1：启动编辑器**
```bash
# 运行应用
.\test-custom-animation.bat

# 在应用中切换到编辑器模式
# 或者直接修改 App.js 中的 SPLASH_TYPE
```

### **步骤2：编辑基础设置**
- **自动播放**：开启/关闭自动播放
- **控制面板**：显示/隐藏手动控制按钮
- **总时长**：设置整个动画的总时长

### **步骤3：调整颜色主题**
- **背景色**：修改动画背景颜色
- **Logo色**：修改Logo和装饰颜色
- **文字色**：修改文字颜色

### **步骤4：编辑动画步骤**
- **添加步骤**：点击"+ 添加"按钮
- **删除步骤**：点击步骤右侧的"×"按钮
- **重命名步骤**：直接编辑步骤名称
- **调整时长**：修改每个步骤的持续时间
- **启用/禁用**：开关控制步骤是否执行
- **调整顺序**：使用↑↓按钮调整步骤顺序

### **步骤5：预览和保存**
- **预览动画**：点击"👁️ 预览动画"查看效果
- **保存配置**：点击"💾 保存配置"应用更改

---

## 💻 **方法2：直接编辑代码**

### **编辑动画步骤**
打开 `src/components/CustomSplashScreen.js`，找到第29行：

```javascript
const animationSteps = [
  {
    name: '背景淡入',           // 修改步骤名称
    duration: 800,             // 修改时长(毫秒)
    action: () => fadeAnim.setValue(0),      // 动画开始状态
    target: () => fadeAnim.setValue(1),      // 动画结束状态
  },
  {
    name: 'Logo缩放',
    duration: 1000,            // 改为2000 = 2秒
    action: () => logoScaleAnim.setValue(0),
    target: () => logoScaleAnim.setValue(1),
    easing: Easing.elastic(1), // 添加弹性效果
  },
  // 添加新步骤...
];
```

### **添加新的动画效果**

#### **1. 添加新的动画值**
```javascript
// 在文件顶部添加
const newAnim = useRef(new Animated.Value(0)).current;
```

#### **2. 添加新的动画步骤**
```javascript
{
  name: '我的自定义动画',
  duration: 1500,
  action: () => newAnim.setValue(0),
  target: () => newAnim.setValue(1),
  easing: Easing.bounce, // 弹跳效果
}
```

#### **3. 在界面中使用动画**
```javascript
<Animated.View
  style={{
    transform: [{ scale: newAnim }],
    opacity: newAnim,
  }}
>
  <Text>我的动画元素</Text>
</Animated.View>
```

### **修改颜色和样式**
```javascript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#您的颜色', // 修改背景色
  },
  appName: {
    color: '#您的颜色',           // 修改文字颜色
    fontSize: 48,               // 修改字体大小
  },
  logo: {
    backgroundColor: '#您的颜色', // 修改Logo背景
    borderColor: '#您的颜色',     // 修改边框颜色
  },
});
```

---

## 🎯 **方法3：使用预设模板**

### **快速应用预设效果**

#### **模板1：快速加载**
```javascript
const animationSteps = [
  { name: '背景淡入', duration: 300, enabled: true },
  { name: 'Logo缩放', duration: 500, enabled: true },
  { name: '文字显示', duration: 400, enabled: true },
];
```

#### **模板2：优雅加载**
```javascript
const animationSteps = [
  { name: '背景淡入', duration: 800, enabled: true },
  { name: 'Logo旋转', duration: 1200, enabled: true },
  { name: '文字滑入', duration: 600, enabled: true },
  { name: '进度填充', duration: 1000, enabled: true },
];
```

#### **模板3：炫酷加载**
```javascript
const animationSteps = [
  { name: '背景渐变', duration: 1000, enabled: true },
  { name: 'Logo弹性', duration: 1500, enabled: true },
  { name: 'Logo旋转', duration: 2000, enabled: true },
  { name: '文字打字', duration: 1200, enabled: true },
  { name: '粒子效果', duration: 2000, enabled: true },
];
```

---

## 🎨 **常用动画效果代码**

### **缩放动画**
```javascript
transform: [{ scale: scaleAnim }]
```

### **旋转动画**
```javascript
transform: [{
  rotate: rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
}]
```

### **位移动画**
```javascript
transform: [{
  translateX: translateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  })
}]
```

### **透明度动画**
```javascript
opacity: opacityAnim
```

### **颜色渐变动画**
```javascript
backgroundColor: colorAnim.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
})
```

---

## 🔧 **调试和测试**

### **启用调试模式**
```javascript
// 在 CustomSplashScreen.js 中添加
const DEBUG = true;

if (DEBUG) {
  console.log('当前步骤:', animationSteps[currentStep]?.name);
  console.log('动画进度:', progressAnim._value);
}
```

### **手动测试动画**
1. 启动应用
2. 点击"手动模式"
3. 逐步点击"下一步"测试每个动画
4. 使用"重置"按钮重新开始

### **性能监控**
```javascript
// 监控动画性能
const startTime = Date.now();
// ... 动画代码 ...
const endTime = Date.now();
console.log(`动画耗时: ${endTime - startTime}ms`);
```

---

## 🚀 **高级技巧**

### **条件动画**
```javascript
{
  name: '条件动画',
  duration: 1000,
  action: () => {
    if (someCondition) {
      anim.setValue(0);
    }
  },
  target: () => anim.setValue(1),
}
```

### **循环动画**
```javascript
Animated.loop(
  Animated.timing(rotateAnim, {
    toValue: 1,
    duration: 2000,
    easing: Easing.linear,
    useNativeDriver: true,
  })
).start();
```

### **组合动画**
```javascript
Animated.parallel([
  Animated.timing(scaleAnim, { toValue: 1, duration: 1000 }),
  Animated.timing(rotateAnim, { toValue: 1, duration: 1000 }),
  Animated.timing(fadeAnim, { toValue: 1, duration: 1000 }),
]).start();
```

---

## 📱 **实际应用建议**

### **移动端优化**
- 控制动画时长在3-5秒内
- 使用 `useNativeDriver: true`
- 避免同时运行过多动画

### **用户体验**
- 提供跳过选项
- 显示加载进度
- 保持动画流畅

### **品牌一致性**
- 使用品牌色彩
- 保持动画风格统一
- 体现产品特色

---

现在您可以根据自己的需求选择合适的方法来编辑动画内容了！🎉
