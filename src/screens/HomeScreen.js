import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  Platform,
} from 'react-native';
import { CurrentFont, FontSizes } from '../config/fonts';
import FontTest from '../components/FontTest';

export default function HomeScreen({navigation}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showFontTest, setShowFontTest] = useState(false); // 关闭字体测试

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Navigate to campsites screen with category filter
    navigation.navigate('Campsites', {category: category});
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryModal(false);
  };

  // Countries data
  const countries = [
    { id: 'us', name: 'United States', flag: '🇺🇸' },
    { id: 'ca', name: 'Canada', flag: '🇨🇦' },
  ];

  // Attraction types data
  const categories = [
    { id: 'national-parks', name: 'National Parks', icon: '🏞️', color: '#4CAF50' },
    { id: 'national-forests', name: 'National Forests', icon: '🌲', color: '#2E7D32' },
    { id: 'national-grasslands', name: 'National Grasslands', icon: '🌾', color: '#8BC34A' },
    { id: 'national-recreation', name: 'National Recreation Areas', icon: '🏖️', color: '#2196F3' },
    { id: 'blm-lands', name: 'Bureau of Land Management Lands', icon: '🏔️', color: '#FF9800' },
    { id: 'state-parks', name: 'State Parks', icon: '🌳', color: '#4CAF50' },
    { id: 'state-forests', name: 'State Forests', icon: '🌲', color: '#2E7D32' },
    { id: 'wildlife-areas', name: 'Wildlife Management Areas', icon: '🦌', color: '#795548' },
  ];

  if (showFontTest) {
    return <FontTest />;
  }

  if (selectedCategory) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.backButtonText}>← Back to Categories</Text>
        </TouchableOpacity>

        <View style={styles.categoryDetailHeader}>
          <Text style={styles.categoryDetailIcon}>{selectedCategory.icon}</Text>
          <Text style={styles.categoryDetailName}>{selectedCategory.name}</Text>
        </View>

        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>
            🚧 Coming Soon...
          </Text>
          <Text style={styles.placeholderSubtext}>
            Detailed information and location lists for {selectedCategory.name} will be displayed here
          </Text>
          <Text style={styles.placeholderSubtext}>
            Specific state and location details will be provided later
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome section moved to top */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>🎉 Welcome to HIKBIK!</Text>
        <Text style={styles.welcomeSubtitle}>Choose the type of attractions you want to explore</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        {/* Title bar moved below welcome */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>GO HIKING BIKING CAMPING IN</Text>
          <TouchableOpacity onPress={() => setShowCountryModal(true)}>
            <Text style={styles.headerCountry}>{selectedCountry}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, {borderLeftColor: category.color}]}
              onPress={() => handleCategorySelect(category)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryDescription}>
                  Explore {category.name} in the United States
                </Text>
              </View>
              <Text style={styles.arrowIcon}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quickActionsContainer}>
          <Text style={styles.quickActionsTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity 
              style={[styles.quickActionButton, {backgroundColor: '#4CAF50'}]}
              onPress={() => navigation.navigate('Campsites')}
            >
              <Text style={styles.quickActionIcon}>🏕️</Text>
              <Text style={styles.quickActionText}>Find Campsites</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionButton, {backgroundColor: '#2196F3'}]}
              onPress={() => navigation.navigate('Equipment')}
            >
              <Text style={styles.quickActionIcon}>🎒</Text>
              <Text style={styles.quickActionText}>Equipment</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionButton, {backgroundColor: '#9C27B0'}]}
              onPress={() => navigation.navigate('RoutePlanning')}
            >
              <Text style={styles.quickActionIcon}>🗺️</Text>
              <Text style={styles.quickActionText}>Plan Route</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.quickActionButton, {backgroundColor: '#FF5722'}]}
              onPress={() => navigation.navigate('ActivityTracking')}
            >
              <Text style={styles.quickActionIcon}>🏃</Text>
              <Text style={styles.quickActionText}>Track Activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Country Selection Modal */}
      <Modal
        visible={showCountryModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCountryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity 
                onPress={() => setShowCountryModal(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.countriesList}>
              {countries.map((country) => (
                <TouchableOpacity
                  key={country.id}
                  style={[
                    styles.countryItem,
                    selectedCountry === country.name && styles.selectedCountryItem
                  ]}
                  onPress={() => handleCountrySelect(country.name)}
                >
                  <Text style={styles.countryFlag}>{country.flag}</Text>
                  <Text style={[
                    styles.countryName,
                    selectedCountry === country.name && styles.selectedCountryName
                  ]}>
                    {country.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  // Title bar (now in scrollable content)
  headerContainer: {
    backgroundColor: '#2E7D32',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 12,
  },
  headerTitle: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.bold,
    fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: Platform.OS === 'ios' ? -0.1 : 0.3, // 现代商业风格字间距
    textTransform: 'uppercase', // 达美航空风格：标题使用大写
  },
  headerCountry: {
    fontSize: FontSizes.md,
    fontFamily: CurrentFont.bold,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: Platform.OS === 'ios' ? -0.1 : 0.3, // Apple风格使用负字间距
  },

  // Content container
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  // Welcome area (now at top)
  welcomeContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#4CAF50',
    paddingTop: 50,
  },
  welcomeTitle: {
    fontSize: FontSizes.xxl,
    fontFamily: CurrentFont.bold,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    color: 'white',
    marginBottom: 10,
    letterSpacing: Platform.OS === 'ios' ? -0.2 : 0.1, // 现代商业风格字间距
    textTransform: 'uppercase', // 达美航空风格：标题使用大写
  },
  welcomeSubtitle: {
    fontSize: FontSizes.md,
    fontFamily: CurrentFont.regular,
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    letterSpacing: Platform.OS === 'ios' ? -0.05 : 0.05, // 现代商业风格字间距
    lineHeight: 20, // 达美航空风格：增加行高提升可读性
  },

  // Category cards
  categoriesContainer: {
    marginBottom: 30,
  },
  categoryCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: FontSizes.lg,
    fontFamily: CurrentFont.bold,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: '#333',
    marginBottom: 4,
    letterSpacing: Platform.OS === 'ios' ? -0.05 : 0.1, // 现代商业风格字间距
    textTransform: 'uppercase', // 达美航空风格：分类名称使用大写
  },
  categoryDescription: {
    fontSize: FontSizes.sm,
    fontFamily: CurrentFont.regular,
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    color: '#666',
    letterSpacing: Platform.OS === 'ios' ? -0.05 : 0.1, // Apple风格使用负字间距
  },
  arrowIcon: {
    fontSize: 20,
    color: '#999',
    marginLeft: 10,
  },

  // Quick actions
  quickActionsContainer: {
    marginBottom: 30,
  },
  quickActionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Category detail page
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 20, // Add top margin to avoid status bar overlap
  },
  backButtonText: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '500',
  },
  categoryDetailHeader: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  categoryDetailIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  categoryDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  placeholderSubtext: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },

  // Modal styles
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold',
  },
  countriesList: {
    maxHeight: 400,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  selectedCountryItem: {
    backgroundColor: '#E8F5E8',
  },
  countryFlag: {
    fontSize: 24,
    marginRight: 15,
  },
  countryName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  selectedCountryName: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
});