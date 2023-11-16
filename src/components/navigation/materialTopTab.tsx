import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const News = () => {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
};

const componentName = () => {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarItemStyle: { width: 200 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
      <Tab.Screen
        options={{ tabBarLabel: '首页' }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarLabel: '新闻页' }}
        name="News"
        component={News}
      />
    </Tab.Navigator>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
