import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: '首页',
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="ios-book" size={size} color={color} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: '新闻页',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon name="accessibility-outline" size={size} color={color} />
            );
          },
        }}
        name="News"
        component={News}
      />
    </Tab.Navigator>
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
