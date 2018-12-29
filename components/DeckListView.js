import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView  } from 'react-native';
import { fetchDeckResults } from '../utils/api';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DeckListView extends Component {

  state = {
    decksObj: {}
  }

  componentDidMount () {
    fetchDeckResults().then(decksObj =>{ 
      this.props.dispatch(receiveDecks(decksObj))
    });
  }

  render() {
    const decksKeyValueArr = Object.entries(this.props.decksObj || {});

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style = {styles.titleText}> DECKS </Text>
          <View style = {styles.lineStyleYellow} />
          {decksKeyValueArr.map ( (deckKeyValueItem, index) => {
            const deckKeyStr = deckKeyValueItem[0];
            const deckValueObj =  deckKeyValueItem[1];
            return(
            <View> 
              <TouchableOpacity style={styles.center}
                key = {index}
                onPress = {() => this.props.navigation.navigate('IndividualDeck', {deckKeyStr, deckValueObj})}>
                <Text style = {styles.deckText}> {deckValueObj.title} </Text>
                <Text style = {styles.dataText}> {deckValueObj.questions.length}  Cards </Text>
              </TouchableOpacity> 
              <View style = {styles.lineStyleGray} />
            </View>
            )
          })}
        </ScrollView>
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
  lineStyleGray:{
    borderBottomColor: 'gray',
    borderBottomWidth: 8,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    backgroundColor: '#DDDDDD',
  },
    deckText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 20
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
})

function mapStateToProps (state) {
  return {
    decksObj : state
  }
}

export default connect(mapStateToProps)(DeckListView)

