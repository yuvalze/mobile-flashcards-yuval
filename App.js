import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import DeckListView from './components/DeckListView';
import IndividualDeckView from './components/IndividualDeckView';
import QuizView from './components/QuizView';
import AddCard from './components/AddCard';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const AppNavigator = createStackNavigator(
  {
    DeckList: DeckListView,
    IndividualDeck: IndividualDeckView,
    Quiz: QuizView,
    AddCard: AddCard
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