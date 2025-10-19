import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Easing,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function LogoTransitionAnimation({onFinish}) {
  // 动画值
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  
  // 控制状态
  const [currentLogo, setCurrentLogo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 开始动画序列
    startAnimationSequence();
  }, []);

  const startAnimationSequence = () => {
    // 1. 显示第一个Logo (2秒)
    setTimeout(() => {
      setCurrentLogo(1);
    }, 2000);

    // 2. 开始转换动画 (3秒)
    setTimeout(() => {
      setIsTransitioning(true);
      startTransition();
    }, 5000);

    // 3. 完成动画 (总共8秒)
    setTimeout(() => {
      onFinish();
    }, 8000);
  };

  const startTransition = () => {
    // 淡出第一个Logo
    Animated.sequence([
      // 第一阶段：淡出和缩小
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.3,
          duration: 1000,
          easing: Easing.out(Easing.back(1.7)),
          useNativeDriver: true,
        }),
      ]),
      
      // 第二阶段：旋转和位移
      Animated.parallel([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: false,
        }),
      ]),
      
      // 第三阶段：淡入和放大
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  // 插值计算
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const slideInterpolate = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#2E7D32'],
  });

  const renderFirstLogo = () => (
    <View style={styles.logoContainer}>
      {/* 第一个Logo - 彩色几何风格 */}
      <View style={styles.geometricLogo}>
        <Text style={styles.geometricText}>HIKBIK</Text>
        {/* 几何装饰 */}
        <View style={styles.geometricDecoration}>
          <View style={[styles.geoShape, styles.triangle1]} />
          <View style={[styles.geoShape, styles.triangle2]} />
          <View style={[styles.geoShape, styles.circle1]} />
        </View>
      </View>
    </View>
  );

  const renderSecondLogo = () => (
    <View style={styles.logoContainer}>
      {/* 第二个Logo - 露营主题风格 */}
      <View style={styles.campingLogo}>
        <Text style={styles.campingText}>HIKBIK</Text>
        {/* 露营装饰 */}
        <View style={styles.campingDecoration}>
          <Text style={styles.tentEmoji}>⛺</Text>
          <Text style={styles.backpackEmoji}>🎒</Text>
          <Text style={styles.treeEmoji}>🌲</Text>
        </View>
      </View>
    </View>
  );

  return (
    <Animated.View style={[styles.container, {backgroundColor}]}>
      <StatusBar backgroundColor="#2E7D32" barStyle="light-content" />
      
      <Animated.View
        style={[
          styles.animationContainer,
          {
            opacity: fadeAnim,
            transform: [
              {scale: scaleAnim},
              {rotate: rotateInterpolate},
              {translateY: slideInterpolate},
            ],
          },
        ]}>
        
        {currentLogo === 0 ? renderFirstLogo() : renderSecondLogo()}
        
        {/* 过渡效果装饰 */}
        {isTransitioning && (
          <View style={styles.transitionEffects}>
            <Animated.View style={[styles.sparkle, styles.sparkle1]} />
            <Animated.View style={[styles.sparkle, styles.sparkle2]} />
            <Animated.View style={[styles.sparkle, styles.sparkle3]} />
          </View>
        )}
      </Animated.View>

      {/* 进度指示器 */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <Animated.View 
            style={[
              styles.progressFill, 
              {
                width: colorAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                })
              }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {isTransitioning ? '正在转换Logo...' : '展示HIKBIK品牌'}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  
  // 第一个Logo样式 - 几何风格
  geometricLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  geometricText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
  geometricDecoration: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  geoShape: {
    position: 'absolute',
  },
  triangle1: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF6B6B',
    top: -30,
    left: -40,
  },
  triangle2: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4ECDC4',
    top: -30,
    right: -40,
  },
  circle1: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFE66D',
    bottom: -30,
  },

  // 第二个Logo样式 - 露营风格
  campingLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  campingText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 8,
  },
  campingDecoration: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tentEmoji: {
    fontSize: 24,
    position: 'absolute',
    top: -30,
    left: -30,
  },
  backpackEmoji: {
    fontSize: 24,
    position: 'absolute',
    top: -30,
    right: -30,
  },
  treeEmoji: {
    fontSize: 24,
    position: 'absolute',
    bottom: -30,
  },

  // 过渡效果
  transitionEffects: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sparkle: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFD700',
  },
  sparkle1: {
    top: 50,
    left: 50,
  },
  sparkle2: {
    top: 100,
    right: 80,
  },
  sparkle3: {
    bottom: 80,
    left: 100,
  },

  // 进度条
  progressContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    width: 300,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  progressText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
});
