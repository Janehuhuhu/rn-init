import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const componentName = () => {
  const moveAnimate = useRef(new Animated.Value(0)).current;
  const scan = () => {
    moveAnimate.setValue(0);
    Animated.timing(moveAnimate, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      scan();
    });
  };

  useEffect(() => {
    scan();
  });

  return (
    <View style={styles.container}>
      <Text>componentName</Text>
      <View style={styles.box}>
        <Animated.View
          style={[styles.border, { transform: [{ translateY: moveAnimate }] }]}
        />
      </View>
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
  box: {
    height: 200,
    width: 200,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  border: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
