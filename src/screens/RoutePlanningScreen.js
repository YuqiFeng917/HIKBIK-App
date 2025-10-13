import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const RoutePlanningScreen = ({navigation}) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [selectedMode, setSelectedMode] = useState('driving');

  const routeModes = [
    {id: 'driving', name: 'Driving', icon: 'directions-car'},
    {id: 'walking', name: 'Walking', icon: 'directions-walk'},
    {id: 'cycling', name: 'Cycling', icon: 'directions-bike'},
  ];

  const recentRoutes = [
    {
      id: 1,
      name: 'Home to Mountain Peak',
      distance: '45.2 km',
      duration: '1h 20m',
      mode: 'driving',
    },
    {
      id: 2,
      name: 'City Center to Lake',
      distance: '12.8 km',
      duration: '2h 30m',
      mode: 'cycling',
    },
    {
      id: 3,
      name: 'Park to Forest Trail',
      distance: '3.2 km',
      duration: '45m',
      mode: 'walking',
    },
  ];

  const ModeButton = ({mode}) => (
    <TouchableOpacity
      style={[
        styles.modeButton,
        selectedMode === mode.id && styles.selectedModeButton
      ]}
      onPress={() => setSelectedMode(mode.id)}
    >
      <Icon 
        name={mode.icon} 
        size={24} 
        color={selectedMode === mode.id ? 'white' : '#666'} 
      />
      <Text style={[
        styles.modeText,
        selectedMode === mode.id && styles.selectedModeText
      ]}>
        {mode.name}
      </Text>
    </TouchableOpacity>
  );

  const RouteCard = ({route}) => (
    <TouchableOpacity style={styles.routeCard}>
      <View style={styles.routeInfo}>
        <Text style={styles.routeName}>{route.name}</Text>
        <View style={styles.routeDetails}>
          <Icon name="straighten" size={16} color="#666" />
          <Text style={styles.routeDetailText}>{route.distance}</Text>
          <Icon name="schedule" size={16} color="#666" style={styles.routeIcon} />
          <Text style={styles.routeDetailText}>{route.duration}</Text>
        </View>
      </View>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* 路线规划表单 */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Plan Your Route</Text>
        
        <View style={styles.inputContainer}>
          <Icon name="my-location" size={24} color="#2E7D32" />
          <TextInput
            style={styles.textInput}
            placeholder="Starting point"
            value={startLocation}
            onChangeText={setStartLocation}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="place" size={24} color="#F44336" />
          <TextInput
            style={styles.textInput}
            placeholder="Destination"
            value={endLocation}
            onChangeText={setEndLocation}
            placeholderTextColor="#999"
          />
        </View>

        {/* 交通方式选择 */}
        <View style={styles.modesContainer}>
          <Text style={styles.modesTitle}>Travel Mode</Text>
          <View style={styles.modesGrid}>
            {routeModes.map(mode => (
              <ModeButton key={mode.id} mode={mode} />
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.planButton}>
          <Icon name="directions" size={24} color="white" />
          <Text style={styles.planButtonText}>Plan Route</Text>
        </TouchableOpacity>
      </View>

      {/* 最近路线 */}
      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Recent Routes</Text>
        {recentRoutes.map(route => (
          <RouteCard key={route.id} route={route} />
        ))}
      </View>

      {/* 地图占位符 */}
      <View style={styles.mapPlaceholder}>
        <Icon name="map" size={48} color="#666" />
        <Text style={styles.mapPlaceholderText}>Map View</Text>
        <Text style={styles.mapPlaceholderSubtext}>
          Interactive map will be displayed here
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  modesContainer: {
    marginBottom: 20,
  },
  modesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  modesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedModeButton: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  modeText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
    fontWeight: '500',
  },
  selectedModeText: {
    color: 'white',
    fontWeight: '600',
  },
  planButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    borderRadius: 8,
  },
  planButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  recentContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
  },
  routeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  routeInfo: {
    flex: 1,
  },
  routeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  routeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeDetailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    marginRight: 15,
  },
  routeIcon: {
    marginLeft: 15,
  },
  mapPlaceholder: {
    backgroundColor: 'white',
    margin: 15,
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
  },
  mapPlaceholderSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default RoutePlanningScreen;