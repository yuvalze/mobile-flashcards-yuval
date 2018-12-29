import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {TouchableOpacityBtn} from './CommonComponent'
import PropTypes from 'prop-types';

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
                <TouchableOpacityBtn 
                    onPress={this.OnChangeSize} 
                    textButton={'Change Side'}/>
                <Text>Questions Remaining: {this.props.questionsRemaining}</Text>  
                <Text>Press Mark Correct if you have answered correct</Text>  
                <TouchableOpacityBtn 
                    onPress={this.props.onAnsweredCorrect} 
                    textButton={'Mark Correct'}/>   
                <Text>Press Mark Incorrect if you have answered incorrect</Text>  
                <TouchableOpacityBtn 
                    onPress={this.props.onAnsweredIncorrect} 
                    textButton={'Mark Incorrect'}/>                 
            </View>
        )
    }
}

CardView.propTypes = {
    cardData: PropTypes.object.isRequired,
    onAnsweredCorrect: PropTypes.func.isRequired,
    onAnsweredIncorrect: PropTypes.func.isRequired,
    questionsRemaining : PropTypes.number.isRequired
  };
