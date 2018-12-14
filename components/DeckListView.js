import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { fetchDeckResults } from '../utils/api';


export default class DeckListView extends Component {

  state = {
    decksObj: {}
  }

  componentDidMount () {
    fetchDeckResults().then(res => this.setState({decksObj: res}));
  }

  renderItemSection = ({item, index, section}) => (
      <Button color="#841584" key={index} title = {item}
      onPress={() => this.props.navigation.navigate('IndividualDeck')}/>
  )


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
        <Text style = {styles.titleText}> DECKS </Text>
        <View style = {styles.lineStyleYellow} />
          <SectionList
              sections={sectionsValue}
            renderItem={this.renderItemSection}
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
  lineStyleYellow:{
    borderBottomColor: 'yellow',
    borderBottomWidth: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
