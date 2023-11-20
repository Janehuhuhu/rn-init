import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const BASE_URL = 'https://devapi.qweather.com/';
const location = '112.222,39.222';
const key = '687e517f06684448a9f4695721414a07';

const componentName = () => {
  const [city, setCity] = useState('中国');
  const [indices, setIndices] = useState([]);
  const [weather, setWeather] = useState([]);

  const getWeather = async () => {
    const res = await axios.get(
      `${BASE_URL}v7/weather/3d?key=${key}&location=${location}`,
    );
    if (res.data?.daily) {
      setWeather(res.data.daily);
    }
    console.log('sss', res.data.daily);
  };

  const getIndices = async () => {
    const res = await axios.get(
      `${BASE_URL}v7/indices/1d?type=1,2,3,4,5&key=${key}&location=${location}`,
    );
    if (res.data?.daily) {
      setIndices(res.data.daily);
    }
  };

  const getCity = async () => {
    const res = await axios.get(
      `https://geoapi.qweather.com/v2/city/lookup?key=${key}&location=${location}`,
    );
    if (res.data?.location?.length) {
      const data = res.data?.location[0];
      setCity(data.country + data.adm1 + data.adm2);
    }
  };

  const IndicesItem = ({ item, onPress, style }) => {
    return (
      <View
        style={{
          width: 80,
          height: 70,
          borderRadius: 10,
          backgroundColor: 'rgb(222,238,186)',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 5,
        }}>
        <Text>{item.name}</Text>
        <Text style={{ color: 'rgb(115,192,137)', marginTop: 5 }}>
          {item.category}
        </Text>
      </View>
    );
  };

  const weatherItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#ddd', '#333']}
          style={{
            borderRadius: 10,
            height: 80,
            width: '95%',
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{item.fxDate}</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{ fontSize: 16 }}>
              {item.textDay}
              {item.tempMin}°
            </Text>
            <Text style={{ fontSize: 16 }}>
              {item.textNight}
              {item.tempMax}°
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  };

  useEffect(() => {
    getWeather();
    getIndices();
    getCity();
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
      <View style={{ marginVertical: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{city}</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          data={indices}
          keyExtractor={item => item.type}
          renderItem={IndicesItem}
          horizontal={true}
        />
      </ScrollView>
      <View>
        <FlatList
          data={weather}
          keyExtractor={item => item.fxDate}
          renderItem={weatherItem}
        />
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
