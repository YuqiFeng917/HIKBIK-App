import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

// 导入各个功能模块
import HomeScreen from './screens/HomeScreen';
import CampsiteScreen from './screens/CampsiteScreen';
import EquipmentScreen from './screens/EquipmentScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import RoutePlanningScreen from './screens/RoutePlanningScreen';
import ActivityTrackingScreen from './screens/ActivityTrackingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 主标签导航
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

// 主应用导航
export default function App() {
  return (
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
  );
}
