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

const EquipmentScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const categories = ['All', 'Tents', 'Sleeping', 'Cooking', 'Lighting', 'Safety'];

  const equipment = [
    {
      id: 1,
      name: '4-Person Dome Tent',
      category: 'Tents',
      price: 89.99,
      rating: 4.5,
      image: 'https://via.placeholder.com/200x150/4CAF50/white?text=4-Person+Tent',
      inStock: true,
    },
    {
      id: 2,
      name: 'Sleeping Bag -20°C',
      category: 'Sleeping',
      price: 65.99,
      rating: 4.7,
      image: 'https://via.placeholder.com/200x150/2196F3/white?text=Sleeping+Bag',
      inStock: true,
    },
    {
      id: 3,
      name: 'Portable Camping Stove',
      category: 'Cooking',
      price: 45.99,
      rating: 4.3,
      image: 'https://via.placeholder.com/200x150/FF9800/white?text=Camp+Stove',
      inStock: false,
    },
    {
      id: 4,
      name: 'LED Headlamp',
      category: 'Lighting',
      price: 25.99,
      rating: 4.6,
      image: 'https://via.placeholder.com/200x150/9C27B0/white?text=Headlamp',
      inStock: true,
    },
    {
      id: 5,
      name: 'First Aid Kit',
      category: 'Safety',
      price: 35.99,
      rating: 4.8,
      image: 'https://via.placeholder.com/200x150/F44336/white?text=First+Aid',
      inStock: true,
    },
    {
      id: 6,
      name: 'Inflatable Sleeping Pad',
      category: 'Sleeping',
      price: 55.99,
      rating: 4.4,
      image: 'https://via.placeholder.com/200x150/00BCD4/white?text=Sleep+Pad',
      inStock: true,
    },
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const EquipmentCard = ({item}) => (
    <TouchableOpacity style={styles.equipmentCard}>
      <Image source={{uri: item.image}} style={styles.equipmentImage} />
      <View style={styles.equipmentInfo}>
        <Text style={styles.equipmentName}>{item.name}</Text>
        <Text style={styles.equipmentCategory}>{item.category}</Text>
        
        <View style={styles.ratingContainer}>
          <Icon name="star" size={14} color="#FFA726" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${item.price}</Text>
          <View style={[styles.stockBadge, {backgroundColor: item.inStock ? '#4CAF50' : '#F44336'}]}>
            <Text style={styles.stockText}>{item.inStock ? 'In Stock' : 'Out of Stock'}</Text>
          </View>
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
          placeholder="Search equipment..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      {/* 分类筛选 */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 设备网格 */}
      <ScrollView style={styles.equipmentGrid} showsVerticalScrollIndicator={false}>
        <Text style={styles.resultsText}>
          {filteredEquipment.length} items found
        </Text>
        
        <View style={styles.gridContainer}>
          {filteredEquipment.map(item => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </View>
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
  categoriesContainer: {
    maxHeight: 50,
  },
  categoriesContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedCategoryButton: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: 'white',
    fontWeight: '600',
  },
  equipmentGrid: {
    flex: 1,
    paddingHorizontal: 15,
  },
  resultsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  equipmentCard: {
    width: (width - 45) / 2,
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
  equipmentImage: {
    width: '100%',
    height: 120,
  },
  equipmentInfo: {
    padding: 12,
  },
  equipmentName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  equipmentCategory: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  stockBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  stockText: {
    fontSize: 10,
    color: 'white',
    fontWeight: '600',
  },
});

export default EquipmentScreen;