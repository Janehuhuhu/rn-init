import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const componentName = () => {
  useEffect(() => {
    console.log('sss');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            height: 80,
            backgroundColor: '#00b38a',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.cardItem}>
            <Icon name={'scan-outline'} size={40} color={'white'} />
            <Text style={{ color: 'white' }}>扫一扫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Icon name={'qr-code-outline'} size={40} color={'white'} />
            <Text style={{ color: 'white' }}>付款码</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Icon name={'trail-sign-outline'} size={40} color={'white'} />
            <Text style={{ color: 'white' }}>出行</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardItem}>
            <Icon name={'card-outline'} size={40} color={'white'} />
            <Text style={{ color: 'white' }}>卡包</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          height: 180,
          backgroundColor: '#ccc',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Swiper
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../imgs/1.png')}
              style={{ resizeMode: 'contain', height: 180 }}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../imgs/2.png')}
              style={{ resizeMode: 'contain', height: 180 }}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {},
  cardItem: {
    width: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
