import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

const Main = () => {
  const [value, setValue] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const getInfoUSD = async () => {
    console.log('obteniendo nformacion');
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };
  useEffect(() => {
    getInfoUSD();
  }, []);

  const loading = (
    <View>
      <Text>Loading...</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {isLoading ? (
        loading
      ) : (
        <View>
          <TextInput

            style={styles.input}
            placeholder='Escribe la cantidad en Bss'
            keyboardType='numeric'
          />
          <Button
            title="press"
          />
          <Text>Resultado aqui</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 13,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default Main;
