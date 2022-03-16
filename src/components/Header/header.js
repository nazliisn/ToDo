import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.style';

function Header({counter}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yapılacaklar</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
export default Header;
