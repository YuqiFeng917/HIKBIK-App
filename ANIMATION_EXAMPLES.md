# 🎨 动画效果示例集合

## 📋 **快速开始**

在 `CustomSplashScreen.js` 中，您可以轻松添加新的动画效果。以下是各种动画示例：

## 🌟 **基础动画示例**

### **1. 缩放动画**
```javascript
const scaleAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '元素缩放',
  duration: 800,
  action: () => scaleAnim.setValue(0),
  target: () => scaleAnim.setValue(1),
  easing: Easing.elastic(1),
}

// 在JSX中使用:
<Animated.View
  style={{
    transform: [{ scale: scaleAnim }],
  }}
>
  <Text>缩放元素</Text>
</Animated.View>
```

### **2. 旋转动画**
```javascript
const rotateAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '元素旋转',
  duration: 1000,
  action: () => rotateAnim.setValue(0),
  target: () => rotateAnim.setValue(1),
  easing: Easing.out(Easing.quad),
}

// 在JSX中使用:
<Animated.View
  style={{
    transform: [{
      rotate: rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      })
    }],
  }}
>
  <Text>🔄</Text>
</Animated.View>
```

### **3. 位移动画**
```javascript
const translateAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '元素移动',
  duration: 600,
  action: () => translateAnim.setValue(0),
  target: () => translateAnim.setValue(1),
  easing: Easing.out(Easing.back(1.7)),
}

// 在JSX中使用:
<Animated.View
  style={{
    transform: [{
      translateX: translateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
      })
    }],
  }}
>
  <Text>移动元素</Text>
</Animated.View>
```

### **4. 透明度动画**
```javascript
const opacityAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '淡入效果',
  duration: 500,
  action: () => opacityAnim.setValue(0),
  target: () => opacityAnim.setValue(1),
  easing: Easing.out(Easing.quad),
}

// 在JSX中使用:
<Animated.View
  style={{
    opacity: opacityAnim,
  }}
>
  <Text>淡入元素</Text>
</Animated.View>
```

## 🎨 **高级动画示例**

### **5. 颜色渐变动画**
```javascript
const colorAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '颜色渐变',
  duration: 1200,
  action: () => colorAnim.setValue(0),
  target: () => colorAnim.setValue(1),
  easing: Easing.inOut(Easing.quad),
}

// 在JSX中使用:
<Animated.View
  style={{
    backgroundColor: colorAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
    }),
  }}
>
  <Text style={{color: 'white'}}>彩色渐变</Text>
</Animated.View>
```

### **6. 组合变换动画**
```javascript
const comboAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '组合变换',
  duration: 1500,
  action: () => comboAnim.setValue(0),
  target: () => comboAnim.setValue(1),
  easing: Easing.elastic(1),
}

// 在JSX中使用:
<Animated.View
  style={{
    transform: [
      { scale: comboAnim },
      { 
        rotate: comboAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        })
      },
      {
        translateY: comboAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        })
      }
    ],
    opacity: comboAnim,
  }}
>
  <Text>组合动画</Text>
</Animated.View>
```

### **7. 弹性动画**
```javascript
const bounceAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '弹性效果',
  duration: 1000,
  action: () => bounceAnim.setValue(0),
  target: () => bounceAnim.setValue(1),
  easing: Easing.bounce,
}

// 在JSX中使用:
<Animated.View
  style={{
    transform: [{
      translateY: bounceAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
      })
    }],
  }}
>
  <Text>弹性元素</Text>
</Animated.View>
```

## 🎯 **实际应用示例**

### **8. Logo入场动画**
```javascript
const logoAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: 'Logo入场',
  duration: 1200,
  action: () => logoAnim.setValue(0),
  target: () => logoAnim.setValue(1),
  easing: Easing.elastic(1),
}

// 在JSX中使用:
<Animated.View
  style={[
    styles.logo,
    {
      transform: [
        { scale: logoAnim },
        {
          rotate: logoAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['-180deg', '0deg'],
          })
        }
      ],
      opacity: logoAnim,
    },
  ]}
>
  <Text style={styles.logoEmoji}>🏕️</Text>
</Animated.View>
```

### **9. 文字打字机效果**
```javascript
const typewriterAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '文字显示',
  duration: 2000,
  action: () => typewriterAnim.setValue(0),
  target: () => typewriterAnim.setValue(1),
  easing: Easing.linear,
}

// 在JSX中使用:
<Animated.Text
  style={{
    opacity: typewriterAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    }),
    transform: [{
      translateX: typewriterAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0],
      })
    }],
  }}
>
  HIKBIK - 探索自然，享受露营
</Animated.Text>
```

### **10. 粒子效果动画**
```javascript
const particleAnim = useRef(new Animated.Value(0)).current;

// 添加到 animationSteps:
{
  name: '粒子效果',
  duration: 3000,
  action: () => particleAnim.setValue(0),
  target: () => particleAnim.setValue(1),
  easing: Easing.inOut(Easing.quad),
}

// 在JSX中使用:
{/* 创建多个粒子 */}
{[...Array(10)].map((_, index) => (
  <Animated.View
    key={index}
    style={{
      position: 'absolute',
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: 'white',
      left: Math.random() * width,
      top: Math.random() * height * 0.5,
      opacity: particleAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0],
      }),
      transform: [{
        scale: particleAnim.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 1, 0],
        })
      }],
    }}
  />
))}
```

## 🔧 **自定义缓动函数**

### **创建自定义缓动**
```javascript
// 在 animationSteps 中使用:
{
  name: '自定义缓动',
  duration: 1000,
  action: () => customAnim.setValue(0),
  target: () => customAnim.setValue(1),
  easing: Easing.bezier(0.25, 0.46, 0.45, 0.94), // 贝塞尔曲线
}
```

## 🎮 **交互式动画**

### **点击触发动画**
```javascript
const [isAnimating, setIsAnimating] = useState(false);
const clickAnim = useRef(new Animated.Value(0)).current;

const handlePress = () => {
  setIsAnimating(true);
  Animated.sequence([
    Animated.timing(clickAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }),
    Animated.timing(clickAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }),
  ]).start(() => setIsAnimating(false));
};

<TouchableOpacity onPress={handlePress}>
  <Animated.View
    style={{
      transform: [{ scale: clickAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.2],
      })}],
    }}
  >
    <Text>点击我</Text>
  </Animated.View>
</TouchableOpacity>
```

## 🚀 **性能优化技巧**

1. **使用 `useNativeDriver: true`** 提升性能
2. **避免同时运行过多动画**
3. **合理设置动画时长**
4. **在真实设备上测试**

---

现在您可以使用这些示例来创建属于您自己的独特动画效果！🎉
