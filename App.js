import React from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
import { Constants } from 'expo'
import DeckListView from './components/DeckListView'
import IndividualDeckView from './components/IndividualDeckView'
import { createStackNavigator, createAppContainer } from 'react-navigation';

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    DeckList: DeckListView,
    IndividualDeck: IndividualDeckView
  },
  {
    initialRouteName: 'DeckList'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}
