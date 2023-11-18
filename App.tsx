/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import Home from './src/components/Home'
// import Index from './src/components/TextInput';
// import Index from './src/components/Animated';
// import Index from './src/components/webview';
// import Index from './src/components/picker';
// import Index from './src/components/swiper';
// import Index from './src/components/asyncStorage';
// import Index from './src/components/geolocation';
// import Index from './src/components/camera';
// import Index from './src/components/navigation/stack';
// import Index from './src/components/navigation/drawer';
// import Index from './src/components/navigation/bottomTab';
// import Index from './src/components/navigation/materialTopTab';
import Index from './src/components/demo/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}

export default App;
