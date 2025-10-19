import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';

export default function SimpleAnimationEditor({onSave, onPreview}) {
  const [animationConfig, setAnimationConfig] = useState({
    // 基础设置
    totalDuration: 4000,
    autoPlay: true,
    showControls: true,
    
    // 颜色设置
    backgroundColor: '#1B5E20',
    logoColor: '#4CAF50',
    textColor: '#FFFFFF',
    
    // 动画步骤
    steps: [
      { name: '背景淡入', duration: 800, enabled: true },
      { name: '背景颜色变化', duration: 600, enabled: true },
      { name: 'Logo缩放', duration: 1000, enabled: true },
      { name: 'Logo旋转', duration: 1200, enabled: true },
      { name: '文字滑入', duration: 700, enabled: true },
      { name: '进度条填充', duration: 1500, enabled: true },
    ],
  });

  const updateStep = (index, field, value) => {
    const newSteps = [...animationConfig.steps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setAnimationConfig({ ...animationConfig, steps: newSteps });
  };

  const addStep = () => {
    const newStep = {
      name: `新步骤 ${animationConfig.steps.length + 1}`,
      duration: 1000,
      enabled: true,
    };
    setAnimationConfig({
      ...animationConfig,
      steps: [...animationConfig.steps, newStep],
    });
  };

  const removeStep = (index) => {
    const newSteps = animationConfig.steps.filter((_, i) => i !== index);
    setAnimationConfig({ ...animationConfig, steps: newSteps });
  };

  const moveStepUp = (index) => {
    if (index === 0) return;
    const newSteps = [...animationConfig.steps];
    [newSteps[index], newSteps[index - 1]] = [newSteps[index - 1], newSteps[index]];
    setAnimationConfig({ ...animationConfig, steps: newSteps });
  };

  const moveStepDown = (index) => {
    if (index === animationConfig.steps.length - 1) return;
    const newSteps = [...animationConfig.steps];
    [newSteps[index], newSteps[index + 1]] = [newSteps[index + 1], newSteps[index]];
    setAnimationConfig({ ...animationConfig, steps: newSteps });
  };

  const saveConfig = () => {
    onSave(animationConfig);
    Alert.alert('保存成功', '动画配置已保存！');
  };

  const previewAnimation = () => {
    onPreview(animationConfig);
    Alert.alert('预览开始', '正在预览您的动画配置...');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎬 动画编辑器</Text>
      
      {/* 基础设置 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚙️ 基础设置</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>自动播放</Text>
          <Switch
            value={animationConfig.autoPlay}
            onValueChange={(value) => 
              setAnimationConfig({ ...animationConfig, autoPlay: value })
            }
          />
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>显示控制面板</Text>
          <Switch
            value={animationConfig.showControls}
            onValueChange={(value) => 
              setAnimationConfig({ ...animationConfig, showControls: value })
            }
          />
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>总时长 (毫秒)</Text>
          <TextInput
            style={styles.numberInput}
            value={animationConfig.totalDuration.toString()}
            onChangeText={(value) => 
              setAnimationConfig({ 
                ...animationConfig, 
                totalDuration: parseInt(value) || 4000 
              })
            }
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* 颜色设置 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎨 颜色设置</Text>
        
        <View style={styles.colorRow}>
          <Text style={styles.settingLabel}>背景色</Text>
          <View style={styles.colorInputContainer}>
            <View 
              style={[styles.colorPreview, {backgroundColor: animationConfig.backgroundColor}]} 
            />
            <TextInput
              style={styles.colorInput}
              value={animationConfig.backgroundColor}
              onChangeText={(value) => 
                setAnimationConfig({ ...animationConfig, backgroundColor: value })
              }
              placeholder="#1B5E20"
            />
          </View>
        </View>
        
        <View style={styles.colorRow}>
          <Text style={styles.settingLabel}>Logo色</Text>
          <View style={styles.colorInputContainer}>
            <View 
              style={[styles.colorPreview, {backgroundColor: animationConfig.logoColor}]} 
            />
            <TextInput
              style={styles.colorInput}
              value={animationConfig.logoColor}
              onChangeText={(value) => 
                setAnimationConfig({ ...animationConfig, logoColor: value })
              }
              placeholder="#4CAF50"
            />
          </View>
        </View>
        
        <View style={styles.colorRow}>
          <Text style={styles.settingLabel}>文字色</Text>
          <View style={styles.colorInputContainer}>
            <View 
              style={[styles.colorPreview, {backgroundColor: animationConfig.textColor}]} 
            />
            <TextInput
              style={styles.colorInput}
              value={animationConfig.textColor}
              onChangeText={(value) => 
                setAnimationConfig({ ...animationConfig, textColor: value })
              }
              placeholder="#FFFFFF"
            />
          </View>
        </View>
      </View>

      {/* 动画步骤 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🎭 动画步骤</Text>
          <TouchableOpacity style={styles.addButton} onPress={addStep}>
            <Text style={styles.addButtonText}>+ 添加</Text>
          </TouchableOpacity>
        </View>

        {animationConfig.steps.map((step, index) => (
          <View key={index} style={styles.stepCard}>
            <View style={styles.stepHeader}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
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
              <View style={styles.controlRow}>
                <Text style={styles.controlLabel}>时长: </Text>
                <TextInput
                  style={styles.durationInput}
                  value={step.duration.toString()}
                  onChangeText={(value) => updateStep(index, 'duration', parseInt(value) || 0)}
                  keyboardType="numeric"
                  placeholder="1000"
                />
                <Text style={styles.controlLabel}>ms</Text>
              </View>

              <View style={styles.controlRow}>
                <Text style={styles.controlLabel}>启用: </Text>
                <Switch
                  value={step.enabled}
                  onValueChange={(value) => updateStep(index, 'enabled', value)}
                />
              </View>

              <View style={styles.moveButtons}>
                <TouchableOpacity
                  style={[styles.moveButton, index === 0 && styles.moveButtonDisabled]}
                  onPress={() => moveStepUp(index)}
                  disabled={index === 0}
                >
                  <Text style={styles.moveButtonText}>↑</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.moveButton,
                    index === animationConfig.steps.length - 1 && styles.moveButtonDisabled,
                  ]}
                  onPress={() => moveStepDown(index)}
                  disabled={index === animationConfig.steps.length - 1}
                >
                  <Text style={styles.moveButtonText}>↓</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* 操作按钮 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.previewButton} onPress={previewAnimation}>
          <Text style={styles.previewButtonText}>👁️ 预览动画</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.saveButton} onPress={saveConfig}>
          <Text style={styles.saveButtonText}>💾 保存配置</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
  numberInput: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlign: 'center',
    fontSize: 16,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  colorInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  colorInput: {
    width: 120,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
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
    marginBottom: 8,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 8,
  },
  stepNameInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  removeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlLabel: {
    fontSize: 14,
    color: '#666',
  },
  durationInput: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 4,
  },
  moveButtons: {
    flexDirection: 'row',
  },
  moveButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  moveButtonDisabled: {
    backgroundColor: '#ccc',
  },
  moveButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  previewButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  previewButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
