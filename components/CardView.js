import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, ScrollView} from 'react-native'
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
        const questionOrAnswerText = this.state.cardSide === 'question' ?  'The Question is' : 'The Answer is';
        return (
            <View>
                <ScrollView>
                    <Text style={styles.questionOrAnswerText}> {questionOrAnswerText} </Text>
                    <Text style={styles.insideText}> {this.props.cardData[this.state.cardSide]} </Text>
                    <TouchableOpacityBtn 
                        onPress={this.OnChangeSize} 
                        textButton={'Change Side'}/>
                    <TouchableOpacityBtn 
                        onPress={this.props.onAnsweredCorrect} 
                        textButton={'Mark Correct'}/>    
                    <TouchableOpacityBtn 
                        onPress={this.props.onAnsweredIncorrect} 
                        textButton={'Mark Incorrect'}/>    
                    <Text style={styles.insideText}>Questions Remaining: {this.props.questionsRemaining}</Text>                          
                </ScrollView>             
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

  const styles = StyleSheet.create({
    questionOrAnswerText: {
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#DDDDDD',
      },
      insideText: {
        fontSize: 20,
      },
  })