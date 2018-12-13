import React from 'react';
import { Button, View, Text } from 'react-native';

export default class IndividualDeckView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Deck List"
          onPress={() => this.props.navigation.navigate('DeckList')}/>
      </View>
    );
  }
}