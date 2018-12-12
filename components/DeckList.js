import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View } from 'react-native';
import { fetchDeckResults } from '../utils/api';

export default class DeckList extends Component {

  state = {
    decksObj: {}
  }

  componentDidMount () {
    fetchDeckResults().then(res => this.setState({decksObj: res}));
  }

  render() {
    const decksArr = Object.values(this.state.decksObj);
    const sectionsValue=
      decksArr.map ( deckItem => { return (
        {title: deckItem.title, data: [[deckItem.questions.length] + ' Cards']}
      )});
      console.log('secctionValue');
      console.log(sectionsValue);

    return (
      <View style={styles.container}>
        <SectionList
            sections={sectionsValue}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 4,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'grey',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
