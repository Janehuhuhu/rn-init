import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const componentName = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        options={{
          title: '首页',
          tabBarIcon: ({ focused, color, size }) => {
            const name = focused ? 'add-circle' : 'add-circle-outline';
            return <Icon name={name} size={size} color={color} />;
          },
          headerRight: () => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>拍照</Text>
              </TouchableOpacity>
            );
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#00b38a',
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => {
            const name = focused ? 'settings' : 'settings-outline';
            return <Icon name={name} size={size} color={color} />;
          },
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default componentName;
