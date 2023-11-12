import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const componentName = () => {
  return (
    <View style={styles.container}>
      {/* <WebView source={{ html: '<h1>Hello world</h1>' }} /> */}
      <WebView source={{ uri: 'https://m.baidu.com/' }} />
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
