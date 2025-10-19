import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

// 字体加载组件
export default function FontLoader({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    try {
      console.log('🎵 正在加载Merriweather字体...');
      
      // 加载Merriweather字体
      await Font.loadAsync({
        'Merriweather_24pt-Regular': require('../../assets/fonts/merriweather/static/Merriweather_24pt-Regular.ttf'),
        'Merriweather_24pt-Bold': require('../../assets/fonts/merriweather/static/Merriweather_24pt-Bold.ttf'),
        'Merriweather_24pt-Light': require('../../assets/fonts/merriweather/static/Merriweather_24pt-Light.ttf'),
        'Merriweather_24pt-Italic': require('../../assets/fonts/merriweather/static/Merriweather_24pt-Italic.ttf'),
      });
      
      setFontsLoaded(true);
      console.log('✅ Merriweather字体加载完成！');
    } catch (error) {
      console.log('❌ Merriweather字体加载失败:', error);
      setLoadingError(error.message);
      setFontsLoaded(true); // 即使失败也继续，使用默认字体
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>正在加载Merriweather字体...</Text>
        {loadingError && (
          <Text style={styles.errorText}>加载失败: {loadingError}</Text>
        )}
      </View>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'System',
  },
  errorText: {
    fontSize: 14,
    color: '#FFCDD2',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'System',
  },
});