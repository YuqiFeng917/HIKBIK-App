import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import all functional modules
import HomeScreen from './src/screens/HomeScreen';
import EquipmentScreen from './src/screens/EquipmentScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RoutePlanningScreen from './src/screens/RoutePlanningScreen';
import ActivityTrackingScreen from './src/screens/ActivityTrackingScreen';
import FontLoader from './src/components/FontLoader';

// Web兼容性：条件导入CampsiteScreen
let CampsiteScreen;
if (Platform.OS !== 'web') {
  CampsiteScreen = require('./src/screens/CampsiteScreen').default;
} else {
  // Web版本使用简化的营地屏幕
  CampsiteScreen = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5'}}>
      <Text style={{fontSize: 24, color: '#2E7D32', textAlign: 'center'}}>
        🏕️ 营地功能
      </Text>
      <Text style={{fontSize: 16, color: '#666', textAlign: 'center', marginTop: 10}}>
        地图功能暂时不可用
      </Text>
      <Text style={{fontSize: 14, color: '#999', textAlign: 'center', marginTop: 20}}>
        请在移动设备上查看完整功能
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main tab navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Campsites':
              iconName = 'place';
              break;
            case 'Equipment':
              iconName = 'backpack';
              break;
            case 'Community':
              iconName = 'people';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Campsites" component={CampsiteScreen} />
      <Tab.Screen name="Equipment" component={EquipmentScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main app navigator
export default function App() {
  return (
    <FontLoader>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MainTabs" 
            component={MainTabNavigator} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="RoutePlanning" 
            component={RoutePlanningScreen}
            options={{title: 'Route Planning'}}
          />
          <Stack.Screen 
            name="ActivityTracking" 
            component={ActivityTrackingScreen}
            options={{title: 'Activity Tracking'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontLoader>
  );
}