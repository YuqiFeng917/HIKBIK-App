import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

const MapTest = () => {
  const [location, setLocation] = useState(null);
  const [mapHtml, setMapHtml] = useState('');

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('权限被拒绝，使用默认位置');
        createMapHtml(39.9042, 116.4074); // 北京坐标
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      createMapHtml(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.log('获取位置失败:', error);
      createMapHtml(39.9042, 116.4074); // 使用默认坐标
    }
  };

  const createMapHtml = (lat, lng) => {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body, html { margin: 0; padding: 0; height: 100%; }
          #map { height: 100%; width: 100%; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          function initMap() {
            const map = new google.maps.Map(document.getElementById('map'), {
              zoom: 13,
              center: { lat: ${lat}, lng: ${lng} }
            });
            
            // 添加标记
            new google.maps.Marker({
              position: { lat: ${lat}, lng: ${lng} },
              map: map,
              title: '当前位置'
            });
            
            // 添加营地标记
            const campsites = [
              { lat: ${lat + 0.01}, lng: ${lng + 0.01}, title: 'Mountain Peak Camp' },
              { lat: ${lat - 0.01}, lng: ${lng + 0.01}, title: 'Lakeside Retreat' },
              { lat: ${lat + 0.01}, lng: ${lng - 0.01}, title: 'Forest Haven' },
              { lat: ${lat - 0.01}, lng: ${lng - 0.01}, title: 'Desert Oasis' }
            ];
            
            campsites.forEach(campsite => {
              new google.maps.Marker({
                position: { lat: campsite.lat, lng: campsite.lng },
                map: map,
                title: campsite.title,
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }
              });
            });
          }
        </script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurMVNc7N46NNymnrHrkq-tnJpGFDl7Uc&callback=initMap"></script>
      </body>
      </html>
    `;
    setMapHtml(html);
  };

  return (
    <View style={styles.container}>
      {mapHtml ? (
        <WebView
          style={styles.map}
          source={{ html: mapHtml }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.log('WebView错误:', nativeEvent);
          }}
          onLoadEnd={() => {
            console.log('Google Maps已加载');
          }}
        />
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>正在加载地图...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
});

export default MapTest;
