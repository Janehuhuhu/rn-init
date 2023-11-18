import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const componentName = () => {
  useEffect(() => {
    console.log('sss');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
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
