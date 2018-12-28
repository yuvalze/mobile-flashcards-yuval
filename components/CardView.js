import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {SubmitBtn} from './CommonComponent'
import { purple, white } from '../utils/colors'

export default class CardView extends React.Component {
    state = {
        cardSide: 'question'
    };
    OnChangeSize = () => {
        if (this.state.cardSide === 'question') {
            this.setState({cardSide: 'answer'});
        }
        else {
            this.setState({cardSide: 'question'});
        }
    }
    render() {
        const titleText = this.state.cardSide === 'question' ?  'Question' : 'Answer';
        return (
            <View>
                <Text> {titleText} </Text>
                <Text> {this.props.cardData[this.state.cardSide]} </Text>
                <SubmitBtn 
                    onPress={this.OnChangeSize} 
                    textButton={'Change Side'}/>
            </View>
        )
    }
}
