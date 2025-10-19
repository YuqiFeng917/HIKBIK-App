import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function SimpleLogoAnimation({onFinish}) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    // 简单的时间控制
    const timer1 = setTimeout(() => {
      setCurrentLogo(1);
    }, 3000);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  const renderLogo = () => {
    if (currentLogo === 0) {
      // 第一个Logo - 几何风格
      return (
        <View style={styles.logoContainer}>
          <Text style={styles.geometricText}>HIKBIK</Text>
          <View style={styles.geometricShapes}>
            <View style={[styles.shape, styles.triangle]} />
            <View style={[styles.shape, styles.circle]} />
            <View style={[styles.shape, styles.square]} />
          </View>
        </View>
      );
    } else {
      // 第二个Logo - 露营风格
      return (
        <View style={styles.logoContainer}>
          <Text style={styles.campingText}>HIKBIK</Text>
          <View style={styles.campingShapes}>
            <Text style={styles.emoji}>⛺</Text>
            <Text style={styles.emoji}>🎒</Text>
            <Text style={styles.emoji}>🌲</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: currentLogo === 0 ? '#FFFFFF' : '#2E7D32'}]}>
      <StatusBar backgroundColor={currentLogo === 0 ? '#FFFFFF' : '#2E7D32'} barStyle={currentLogo === 0 ? 'dark-content' : 'light-content'} />
      
      <Animated.View style={[styles.animationContainer, {opacity: fadeAnim, transform: [{scale: scaleAnim}]}]}>
        {renderLogo()}
      </Animated.View>

      <View style={styles.statusContainer}>
        <Text style={[styles.statusText, {color: currentLogo === 0 ? '#333' : 'white'}]}>
          {currentLogo === 0 ? '几何风格 HIKBIK' : '露营风格 HIKBIK'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 几何风格
  geometricText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 4,
    marginBottom: 30,
  },
  geometricShapes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shape: {
    marginHorizontal: 10,
  },
  triangle: {
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
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4ECDC4',
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: '#FFE66D',
  },

  // 露营风格
  campingText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 4,
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 8,
  },
  campingShapes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 32,
    marginHorizontal: 15,
  },

  // 状态显示
  statusContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },
});

