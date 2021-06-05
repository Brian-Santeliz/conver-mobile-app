import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Desarrollado por Brian Santeliz &copy; {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'green',
    padding: 8
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
});
export default Footer;
