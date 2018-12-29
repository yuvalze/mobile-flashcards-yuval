import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { connect } from 'react-redux'
import { purple, orange } from '../utils/colors'

class IndividualDeckView extends React.Component {
  render() {
    const {deckKeyStr, deckValueObj}  = this.props;
    return (
       deckValueObj ?
        <View style={styles.container}>
          <Text style={styles.titleText}> {deckValueObj.title} </Text>
          <Text style={styles.dataText}> {deckValueObj.questions.length} Cards </Text>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around',width: 300, height: 300}}>
            <Button color={purple}
              title="Add Card"
              onPress={() => this.props.navigation.navigate('AddCard', { deckKeyStr })}/>
            <Button color={orange}
              title="Start Quiz"
              onPress={() => this.props.navigation.navigate('Quiz', { deckKeyStr, deckValueObj })}/>
          </View>
        </View>
        :
        <View style={styles.container}>
          <Text style={styles.titleText}> Oops...Deck {deckKeyStr} does not exist. </Text>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 25
  },
})

function mapStateToProps (state, { navigation }) {
  const { deckKeyStr } = navigation.state.params
  return {
    deckKeyStr,
    deckValueObj: state[deckKeyStr],
  }
}

export default connect(mapStateToProps)(IndividualDeckView)
