import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Storage {
  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    return AsyncStorage.getItem(key)
      .then(res => {
        if (res) {
          return JSON.parse(res);
        }
      })
      .catch(() => null);
  }

  static update(key, oldValue) {
    return AsyncStorage.getItem(key).then(newValue => {
      newValue =
        typeof newValue === 'string'
          ? newValue
          : Object.assign({}, oldValue, newValue);
      AsyncStorage.setItem(key, JSON.stringify(newValue))
    })
  }

  static remove(key) {
    return AsyncStorage.removeItem(key);
  }

  static clear() {
    return AsyncStorage.clear();
  }
}
