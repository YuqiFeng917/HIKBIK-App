import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleMap from '../components/SimpleMap';

const {width} = Dimensions.get('window');

const CampsiteScreen = () => {
  const [campsites, setCampsites] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    loadCampsites();
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      console.log('Error getting location:', error);
    }
  };

  const loadCampsites = () => {
    // 模拟营地数据（包含坐标）
    const mockCampsites = [
      {
        id: 1,
        name: 'Mountain Peak Camp',
        location: 'Rocky Mountains, CO',
        rating: 4.8,
        price: 45,
        image: 'https://via.placeholder.com/300x200/4CAF50/white?text=Mountain+Peak',
        amenities: ['Water', 'Electricity', 'WiFi', 'Restrooms'],
        distance: '12.5 miles',
        coordinate: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
      {
        id: 2,
        name: 'Lakeside Retreat',
        location: 'Crystal Lake, CA',
        rating: 4.6,
        price: 35,
        image: 'https://via.placeholder.com/300x200/2196F3/white?text=Lakeside+Retreat',
        amenities: ['Water', 'Restrooms', 'Fire Pit'],
        distance: '8.2 miles',
        coordinate: {
          latitude: 37.77825,
          longitude: -122.4424,
        },
      },
      {
        id: 3,
        name: 'Forest Haven',
        location: 'Deep Woods, WA',
        rating: 4.9,
        price: 40,
        image: 'https://via.placeholder.com/300x200/8BC34A/white?text=Forest+Haven',
        amenities: ['Water', 'Electricity', 'Restrooms', 'Shower'],
        distance: '15.3 miles',
        coordinate: {
          latitude: 37.76825,
          longitude: -122.4524,
        },
      },
      {
        id: 4,
        name: 'Desert Oasis',
        location: 'Mojave Desert, NV',
        rating: 4.4,
        price: 30,
        image: 'https://via.placeholder.com/300x200/FF9800/white?text=Desert+Oasis',
        amenities: ['Water', 'Restrooms'],
        distance: '22.1 miles',
        coordinate: {
          latitude: 37.75825,
          longitude: -122.4624,
        },
      },
    ];
    setCampsites(mockCampsites);
  };

  const filteredCampsites = campsites.filter(campsite =>
    campsite.name.toLowerCase().includes(searchText.toLowerCase()) ||
    campsite.location.toLowerCase().includes(searchText.toLowerCase())
  );

  const CampsiteCard = ({campsite}) => (
    <TouchableOpacity style={styles.campsiteCard}>
      <Image source={{uri: campsite.image}} style={styles.campsiteImage} />
      <View style={styles.campsiteInfo}>
        <Text style={styles.campsiteName}>{campsite.name}</Text>
        <Text style={styles.campsiteLocation}>{campsite.location}</Text>
        <Text style={styles.campsiteDistance}>{campsite.distance}</Text>
        
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFA726" />
          <Text style={styles.ratingText}>{campsite.rating}</Text>
          <Text style={styles.priceText}>${campsite.price}/night</Text>
        </View>

        <View style={styles.amenitiesContainer}>
          {campsite.amenities.slice(0, 3).map((amenity, index) => (
            <View key={index} style={styles.amenityTag}>
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          ))}
          {campsite.amenities.length > 3 && (
            <Text style={styles.moreAmenities}>+{campsite.amenities.length - 3} more</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 搜索栏 */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search campsites..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="tune" size={24} color="#2E7D32" />
        </TouchableOpacity>
      </View>

      {/* 地图视图 */}
      <View style={styles.mapContainer}>
        <SimpleMap />
      </View>

      {/* 营地列表 */}
      <ScrollView style={styles.campsitesList} showsVerticalScrollIndicator={false}>
        <Text style={styles.resultsText}>
          {filteredCampsites.length} campsites found
        </Text>
        
        {filteredCampsites.map(campsite => (
          <CampsiteCard key={campsite.id} campsite={campsite} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mapContainer: {
    height: 250,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    padding: 5,
  },
  campsitesList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  resultsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontWeight: '500',
  },
  campsiteCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  campsiteImage: {
    width: '100%',
    height: 150,
  },
  campsiteInfo: {
    padding: 15,
  },
  campsiteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  campsiteLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  campsiteDistance: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
    marginRight: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  amenityTag: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  amenityText: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '500',
  },
  moreAmenities: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default CampsiteScreen;