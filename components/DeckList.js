import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View } from 'react-native';

export default class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'New Deck 1', data: ['0 Cards']},
            {title: 'New Deck 22', data: ['0 Cards']},
          ]}
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
