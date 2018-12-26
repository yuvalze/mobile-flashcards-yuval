import React from 'react'
import {View, Text} from 'react-native'
import CardView from './CardView'

export default class QuizView extends React.Component {
    render() {
        const { deckValueObj }  = this.props.navigation.state.params;
        return (
            <View>
                <Text> QuizView </Text>
                <CardView cardData={deckValueObj.questions[0]}/>
            </View>
        )
    }
}