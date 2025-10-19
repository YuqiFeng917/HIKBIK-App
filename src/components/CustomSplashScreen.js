import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Easing,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function CustomSplashScreen({onFinish}) {
  // 动画值 - 您可以根据需要添加更多
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const logoScaleAnim = useRef(new Animated.Value(0)).current;
  const logoRotateAnim = useRef(new Animated.Value(0)).current;
  const textSlideAnim = useRef(new Animated.Value(50)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const backgroundAnim = useRef(new Animated.Value(0)).current;
  
  // 控制状态
  const [currentStep, setCurrentStep] = useState(0);
  const [isManual, setIsManual] = useState(false);
  
  // 动画步骤配置 - 您可以自由修改这些参数
  const animationSteps = [
    {
      name: '背景淡入',
      duration: 800,
      action: () => fadeAnim.setValue(0),
      target: () => fadeAnim.setValue(1),
    },
    {
      name: '背景颜色变化',
      duration: 600,
      action: () => backgroundAnim.setValue(0),
      target: () => backgroundAnim.setValue(1),
    },
    {
      name: 'Logo缩放',
      duration: 1000,
      action: () => logoScaleAnim.setValue(0),
      target: () => logoScaleAnim.setValue(1),
      easing: Easing.elastic(1),
    },
    {
      name: 'Logo旋转',
      duration: 1200,
      action: () => logoRotateAnim.setValue(0),
      target: () => logoRotateAnim.setValue(1),
      easing: Easing.linear,
    },
    {
      name: '文字滑入',
      duration: 700,
      action: () => textSlideAnim.setValue(50),
      target: () => textSlideAnim.setValue(0),
      easing: Easing.out(Easing.back(1.7)),
    },
    {
      name: '进度条填充',
      duration: 1500,
      action: () => progressAnim.setValue(0),
      target: () => progressAnim.setValue(1),
      easing: Easing.out(Easing.quad),
    },
  ];

  useEffect(() => {
    if (!isManual) {
      startAutomaticSequence();
    }
  }, [isManual]);

  // 自动播放动画序列
  const startAutomaticSequence = () => {
    let delay = 0;
    animationSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        executeStep(step);
      }, delay);
      delay += step.duration;
    });
    
    // 所有动画完成后
    setTimeout(() => {
      setCurrentStep(animationSteps.length);
      onFinish();
    }, delay + 3000); // 延长3秒，让您有足够时间看到动画
  };

  // 执行单个动画步骤
  const executeStep = (step) => {
    step.action();
    
    Animated.timing(step.target(), {
      toValue: 1,
      duration: step.duration,
      easing: step.easing || Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  // 手动控制动画
  const nextStep = () => {
    if (currentStep < animationSteps.length) {
      setCurrentStep(currentStep + 1);
      executeStep(animationSteps[currentStep]);
    } else {
      onFinish();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // 这里可以添加反向动画逻辑
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    fadeAnim.setValue(0);
    logoScaleAnim.setValue(0);
    logoRotateAnim.setValue(0);
    textSlideAnim.setValue(50);
    progressAnim.setValue(0);
    backgroundAnim.setValue(0);
  };

  // 插值计算
  const logoRotateInterpolate = logoRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColor = backgroundAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#1B5E20', '#2E7D32', '#4CAF50'],
  });

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B5E20" barStyle="light-content" />
      
      {/* 动态背景 */}
      <Animated.View 
        style={[
          styles.backgroundContainer,
          {
            opacity: fadeAnim,
            backgroundColor: backgroundColor,
          },
        ]}
      />

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
          
          <View style={styles.logo}>
            <Text style={styles.logoEmoji}>🏕️</Text>
          </View>
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
          <Text style={styles.tagline}>自定义动画演示</Text>
        </Animated.View>

        {/* 进度条 */}
        <Animated.View style={[styles.progressContainer, {opacity: fadeAnim}]}>
          <View style={styles.progressBar}>
            <Animated.View 
              style={[
                styles.progressFill, 
                {width: progressWidth}
              ]} 
            />
          </View>
          <Text style={styles.loadingText}>
            {currentStep < animationSteps.length 
              ? `正在执行: ${animationSteps[currentStep]?.name}` 
              : '加载完成！'}
          </Text>
        </Animated.View>
      </Animated.View>

      {/* 控制面板 */}
      <Animated.View style={[styles.controlPanel, {opacity: fadeAnim}]}>
        <TouchableOpacity 
          style={styles.controlButton} 
          onPress={() => setIsManual(!isManual)}
        >
          <Text style={styles.controlButtonText}>
            {isManual ? '自动模式' : '手动模式'}
          </Text>
        </TouchableOpacity>
        
        {isManual && (
          <View style={styles.manualControls}>
            <TouchableOpacity style={styles.controlButton} onPress={previousStep}>
              <Text style={styles.controlButtonText}>上一步</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={nextStep}>
              <Text style={styles.controlButtonText}>下一步</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={resetAnimation}>
              <Text style={styles.controlButtonText}>重置</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>

      {/* 步骤指示器 */}
      <Animated.View style={[styles.stepIndicator, {opacity: fadeAnim}]}>
        <Text style={styles.stepText}>
          步骤 {currentStep + 1} / {animationSteps.length + 1}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5E20',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
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
  logoEmoji: {
    fontSize: 60,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 8,
    marginBottom: 10,
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '300',
    letterSpacing: 2,
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
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  controlPanel: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  controlButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  manualControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  stepIndicator: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  stepText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});
