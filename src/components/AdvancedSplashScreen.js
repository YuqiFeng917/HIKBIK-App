import React, {useEffect, useRef} from 'react';
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

export default function AdvancedSplashScreen({onFinish}) {
  // 动画值
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const logoScaleAnim = useRef(new Animated.Value(0)).current;
  const logoRotateAnim = useRef(new Animated.Value(0)).current;
  const textSlideAnim = useRef(new Animated.Value(50)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const particleAnim = useRef(new Animated.Value(0)).current;
  const mountainAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimationSequence();
  }, []);

  const startAnimationSequence = () => {
    // 1. 背景淡入
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // 2. 山脉动画
    Animated.timing(mountainAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    // 3. Logo动画
    setTimeout(() => {
      Animated.parallel([
        Animated.spring(logoScaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.loop(
          Animated.timing(logoRotateAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ),
      ]).start();
    }, 800);

    // 4. 文字滑入
    setTimeout(() => {
      Animated.timing(textSlideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.back(1.7)),
        useNativeDriver: true,
      }).start();
    }, 1200);

    // 5. 粒子动画
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(particleAnim, {
            toValue: 1,
            duration: 3000,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(particleAnim, {
            toValue: 0,
            duration: 3000,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, 1500);

    // 6. 进度条动画
    setTimeout(() => {
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false,
      }).start();
    }, 1800);

    // 7. 完成加载
    setTimeout(() => {
      onFinish();
    }, 4000);
  };

  const logoRotateInterpolate = logoRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const mountainTranslateY = mountainAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const particleOpacity = particleAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B5E20" barStyle="light-content" />
      
      {/* 背景渐变 */}
      <View style={styles.backgroundGradient} />
      
      {/* 山脉背景 */}
      <Animated.View 
        style={[
          styles.mountainContainer,
          {
            opacity: fadeAnim,
            transform: [{translateY: mountainTranslateY}],
          },
        ]}
      >
        <View style={styles.mountain1} />
        <View style={styles.mountain2} />
        <View style={styles.mountain3} />
      </Animated.View>

      {/* 粒子效果 */}
      <Animated.View 
        style={[
          styles.particleContainer,
          {opacity: particleOpacity}
        ]}
      >
        {[...Array(20)].map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.particle,
              {
                left: Math.random() * width,
                top: Math.random() * height * 0.6,
                animationDelay: Math.random() * 2000,
              },
            ]}
          />
        ))}
      </Animated.View>

      {/* 主要内容 */}
      <Animated.View
        style={[
          styles.contentContainer,
          {opacity: fadeAnim},
        ]}>
        
        {/* Logo区域 */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [
                {scale: logoScaleAnim},
                {rotate: logoRotateInterpolate}
              ],
            },
          ]}>
          
          {/* 主Logo */}
          <View style={styles.logo}>
            <Text style={styles.logoEmoji}>🏕️</Text>
            <View style={styles.logoGlow} />
          </View>
          
          {/* 装饰圆环 */}
          <View style={styles.decorativeRing1} />
          <View style={styles.decorativeRing2} />
        </Animated.View>

        {/* 应用名称和标语 */}
        <Animated.View
          style={[
            styles.textContainer,
            {
              transform: [{translateY: textSlideAnim}],
            },
          ]}>
          <Text style={styles.appName}>HIKBIK</Text>
          <Text style={styles.tagline}>探索自然，享受露营</Text>
          <Text style={styles.subtitle}>您的专业户外助手</Text>
        </Animated.View>

        {/* 加载进度 */}
        <Animated.View style={[styles.progressContainer, {opacity: fadeAnim}]}>
          <View style={styles.progressBar}>
            <Animated.View 
              style={[
                styles.progressFill, 
                {width: progressWidth}
              ]} 
            />
          </View>
          <Text style={styles.loadingText}>正在加载应用...</Text>
        </Animated.View>
      </Animated.View>

      {/* 底部装饰 */}
      <Animated.View style={[styles.bottomDecoration, {opacity: fadeAnim}]}>
        <Text style={styles.decorationText}>🌲 连接自然，发现美好 🌲</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5E20',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2E7D32',
    opacity: 0.8,
  },
  mountainContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.4,
  },
  mountain1: {
    position: 'absolute',
    bottom: 0,
    left: -50,
    width: width * 0.6,
    height: height * 0.25,
    backgroundColor: '#1B5E20',
    transform: [{skewY: '-15deg'}],
  },
  mountain2: {
    position: 'absolute',
    bottom: 0,
    right: -30,
    width: width * 0.5,
    height: height * 0.3,
    backgroundColor: '#2E7D32',
    transform: [{skewY: '15deg'}],
  },
  mountain3: {
    position: 'absolute',
    bottom: 0,
    left: width * 0.3,
    width: width * 0.4,
    height: height * 0.2,
    backgroundColor: '#388E3C',
    transform: [{skewY: '-10deg'}],
  },
  particleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  particle: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#4CAF50',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
  },
  logoEmoji: {
    fontSize: 70,
  },
  logoGlow: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(76, 175, 80, 0.3)',
    shadowColor: '#4CAF50',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 30,
  },
  decorativeRing1: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderStyle: 'dashed',
  },
  decorativeRing2: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderStyle: 'dashed',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 8,
    marginBottom: 10,
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '300',
    letterSpacing: 2,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
    letterSpacing: 1,
  },
  progressContainer: {
    alignItems: 'center',
    width: 250,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
    shadowColor: '#4CAF50',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 1,
  },
  bottomDecoration: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  decorationText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
