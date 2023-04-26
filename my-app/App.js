import React, {useState} from 'react';
import {SafeAreaView, ActivityIndicator, StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => prevCount - 1);

  const buySomeCheese = () => {
    console.log('Cheese purchase')
  }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={increaseCount}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreaseCount}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={buySomeCheese}>
        <Text>Buy Cheee</Text>
      </TouchableOpacity>

      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter text..."
        keyboardType="numeric"
      />
    </SafeAreaView>
    <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;