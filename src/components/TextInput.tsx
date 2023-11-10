import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';

class componentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View>
        <ScrollView
          style={styles.scrollContainer}
          horizontal={true}
          contentContainerStyle={{ margin: 10 }}
          showsHorizontalScrollIndicator={false}>
          <Text style={styles.txt}>新闻</Text>
          <Text style={styles.txt}>娱乐</Text>
          <Text style={styles.txt}>生活</Text>
          <Text style={styles.txt}>运动</Text>
          <Text style={styles.txt}>养生</Text>
          <Text style={styles.txt}>影视</Text>
        </ScrollView>
      </View>
    );
  }
}

export default componentName;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    borderColor: 'red',
    width: Dimensions.get('window').width - 15,
  },
  scrollContainer: {
    backgroundColor: '#ccc',
  },
  txt: {
    fontSize: 30,
    margin: 5,
  },
});
