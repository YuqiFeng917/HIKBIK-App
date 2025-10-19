import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from 'react-native';

export default function AnimationEditor({onSave, initialConfig}) {
  const [config, setConfig] = useState(initialConfig || {
    steps: [
      { name: '背景淡入', duration: 800, enabled: true, easing: 'easeOut' },
      { name: 'Logo缩放', duration: 1000, enabled: true, easing: 'elastic' },
      { name: 'Logo旋转', duration: 1200, enabled: true, easing: 'linear' },
      { name: '文字滑入', duration: 700, enabled: true, easing: 'back' },
      { name: '进度条填充', duration: 1500, enabled: true, easing: 'easeOut' },
    ],
    totalDuration: 5200,
    autoPlay: true,
    showControls: true,
    backgroundColor: '#1B5E20',
    logoColor: '#4CAF50',
    textColor: '#FFFFFF',
  });

  const updateStep = (index, field, value) => {
    const newSteps = [...config.steps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    
    // 重新计算总时长
    const totalDuration = newSteps
      .filter(step => step.enabled)
      .reduce((sum, step) => sum + step.duration, 0);
    
    setConfig({ ...config, steps: newSteps, totalDuration });
  };

  const addStep = () => {
    const newStep = {
      name: `新步骤 ${config.steps.length + 1}`,
      duration: 1000,
      enabled: true,
      easing: 'easeOut',
    };
    setConfig({
      ...config,
      steps: [...config.steps, newStep],
      totalDuration: config.totalDuration + newStep.duration,
    });
  };

  const removeStep = (index) => {
    const newSteps = config.steps.filter((_, i) => i !== index);
    const totalDuration = newSteps
      .filter(step => step.enabled)
      .reduce((sum, step) => sum + step.duration, 0);
    
    setConfig({ ...config, steps: newSteps, totalDuration });
  };

  const moveStep = (index, direction) => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === config.steps.length - 1)
    ) {
      return;
    }

    const newSteps = [...config.steps];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    [newSteps[index], newSteps[targetIndex]] = [newSteps[targetIndex], newSteps[index]];
    
    setConfig({ ...config, steps: newSteps });
  };

  const saveConfig = () => {
    onSave(config);
    Alert.alert('保存成功', '动画配置已保存！');
  };

  const easingOptions = [
    { label: '线性', value: 'linear' },
    { label: '缓出', value: 'easeOut' },
    { label: '缓入', value: 'easeIn' },
    { label: '弹性', value: 'elastic' },
    { label: '反弹', value: 'back' },
    { label: '弹跳', value: 'bounce' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎬 动画编辑器</Text>
      
      {/* 全局设置 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>全局设置</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>自动播放</Text>
          <Switch
            value={config.autoPlay}
            onValueChange={(value) => setConfig({ ...config, autoPlay: value })}
          />
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>显示控制面板</Text>
          <Switch
            value={config.showControls}
            onValueChange={(value) => setConfig({ ...config, showControls: value })}
          />
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>总时长: {config.totalDuration}ms</Text>
        </View>
      </View>

      {/* 颜色设置 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>颜色主题</Text>
        
        <View style={styles.colorRow}>
          <Text style={styles.settingLabel}>背景色</Text>
          <TextInput
            style={[styles.colorInput, {backgroundColor: config.backgroundColor}]}
            value={config.backgroundColor}
            onChangeText={(value) => setConfig({ ...config, backgroundColor: value })}
            placeholder="#1B5E20"
          />
        </View>
        
        <View style={styles.colorRow}>
          <Text style={styles.settingLabel}>Logo色</Text>
          <TextInput
            style={[styles.colorInput, {backgroundColor: config.logoColor}]}
            value={config.logoColor}
            onChangeText={(value) => setConfig({ ...config, logoColor: value })}
            placeholder="#4CAF50"
          />
        </View>
        
        <View style={styles.colorRow}>
          <Text style={styles.settingLabel}>文字色</Text>
          <TextInput
            style={[styles.colorInput, {backgroundColor: config.textColor}]}
            value={config.textColor}
            onChangeText={(value) => setConfig({ ...config, textColor: value })}
            placeholder="#FFFFFF"
          />
        </View>
      </View>

      {/* 动画步骤 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>动画步骤</Text>
          <TouchableOpacity style={styles.addButton} onPress={addStep}>
            <Text style={styles.addButtonText}>+ 添加步骤</Text>
          </TouchableOpacity>
        </View>

        {config.steps.map((step, index) => (
          <View key={index} style={styles.stepCard}>
            <View style={styles.stepHeader}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <TextInput
                style={styles.stepNameInput}
                value={step.name}
                onChangeText={(value) => updateStep(index, 'name', value)}
                placeholder="步骤名称"
              />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeStep(index)}
              >
                <Text style={styles.removeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.stepControls}>
              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>时长 (ms)</Text>
                <TextInput
                  style={styles.numberInput}
                  value={step.duration.toString()}
                  onChangeText={(value) => updateStep(index, 'duration', parseInt(value) || 0)}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>缓动效果</Text>
                <ScrollView horizontal style={styles.easingScroll}>
                  {easingOptions.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.easingOption,
                        step.easing === option.value && styles.easingOptionSelected,
                      ]}
                      onPress={() => updateStep(index, 'easing', option.value)}
                    >
                      <Text
                        style={[
                          styles.easingOptionText,
                          step.easing === option.value && styles.easingOptionTextSelected,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <View style={styles.stepActions}>
                <TouchableOpacity
                  style={[styles.moveButton, index === 0 && styles.moveButtonDisabled]}
                  onPress={() => moveStep(index, 'up')}
                  disabled={index === 0}
                >
                  <Text style={styles.moveButtonText}>↑</Text>
                </TouchableOpacity>
                
                <View style={styles.enableToggle}>
                  <Text style={styles.controlLabel}>启用</Text>
                  <Switch
                    value={step.enabled}
                    onValueChange={(value) => updateStep(index, 'enabled', value)}
                  />
                </View>
                
                <TouchableOpacity
                  style={[
                    styles.moveButton,
                    index === config.steps.length - 1 && styles.moveButtonDisabled,
                  ]}
                  onPress={() => moveStep(index, 'down')}
                  disabled={index === config.steps.length - 1}
                >
                  <Text style={styles.moveButtonText}>↓</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* 保存按钮 */}
      <TouchableOpacity style={styles.saveButton} onPress={saveConfig}>
        <Text style={styles.saveButtonText}>💾 保存配置</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  settingLabel: {
    fontSize: 16,
    color: '#666',
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  colorInput: {
    width: 100,
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  stepNameInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepControls: {
    gap: 12,
  },
  controlGroup: {
    marginBottom: 8,
  },
  controlLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  numberInput: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  easingScroll: {
    flexDirection: 'row',
  },
  easingOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
  },
  easingOptionSelected: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  easingOptionText: {
    fontSize: 12,
    color: '#666',
  },
  easingOptionTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moveButtonDisabled: {
    backgroundColor: '#ccc',
  },
  moveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  enableToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
