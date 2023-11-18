import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const News = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>News Screen</Text>
    </View>
  );
};

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const componentName = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{ drawerLabel: '首页' }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
};

export default componentName;

const styles = StyleSheet.create({
  container: {},
});
