import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const userStats = [
    {label: 'Trips', value: '12'},
    {label: 'Campsites', value: '8'},
    {label: 'Equipment', value: '15'},
    {label: 'Friends', value: '24'},
  ];

  const menuItems = [
    {icon: 'edit', title: 'Edit Profile', color: '#2196F3'},
    {icon: 'favorite', title: 'Favorites', color: '#F44336'},
    {icon: 'history', title: 'Trip History', color: '#FF9800'},
    {icon: 'settings', title: 'Settings', color: '#9C27B0'},
    {icon: 'help', title: 'Help & Support', color: '#607D8B'},
    {icon: 'info', title: 'About', color: '#795548'},
  ];

  const StatCard = ({label, value}) => (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const MenuItem = ({icon, title, color, onPress}) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.menuIcon, {backgroundColor: color}]}>
        <Icon name={icon} size={20} color="white" />
      </View>
      <Text style={styles.menuTitle}>{title}</Text>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* 用户信息头部 */}
      <View style={styles.profileHeader}>
        <Image 
          source={{uri: 'https://via.placeholder.com/100x100/4CAF50/white?text=JD'}} 
          style={styles.profileImage} 
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@email.com</Text>
        <Text style={styles.userBio}>Adventure enthusiast & nature lover</Text>
        
        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" size={16} color="#2E7D32" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* 统计数据 */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Your Stats</Text>
        <View style={styles.statsGrid}>
          {userStats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </View>
      </View>

      {/* 设置选项 */}
      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Icon name="notifications" size={24} color="#666" />
            <Text style={styles.settingTitle}>Push Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={notificationsEnabled ? '#2E7D32' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Icon name="location-on" size={24} color="#666" />
            <Text style={styles.settingTitle}>Location Services</Text>
          </View>
          <Switch
            value={locationEnabled}
            onValueChange={setLocationEnabled}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={locationEnabled ? '#2E7D32' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* 菜单选项 */}
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Account</Text>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
            onPress={() => console.log(`${item.title} pressed`)}
          />
        ))}
      </View>

      {/* 登出按钮 */}
      <TouchableOpacity style={styles.logoutButton}>
        <Icon name="logout" size={20} color="#F44336" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  userBio: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 14,
    color: '#2E7D32',
    marginLeft: 6,
    fontWeight: '600',
  },
  statsContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  settingsContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  menuContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 30,
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  logoutText: {
    fontSize: 16,
    color: '#F44336',
    marginLeft: 8,
    fontWeight: '600',
  },
});

export default ProfileScreen;