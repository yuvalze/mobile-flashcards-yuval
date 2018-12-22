import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import DeckListView from './components/DeckListView'
import IndividualDeckView from './components/IndividualDeckView'
import QuizView from './components/QuizView'
import AddCardView from './components/AddCardView'
import AddDeckView from './components/AddDeckView'
import { setLocalNotification } from './utils/helpers'
import { purple, white } from './utils/colors'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const DeckListTabNavigatorView = createBottomTabNavigator(
  {
    AddDeck: AddDeckView,
    DeckList: DeckListView
  },
  {
    initialRouteName: 'DeckList'
  }
);

const AppNavigator = createStackNavigator(
  {
    DeckListTabNavigator: DeckListTabNavigatorView,
    IndividualDeck: IndividualDeckView,
    Quiz: QuizView,
    AddCard: AddCardView
  },
  {
    initialRouteName: 'DeckListTabNavigator'
  }
);

const MainNavigator = createAppContainer(AppNavigator);


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}