import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import {purple, orange} from '../utils/colors'

export default class IndividualDeckView extends React.Component {
  render() {
    const {deckItem}  = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> {deckItem.title} </Text>
        <Text style={styles.dataText}> {deckItem.questions.length} Cards </Text>
        <Button color={purple}
          title="Add Card"
          onPress={() => {}}/>
        <Button color={orange}
          title="Start Quiz"
          onPress={() => {}}/>
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
