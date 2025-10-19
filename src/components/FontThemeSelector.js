import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { FontThemes, FontSizes } from '../config/fonts';

export default function FontThemeSelector({ currentTheme, onThemeChange, visible, onClose }) {
  const themes = [
    {
      id: 'system',
      name: '系统字体',
      description: '使用设备默认字体',
      preview: 'System Font Preview',
      fontFamily: FontThemes.system.regular,
    },
    {
      id: 'montserrat',
      name: 'Montserrat',
      description: 'Spotify风格现代字体',
      preview: 'Montserrat Preview',
      fontFamily: FontThemes.montserrat.regular,
    },
    {
      id: 'merriweather',
      name: 'Merriweather',
      description: '优雅的衬线字体',
      preview: 'Merriweather Preview',
      fontFamily: FontThemes.merriweather.regular,
    },
  ];

  const handleThemeSelect = (themeId) => {
    onThemeChange(FontThemes[themeId]);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>选择字体主题</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.themesList}>
            {themes.map((theme) => (
              <TouchableOpacity
                key={theme.id}
                style={[
                  styles.themeItem,
                  currentTheme === FontThemes[theme.id] && styles.selectedThemeItem
                ]}
                onPress={() => handleThemeSelect(theme.id)}
              >
                <View style={styles.themePreview}>
                  <Text style={[
                    styles.themePreviewText,
                    { fontFamily: theme.fontFamily }
                  ]}>
                    {theme.preview}
                  </Text>
                </View>
                
                <View style={styles.themeInfo}>
                  <Text style={[
                    styles.themeName,
                    currentTheme === FontThemes[theme.id] && styles.selectedThemeName
                  ]}>
                    {theme.name}
                  </Text>
                  <Text style={styles.themeDescription}>
                    {theme.description}
                  </Text>
                </View>
                
                {currentTheme === FontThemes[theme.id] && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: FontSizes.xl,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: FontSizes.lg,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    color: '#666',
    fontWeight: 'bold',
  },
  themesList: {
    maxHeight: 400,
  },
  themeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedThemeItem: {
    backgroundColor: '#E8F5E8',
    borderColor: '#4CAF50',
  },
  themePreview: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginRight: 15,
  },
  themePreviewText: {
    fontSize: FontSizes.sm,
    color: '#333',
    textAlign: 'center',
  },
  themeInfo: {
    flex: 1,
  },
  themeName: {
    fontSize: FontSizes.md,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    color: '#333',
    marginBottom: 4,
  },
  selectedThemeName: {
    color: '#4CAF50',
  },
  themeDescription: {
    fontSize: FontSizes.sm,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    color: '#666',
  },
  checkmark: {
    fontSize: FontSizes.lg,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
