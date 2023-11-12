import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Storage from './storage';

const componentName = () => {
  const save = () => {
    Storage.set('test', '我是测试');
  };

  const get = async () => {
    const v = await Storage.get('test');
    Alert.alert(v);
  };

  return (
    <View style={styles.container}>
      <Text>componentName12</Text>
      <Button title={'存储'} onPress={save} />
      <View style={{ marginVertical: 10 }}></View>
      <Button title={'获取'} onPress={get} />
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
