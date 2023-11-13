import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const componentName = () => {
  const getLocation = () => {
    console.log('sss13344');
    Geolocation.getCurrentPosition(
      info => {
        console.log('进来了');
        console.log('ggg', info);
      },
      err => {
        console.log('err', JSON.stringify(err));
      },
      { timeout: 50000, enableHighAccuracy: false },
    );
  };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>componentName</Text>
      <Button title="获取位置" onPress={getLocation} />
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
