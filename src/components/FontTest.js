import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CurrentFont, FontSizes } from '../config/fonts';

export default function FontTest() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>字体测试</Text>
      <Text style={styles.systemFont}>系统字体: System</Text>
      <Text style={styles.customFont}>自定义字体: {CurrentFont.regular}</Text>
      <Text style={styles.boldFont}>粗体字体: {CurrentFont.bold}</Text>
      <Text style={styles.lightFont}>细体字体: {CurrentFont.light}</Text>
      <Text style={styles.mediumFont}>中等字体: {CurrentFont.medium}</Text>
      
      <View style={styles.comparison}>
        <Text style={styles.comparisonTitle}>字体对比:</Text>
        <Text style={styles.defaultText}>默认字体 (无fontFamily)</Text>
        <Text style={styles.customText}>自定义字体 (Merriweather)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSizes.xxl,
    fontFamily: CurrentFont.bold,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  systemFont: {
    fontSize: FontSizes.lg,
    fontFamily: 'System',
    color: '#666',
    marginBottom: 15,
  },
  customFont: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.regular,
    color: '#333',
    marginBottom: 15,
  },
  boldFont: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.bold,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  lightFont: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.light,
    fontWeight: '300',
    color: '#333',
    marginBottom: 15,
  },
  mediumFont: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.medium,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  comparison: {
    marginTop: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  comparisonTitle: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.bold,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  defaultText: {
    fontSize: FontSizes.md,
    color: '#666',
    marginBottom: 10,
  },
  customText: {
    fontSize: FontSizes.md,
    fontFamily: CurrentFont.regular,
    color: '#333',
    marginBottom: 10,
  },
});