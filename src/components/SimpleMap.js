import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const SimpleMap = () => {
  const [mapHtml, setMapHtml] = useState('');

  useEffect(() => {
    createSimpleMap();
  }, []);

  const createSimpleMap = () => {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HIKBIK Maps</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body, html { height: 100%; width: 100%; font-family: Arial, sans-serif; }
          #map { height: 100%; width: 100%; }
          .loading { 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            z-index: 1000;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <div id="loading" class="loading">正在加载Google Maps...</div>
        
        <script>
          console.log('开始加载Google Maps...');
          
          function initMap() {
            console.log('Google Maps API已加载');
            document.getElementById('loading').style.display = 'none';
            
            // 北京坐标
            const beijing = { lat: 39.9042, lng: 116.4074 };
            
            const map = new google.maps.Map(document.getElementById('map'), {
              zoom: 12,
              center: beijing,
              mapTypeId: 'roadmap'
            });
            
            console.log('地图已初始化');
            
            // 添加用户位置标记
            new google.maps.Marker({
              position: beijing,
              map: map,
              title: '当前位置',
              icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
              }
            });
            
            // 添加营地标记
            const campsites = [
              { lat: 39.9142, lng: 116.4174, title: 'Mountain Peak Camp', price: '$45' },
              { lat: 39.8942, lng: 116.3974, title: 'Lakeside Retreat', price: '$35' },
              { lat: 39.9242, lng: 116.4274, title: 'Forest Haven', price: '$40' },
              { lat: 39.8842, lng: 116.3874, title: 'Desert Oasis', price: '$30' }
            ];
            
            campsites.forEach((campsite, index) => {
              const marker = new google.maps.Marker({
                position: { lat: campsite.lat, lng: campsite.lng },
                map: map,
                title: campsite.title,
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }
              });
              
              const infoWindow = new google.maps.InfoWindow({
                content: '<div style="padding: 10px;"><h3>' + campsite.title + '</h3><p>价格: ' + campsite.price + '/晚</p></div>'
              });
              
              marker.addListener('click', function() {
                infoWindow.open(map, marker);
              });
            });
            
            console.log('所有标记已添加');
          }
          
          function handleError(error) {
            console.error('Google Maps加载错误:', error);
            document.getElementById('loading').innerHTML = '地图加载失败，请检查网络连接';
          }
          
          // 加载Google Maps API
          const script = document.createElement('script');
          script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDI33J64VFPhSque-J6jsSpK6440QBSeTs&callback=initMap&v=3.56';
          script.async = true;
          script.defer = true;
          script.onerror = handleError;
          document.head.appendChild(script);
        </script>
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
          cacheEnabled={false}
          incognito={true}
          onLoadEnd={() => {
            console.log('WebView已加载完成');
          }}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.log('WebView错误:', nativeEvent);
          }}
        />
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>正在准备地图...</Text>
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

export default SimpleMap;
