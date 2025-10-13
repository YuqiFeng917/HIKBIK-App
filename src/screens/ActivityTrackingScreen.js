import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const ActivityTrackingScreen = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [trackingTime, setTrackingTime] = useState(0);
  const [currentActivity, setCurrentActivity] = useState('hiking');

  const activities = [
    {id: 'hiking', name: 'Hiking', icon: 'directions-walk', color: '#4CAF50'},
    {id: 'cycling', name: 'Cycling', icon: 'directions-bike', color: '#2196F3'},
    {id: 'running', name: 'Running', icon: 'directions-run', color: '#FF9800'},
    {id: 'camping', name: 'Camping', icon: 'home', color: '#9C27B0'},
  ];

  const stats = [
    {label: 'Distance', value: '12.5', unit: 'km'},
    {label: 'Duration', value: '2:30', unit: 'hrs'},
    {label: 'Calories', value: '450', unit: 'cal'},
    {label: 'Steps', value: '8,250', unit: 'steps'},
  ];

  const recentActivities = [
    {
      id: 1,
      name: 'Morning Hike',
      date: '2024-01-15',
      duration: '1:45',
      distance: '8.2 km',
      calories: '320 cal',
      activity: 'hiking',
    },
    {
      id: 2,
      name: 'Weekend Cycling',
      date: '2024-01-13',
      duration: '2:15',
      distance: '25.8 km',
      calories: '680 cal',
      activity: 'cycling',
    },
    {
      id: 3,
      name: 'Evening Run',
      date: '2024-01-12',
      duration: '0:35',
      distance: '5.2 km',
      calories: '280 cal',
      activity: 'running',
    },
  ];

  useEffect(() => {
    let interval;
    if (isTracking) {
      interval = setInterval(() => {
        setTrackingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const ActivityButton = ({activity}) => (
    <TouchableOpacity
      style={[
        styles.activityButton,
        {backgroundColor: activity.color},
        currentActivity === activity.id && styles.selectedActivity
      ]}
      onPress={() => setCurrentActivity(activity.id)}
    >
      <Icon name={activity.icon} size={24} color="white" />
      <Text style={styles.activityButtonText}>{activity.name}</Text>
    </TouchableOpacity>
  );

  const StatCard = ({label, value, unit}) => (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const ActivityCard = ({activity}) => (
    <TouchableOpacity style={styles.activityCard}>
      <View style={styles.activityHeader}>
        <Text style={styles.activityName}>{activity.name}</Text>
        <Text style={styles.activityDate}>{activity.date}</Text>
      </View>
      <View style={styles.activityStats}>
        <View style={styles.activityStat}>
          <Icon name="schedule" size={16} color="#666" />
          <Text style={styles.activityStatText}>{activity.duration}</Text>
        </View>
        <View style={styles.activityStat}>
          <Icon name="straighten" size={16} color="#666" />
          <Text style={styles.activityStatText}>{activity.distance}</Text>
        </View>
        <View style={styles.activityStat}>
          <Icon name="local-fire-department" size={16} color="#666" />
          <Text style={styles.activityStatText}>{activity.calories}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* 当前活动追踪 */}
      <View style={styles.trackingContainer}>
        <Text style={styles.sectionTitle}>Track Activity</Text>
        
        {/* 活动类型选择 */}
        <View style={styles.activitiesGrid}>
          {activities.map(activity => (
            <ActivityButton key={activity.id} activity={activity} />
          ))}
        </View>

        {/* 追踪控制 */}
        <View style={styles.trackingControl}>
          <View style={styles.trackingDisplay}>
            <Text style={styles.trackingTime}>{formatTime(trackingTime)}</Text>
            <Text style={styles.trackingLabel}>Elapsed Time</Text>
          </View>
          
          <TouchableOpacity
            style={[styles.trackingButton, isTracking && styles.stopButton]}
            onPress={() => setIsTracking(!isTracking)}
          >
            <Icon 
              name={isTracking ? 'stop' : 'play-arrow'} 
              size={32} 
              color="white" 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 当前统计 */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Current Stats</Text>
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </View>
      </View>

      {/* 历史活动 */}
      <View style={styles.historyContainer}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        {recentActivities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  trackingContainer: {
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
  activitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activityButton: {
    width: (width - 80) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedActivity: {
    opacity: 0.8,
    transform: [{scale: 0.95}],
  },
  activityButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  trackingControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trackingDisplay: {
    alignItems: 'center',
    flex: 1,
  },
  trackingTime: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  trackingLabel: {
    fontSize: 14,
    color: '#666',
  },
  trackingButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  stopButton: {
    backgroundColor: '#F44336',
  },
  statsContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: (width - 70) / 2,
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginBottom: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 2,
  },
  statUnit: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  historyContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
  },
  activityCard: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activityDate: {
    fontSize: 12,
    color: '#666',
  },
  activityStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityStat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityStatText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
});

export default ActivityTrackingScreen;