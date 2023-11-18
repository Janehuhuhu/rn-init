import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const componentName = () => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {},
});
