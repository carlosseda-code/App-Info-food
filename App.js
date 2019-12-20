import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';  
import cards from './data';
import Constants from 'expo-constants';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FOODADVISOR.MX</Text>
      <CardSet items={cards}></CardSet>
    </View> 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10ac84',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  text: {
    marginTop: 10, 
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  } 
});
