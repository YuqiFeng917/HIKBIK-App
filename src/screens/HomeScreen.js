import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [featuredCampsites, setFeaturedCampsites] = useState([]);

  useEffect(() => {
    // 模拟数据加载
    loadWeatherData();
    loadFeaturedCampsites();
  }, []);

  const loadWeatherData = () => {
    // 这里将集成天气API
    setWeatherData({
      temperature: 22,
      condition: 'Sunny',
      location: 'Current Location',
    });
  };

  const loadFeaturedCampsites = () => {
    // 模拟特色营地数据
    setFeaturedCampsites([
      {
        id: 1,
        name: 'Mountain Peak Camp',
        location: 'Rocky Mountains',
        rating: 4.8,
        price: 45,
        image: 'https://via.placeholder.com/300x200',
      },
      {
        id: 2,
        name: 'Lakeside Retreat',
        location: 'Crystal Lake',
        rating: 4.6,
        price: 35,
        image: 'https://via.placeholder.com/300x200',
      },
      {
        id: 3,
        name: 'Forest Haven',
        location: 'Deep Woods',
        rating: 4.9,
        price: 40,
        image: 'https://via.placeholder.com/300x200',
      },
    ]);
  };

  const QuickActionButton = ({icon, title, onPress, color}) => (
    <TouchableOpacity style={[styles.quickActionButton, {backgroundColor: color}]} onPress={onPress}>
      <Icon name={icon} size={30} color="white" />
      <Text style={styles.quickActionText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* 欢迎区域 */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome to HIKBIK</Text>
        <Text style={styles.subtitleText}>
          Your Ultimate Camping Companion
        </Text>
        {weatherData && (
          <View style={styles.weatherCard}>
            <Icon name="wb-sunny" size={24} color="#FFA726" />
            <Text style={styles.weatherText}>
              {weatherData.temperature}°C - {weatherData.condition}
            </Text>
            <Text style={styles.locationText}>{weatherData.location}</Text>
          </View>
        )}
      </View>

      {/* 快速操作 */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsGrid}>
          <QuickActionButton
            icon="place"
            title="Find Campsites"
            color="#2E7D32"
            onPress={() => navigation.navigate('Campsites')}
          />
          <QuickActionButton
            icon="backpack"
            title="Equipment"
            color="#1976D2"
            onPress={() => navigation.navigate('Equipment')}
          />
          <QuickActionButton
            icon="route"
            title="Plan Route"
            color="#7B1FA2"
            onPress={() => navigation.navigate('RoutePlanning')}
          />
          <QuickActionButton
            icon="fitness-center"
            title="Track Activity"
            color="#D32F2F"
            onPress={() => navigation.navigate('ActivityTracking')}
          />
        </View>
      </View>

      {/* 特色营地 */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Campsites</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredCampsites.map(campsite => (
            <TouchableOpacity key={campsite.id} style={styles.campsiteCard}>
              <Image source={{uri: campsite.image}} style={styles.campsiteImage} />
              <View style={styles.campsiteInfo}>
                <Text style={styles.campsiteName}>{campsite.name}</Text>
                <Text style={styles.campsiteLocation}>{campsite.location}</Text>
                <View style={styles.campsiteRating}>
                  <Icon name="star" size={16} color="#FFA726" />
                  <Text style={styles.ratingText}>{campsite.rating}</Text>
                  <Text style={styles.priceText}>${campsite.price}/night</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcomeSection: {
    backgroundColor: '#2E7D32',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 20,
  },
  weatherCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
    marginLeft: 10,
  },
  quickActionsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    width: (width - 60) / 2,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  quickActionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  featuredSection: {
    padding: 20,
    paddingTop: 0,
  },
  campsiteCard: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  campsiteImage: {
    width: '100%',
    height: 120,
  },
  campsiteInfo: {
    padding: 12,
  },
  campsiteName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  campsiteLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  campsiteRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});

export default HomeScreen;