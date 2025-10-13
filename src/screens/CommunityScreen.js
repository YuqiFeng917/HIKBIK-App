import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const CommunityScreen = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const [searchText, setSearchText] = useState('');

  const posts = [
    {
      id: 1,
      user: 'AdventureMike',
      avatar: 'https://via.placeholder.com/40x40/4CAF50/white?text=AM',
      time: '2 hours ago',
      content: 'Just completed an amazing 3-day hike in the Rockies! The views were absolutely breathtaking. Has anyone else been there recently?',
      image: 'https://via.placeholder.com/300x200/4CAF50/white?text=Mountain+View',
      likes: 24,
      comments: 8,
      location: 'Rocky Mountains, CO',
    },
    {
      id: 2,
      user: 'CampingQueen',
      avatar: 'https://via.placeholder.com/40x40/2196F3/white?text=CQ',
      time: '5 hours ago',
      content: 'Looking for camping buddies for next weekend! Planning to visit Crystal Lake. Anyone interested?',
      image: 'https://via.placeholder.com/300x200/2196F3/white?text=Crystal+Lake',
      likes: 12,
      comments: 15,
      location: 'Crystal Lake, CA',
    },
    {
      id: 3,
      user: 'NatureLover',
      avatar: 'https://via.placeholder.com/40x40/8BC34A/white?text=NL',
      time: '1 day ago',
      content: 'Pro tip: Always check the weather before heading out! Got caught in a surprise storm yesterday but had the best gear to handle it.',
      image: 'https://via.placeholder.com/300x200/FF9800/white?text=Storm+Gear',
      likes: 31,
      comments: 12,
      location: 'Deep Woods, WA',
    },
  ];

  const PostCard = ({post}) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{uri: post.avatar}} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.user}</Text>
          <Text style={styles.postTime}>{post.time}</Text>
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Icon name="place" size={16} color="#2E7D32" />
          <Text style={styles.locationText}>{post.location}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.postContent}>{post.content}</Text>
      
      <Image source={{uri: post.image}} style={styles.postImage} />

      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="favorite-border" size={20} color="#666" />
          <Text style={styles.actionText}>{post.likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chat-bubble-outline" size={20} color="#666" />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 搜索栏 */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search community posts..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      {/* 标签栏 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}
          onPress={() => setActiveTab('Posts')}
        >
          <Text style={[styles.tabText, activeTab === 'Posts' && styles.activeTabText]}>
            Posts
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Events' && styles.activeTab]}
          onPress={() => setActiveTab('Events')}
        >
          <Text style={[styles.tabText, activeTab === 'Events' && styles.activeTabText]}>
            Events
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Groups' && styles.activeTab]}
          onPress={() => setActiveTab('Groups')}
        >
          <Text style={[styles.tabText, activeTab === 'Groups' && styles.activeTabText]}>
            Groups
          </Text>
        </TouchableOpacity>
      </View>

      {/* 发布按钮 */}
      <TouchableOpacity style={styles.createPostButton}>
        <Icon name="add" size={24} color="white" />
        <Text style={styles.createPostText}>Create Post</Text>
      </TouchableOpacity>

      {/* 帖子列表 */}
      <ScrollView style={styles.postsContainer} showsVerticalScrollIndicator={false}>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#2E7D32',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
  createPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D32',
    marginHorizontal: 15,
    marginBottom: 15,
    paddingVertical: 12,
    borderRadius: 25,
  },
  createPostText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  locationText: {
    fontSize: 12,
    color: '#2E7D32',
    marginLeft: 4,
  },
  postContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  actionText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
});

export default CommunityScreen;