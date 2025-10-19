import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  if (showAnimation) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🎬 HIKBIK 动画测试</Text>
        <Text style={styles.subtitle}>这是一个简单的动画测试</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setShowAnimation(false)}
        >
          <Text style={styles.buttonText}>点击进入主应用</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 欢迎来到HIKBIK！</Text>
      <Text style={styles.subtitle}>动画测试成功！</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setShowAnimation(true)}
      >
        <Text style={styles.buttonText}>重新播放动画</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


