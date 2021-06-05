import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Navbar = (props) => {
  return (
    <View>
      <Text style={styles.container}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Navbar;
