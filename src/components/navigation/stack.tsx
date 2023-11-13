import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="跳转到News页"
        onPress={() => navigation.navigate('News')}
      />
    </View>
  );
};

const News = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
      <Button
        title="跳转到Home页"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const componentName = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen
        options={{
          title: '首页',
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: '新闻页',
        }}
        name="News"
        component={News}
      />
    </Stack.Navigator>
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
