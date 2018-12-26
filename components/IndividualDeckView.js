import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import {purple, orange} from '../utils/colors'

export default class IndividualDeckView extends React.Component {
  render() {
    debugger;
    const {deckKeyStr}  = this.props.navigation.state.params;
    const {deckValueObj}  = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> {deckValueObj.title} </Text>
        <Text style={styles.dataText}> {deckValueObj.questions.length} Cards </Text>
        <Button color={purple}
          title="Add Card"
          onPress={() => this.props.navigation.navigate('AddCard', { deckKeyStr, deckValueObj })}/>
        <Button color={orange}
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', { deckValueObj })}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 20
  },
})
