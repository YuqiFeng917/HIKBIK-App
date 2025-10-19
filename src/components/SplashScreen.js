import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function SplashScreen({onFinish}) {
  // 动画值
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const logoScaleAnim = useRef(new Animated.Value(0)).current;
  const textSlideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // 启动动画序列
    startAnimationSequence();
  }, []);

  const startAnimationSequence = () => {
    // 1. 背景淡入
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // 2. 主容器缩放和旋转
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // 3. Logo缩放动画
    setTimeout(() => {
      Animated.spring(logoScaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }, 500);

    // 4. 文字滑入动画
    setTimeout(() => {
      Animated.timing(textSlideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, 800);

    // 5. 3秒后完成加载
    setTimeout(() => {
      onFinish();
    }, 3000);
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColors = ['#2E7D32', '#388E3C', '#4CAF50', '#66BB6A', '#81C784'];
  const backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
      
      {/* 背景装饰圆圈 */}
      <Animated.View style={[styles.backgroundCircle, {opacity: fadeAnim}]} />
      <Animated.View 
        style={[
          styles.backgroundCircle2, 
          {
            opacity: fadeAnim,
            transform: [{scale: scaleAnim}]
          }
        ]} 
      />

      {/* 主要内容容器 */}
      <Animated.View
        style={[
          styles.contentContainer,
          {
            opacity: fadeAnim,
            transform: [
              {scale: scaleAnim},
              {rotate: rotateInterpolate}
            ],
          },
        ]}>
        
        {/* Logo区域 */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [{scale: logoScaleAnim}],
            },
          ]}>
          
          {/* 主Logo */}
          <View style={styles.logo}>
            <Text style={styles.logoText}>🏕️</Text>
          </View>
          
          {/* 环绕动画点 */}
          <Animated.View 
            style={[
              styles.orbit,
              {transform: [{rotate: rotateInterpolate}]}
            ]}
          >
            <View style={styles.orbitDot} />
          </Animated.View>
        </Animated.View>

        {/* 应用名称 */}
        <Animated.View
          style={[
            styles.textContainer,
            {
              transform: [{translateY: textSlideAnim}],
            },
          ]}>
          <Text style={styles.appName}>HIKBIK</Text>
          <Text style={styles.tagline}>户外露营助手</Text>
        </Animated.View>

        {/* 加载进度条 */}
        <Animated.View style={[styles.progressContainer, {opacity: fadeAnim}]}>
          <View style={styles.progressBar}>
            <Animated.View 
              style={[
                styles.progressFill, 
                {
                  width: scaleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  })
                }
              ]} 
            />
          </View>
          <Text style={styles.loadingText}>加载中...</Text>
        </Animated.View>
      </Animated.View>

      {/* 底部装饰 */}
      <Animated.View style={[styles.bottomDecoration, {opacity: fadeAnim}]}>
        <Text style={styles.decorationText}>探索自然 • 享受露营</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E7D32',
  },
  backgroundCircle: {
    position: 'absolute',
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: width * 0.75,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: -width * 0.5,
    left: -width * 0.25,
  },
  backgroundCircle2: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    bottom: height * 0.1,
    right: -width * 0.2,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoText: {
    fontSize: 60,
  },
  orbit: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderStyle: 'dashed',
  },
  orbitDot: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    top: -6,
    left: 74,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '300',
    letterSpacing: 2,
  },
  progressContainer: {
    alignItems: 'center',
    width: 200,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '300',
  },
  bottomDecoration: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
  },
  decorationText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    letterSpacing: 1,
  },
});
