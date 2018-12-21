import React from 'react'
import {View, Text} from 'react-native'
import CardView from './CardView'

export default class QuizView extends React.Component {
    render() {
        const {deckItem}  = this.props.navigation.state.params;
        return (
            <View>
                <Text> QuizView </Text>
                <CardView cardData={deckItem.questions[0]}/>
            </View>
        )
    }
}