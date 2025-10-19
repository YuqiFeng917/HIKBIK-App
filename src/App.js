import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>🚀 HIKBIK 新版本测试 🚀</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>GO HIKING BIKING CAMPING</Text>
        <Text style={styles.subtitle}>in United States</Text>
        
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>✅ 应用已成功更新</Text>
          <Text style={styles.statusText}>📱 新界面已加载</Text>
          <Text style={styles.statusText}>🎯 8个景点类型已准备就绪</Text>
        </View>

        <View style={styles.attractionsBox}>
          <Text style={styles.attractionsTitle}>🏞️ 景点类型：</Text>
          <Text style={styles.attractionItem}>1. 国家公园</Text>
          <Text style={styles.attractionItem}>2. 国家森林</Text>
          <Text style={styles.attractionItem}>3. 国家草原</Text>
          <Text style={styles.attractionItem}>4. 国家休闲区</Text>
          <Text style={styles.attractionItem}>5. 土地管理局土地</Text>
          <Text style={styles.attractionItem}>6. 州立公园</Text>
          <Text style={styles.attractionItem}>7. 州立森林</Text>
          <Text style={styles.attractionItem}>8. 野生动物管理区</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>如果您看到这个界面，说明更新成功！</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E8',
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 30,
  },
  statusBox: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  attractionsBox: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  attractionsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  attractionItem: {
    color: 'white',
    fontSize: 14,
    marginBottom: 3,
    paddingLeft: 10,
  },
  footer: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});