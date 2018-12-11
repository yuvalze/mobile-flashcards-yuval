import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { purple } from './utils/colors'
import { Constants } from 'expo'
import DeckList from './components/DeckList'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <Text>Start up for Mobile Flashcard!!</Text>
        <DeckList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
