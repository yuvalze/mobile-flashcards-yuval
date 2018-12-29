import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import {TouchableOpacityBtn} from './CommonComponent'

const QuizScoreView = (props) => {
    const {answeredQuestion, answeredCorrect, onResetQuiz, onBackToDeck} = props;

    return (
        <View>
            <Text style={styles.titleText}> Quiz Result </Text>
            <Text style={styles.insideText}> You answered {answeredCorrect} correct questions out of {answeredQuestion} </Text>
            <TouchableOpacityBtn 
                    onPress={ onResetQuiz } 
                    textButton={'Restart Quiz'}/>
            <TouchableOpacityBtn 
                onPress={ onBackToDeck } 
                textButton={'Back to Deck'}/>                    
        </View>
    )
}

export default QuizScoreView;

QuizScoreView.propTypes = {
    answeredQuestion: PropTypes.number.isRequired,
    answeredCorrect: PropTypes.number.isRequired,
    onResetQuiz: PropTypes.func.isRequired,
    onBackToDeck: PropTypes.func.isRequired
  };

  const styles = StyleSheet.create({
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: '#DDDDDD',
    },
    insideText: {
        fontSize: 20,
      },
  })