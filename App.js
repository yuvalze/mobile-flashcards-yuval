import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { fetchDeckResults } from '../utils/api';


export default class DeckListView extends Component {

  state = {
    decksObj: {}
  }

  componentDidMount () {
    fetchDeckResults().then(res => this.setState({decksObj: res}));
  }


  render() {
    const decksArr = Object.values(this.state.decksObj);

    return (
      <View style={styles.container}>
        <Text style = {styles.titleText}> DECKS </Text>
        <View style = {styles.lineStyleYellow} />
        {decksArr.map ( deckItem => 
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('IndividualDeck')}>
            <Text style={styles.titleText}> {deckItem.title} </Text>
            <Text style={styles.dataText}> {deckItem.questions.length}  Cards </Text>
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
