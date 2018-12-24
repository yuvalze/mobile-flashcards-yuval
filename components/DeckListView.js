import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fetchDeckResults } from '../utils/api';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DeckListView extends Component {

  state = {
    decksObj: {}
  }

  componentDidMount () {
    console.log('DeckListView componentDidMount')
    fetchDeckResults().then(decksObj => this.props.dispatch(receiveDecks(decksObj)));
  }

  render() {
    console.log('DeckListView render this.props');
    console.log(this.props)
    const decksArr = Object.values(this.props.decksObj || []);

    return (
      <View style={styles.container}>
        <Text style = {styles.titleText}> DECKS </Text>
        <View style = {styles.lineStyleYellow} />
        {decksArr.map ( (deckItem, index) => 
          <TouchableOpacity
            key = {index}
            onPress = {() => this.props.navigation.navigate('IndividualDeck', { deckItem })}>
            <Text style = {styles.titleText}> {deckItem.title} </Text>
            <Text style = {styles.dataText}> {deckItem.questions.length}  Cards </Text>
            <View style = {styles.lineStyleYellow} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  lineStyleYellow:{
    borderBottomColor: 'yellow',
    borderBottomWidth: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 20
  },
})

function mapStateToProps (state) {
  return {
    decksObj : state
  }
}

export default connect(mapStateToProps)(DeckListView)


